<?php

function superList($dir)
{
	$root = opendir($dir);
	$filelist = array();
	$subdirfile = array();

	while($file = readdir($root))
	{
		if($file != "." && $file != ".." && $file[0] != '.')
		{
			if(is_dir($file))
			{
				$subdirfile = superList($dir . '/' . $file);
				$filelist = array_merge($subdirfile, $filelist);
			} else {
				if(preg_match('/[^.](.*).html/', $file, $merb))
				{
					array_push($filelist, $dir . '/' . $merb[0]);
				}
			}
		}
	}
	
	closedir($root);
	
	return $filelist;
}


$files = superList('.');

for($x = 0, $numfiles = count($files); $x < $numfiles; $x++){
	$filenames[$x] = array("filename" => $files[$x]);
}

$json = json_encode($filenames);

$jsonarr  = '(';
$jsonarr .= $json;
$jsonarr .= ')';

$response = $_GET['json_callback'] . $jsonarr;
echo $response;
