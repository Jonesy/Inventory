<?php
/*
	==============================================================
	Inventory - by Joshua R Jones
	for The General Metrics Web Development Company
	http://general-metrics.com
	Copyright (c) 2009 The General Metrics Web Development Company
	==============================================================
	*/
function listInventory($dir)
{
	// Open the dir and set the vars

	$root = opendir($dir);
	$htmlfilelist = array();
	$subdirfile = array();

	while($file = readdir($root))
	{
		if($file != "." && $file != ".." && $file[0] != '.')
		{
			// If file is a subdirectory, pop inside
			if(is_dir($file))
			{
				// Loop through the subdirectory
				$subdirfile = listInventory($dir . '/' . $file);
				$htmlfilelist = array_merge($subdirfile, $htmlfilelist);
			}
			else
			{
				// Find and spit out only the HTML files
				if(preg_match('/(.*).html/', $file, $htmlfile))
				{
					array_push($htmlfilelist, $dir . '/' . $htmlfile[0]);
				}
			}
		}
	}
	
	// Close up shop
	closedir($root);
	sort($htmlfilelist);
	
	return $htmlfilelist;
}

// Get an array of specified files and prep the array for JSON output
$files = listInventory('.');

for($x = 0, $numfiles = count($files); $x < $numfiles; $x++)
{
	// Clean up and remove the '.' infront of files
	$cleanuri = substr($files[$x], 1);
	$filenames[$x] = array("filename" => $cleanuri);
}

// JSON output
$json = json_encode($filenames);
$jsonarr  = '(';
$jsonarr .= $json;
$jsonarr .= ')';

$response = $_GET['json_callback'] . $jsonarr;
echo $response;

// End of Inventory.php