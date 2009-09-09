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
	$directory = array();

	while($file = readdir($root))
	{
		if($file != "." && $file != ".." && $file[0] != '.')
		{
			// If file is a subdirectory, pop inside
			if(is_dir($file))
			{
				// Loop through the subdirectory
				$subdirfile = listInventory($dir . '/' . $file);
				$test = array('dir' => $file);
				array_push($htmlfilelist, $test);
				//$htmlfilelist = array_merge($subdirfile, $htmlfilelist);
			}
			else
			{
				// Find and spit out only the HTML files
				if(preg_match('/(.*).html/', $file, $htmlfile))
				{
					array_push($htmlfilelist, $htmlfile[0]);
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


$fixture = array(
	 		array(
				"dir" => "",
				"files" => array(
						"index.html",
						"test.html"
				)
			),
			array(
				"dir" => "test",
				"files" => array(
						"index.html",
						"test.html"
				)
			)
	);

// JSON output
$json = json_encode($files);
$jsonarr  = '({"filelist": ';
$jsonarr .= $json;
$jsonarr .= '})';

$response = $_GET['callback'] . $jsonarr;
echo $response;

// End of Inventory.php