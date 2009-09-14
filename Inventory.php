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
		
		$output = array();
	
		while($file = readdir($root))
		{
			if($file != ".." && $file[0] != '.' && $file != "Inventory")
			{
				//If file is a subdirectory, pop inside
				if(is_dir($file))
				{
					// Loop through the subdirectory
					$test = array();
					$test["dir"] = $file;
					$store = array();
					$store["files"] = inventory_list($source_dir . '/' . $file);
					//$output[$file] = $store;
					$test = array_merge($test, $store);
					$output[] = $test;
				}
				else
				{
					// Find and spit out only the HTML files
					if(preg_match('/(.*).html/', $file))
					{
						$output[] = $file;
					}
				}
			}
		}
		closedir($root);
		
		rsort($output);
		return $output;
}

$inv = inventory_list(".");
//print_r($inv);
// JSON output
$json = json_encode($inv);
$jsonarr  = '({"filelist": ';
$jsonarr .= $json;
$jsonarr .= '})';

$response = $_GET['callback'] . $jsonarr;
echo $response;

// End of Inventory.php

$fixture = array(
	 		array(
				"dir" => "",
				"files" => array(
						"index.html",
						"test.html"
				)
			),
			array(
				"dir" => "tmp_dir1",
				"files" => array(
						"dir_1_test1.html",
						"dir_1_test2.html"
				)
			)
	);
// $testjson = json_encode($fixture);
// $jsonarr2  = "<br>";
// $jsonarr2 .= '({"filelist": ';
// $jsonarr2 .= $testjson;
// $jsonarr2 .= '})';
// 
// $response2 = $_GET['callback'] . $jsonarr2;
// echo $response2;