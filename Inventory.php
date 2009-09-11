<?php
/*
==============================================================
Inventory - by Joshua R Jones
for The General Metrics Web Development Company
http://general-metrics.com
Copyright (c) 2009 The General Metrics Web Development Company
==============================================================
*/

function inventory_list($source_dir)
{	
	// Open the dir and set the vars
		$root = opendir($source_dir);
	
		while($file = readdir($root))
		{
			if($file != "." && $file != ".." && $file[0] != '.' && $file != "Inventory")
			{
				// If file is a subdirectory, pop inside
				if(is_dir($file))
				{
					// Loop through the subdirectory
					//$store = array();
					
					//$output[$file] = $store;
					$output = '{"dir": "'.$file.'", "files: ["';
					$output .= inventory_list($source_dir . '/' . $file);
					$output .= '"],';
				}
				else
				{
					// Find and spit out only the HTML files
					if(preg_match('/(.*).html/', $file))
					{
						//$output[] = array("filename" => $file);
						$output .= $file;
					}
				}
			}
		}
		closedir($root);
		return $output;
}

$inv = inventory_list(".");

echo '({"filelist": ['. $inv . ']})';

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
	
//$inv = inventory_list(".");
//print_r($inv);
// JSON output
//$json = json_encode($inv);
//$jsonarr  = '({"filelist": ';
//$jsonarr .= $json;
//$jsonarr .= '})';
//
//$response = $_GET['callback'] . $jsonarr;
//echo $response;

// End of Inventory.php