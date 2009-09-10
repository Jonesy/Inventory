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
	$file = scandir($dir);
	
	foreach($file as $f)
	{
		if($f != '.' && $f != '..' && strrpos($f, '.') != '.')
			{
				if(is_dir($f))
				{
					echo 'dir:'.$f . '<br>';
					listInventory($dir . '/' . $f);
				}
				else
				{
					if(preg_match('/(.*).html/', $f))
					{
						echo "&nbsp;files:" . $f . "<br>";
					}
				}
		}
	}
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
//$json = json_encode($files);
//$jsonarr  = '({"filelist": ';
//$jsonarr .= $json;
//$jsonarr .= '})';
//
//$response = $_GET['callback'] . $jsonarr;
//echo $response;

// End of Inventory.php