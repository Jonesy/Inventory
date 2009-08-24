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
			if(is_dir($dir . '/' . $file))
				{
					$subdirfile = superList($file);
					$filelist = array_merge($subdirfile, $filelist);
				} else {
					if(preg_match("/(.*).html/", $file, $merb))
					{
						array_push($filelist, $dir . '/' . $merb[0]);
					}
				}
			}
	}
	
	closedir($root);
	
	return $filelist;
}

foreach(superList('.') as $key => $value)
{
	echo $value . "<br/>";
}

/*
$files = glob('*.html');

for($x = 0, $numfiles = count($files); $x < $numfiles; $x++){
	$filenames[$x] = array("filename" => $files[$x]);
}

$json = json_encode($filenames);

$jsonarr  = '(';
$jsonarr .= $json;
$jsonarr .= ')';

$response = $_GET['json_callback'] . $jsonarr;
echo $response;
*/