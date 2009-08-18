<?php

$files = glob('*html');

for($x = 0, $numfiles = count($files); $x < $numfiles; $x++){
	$filenames[$x] = array("filename" => $files[$x]);
}

$json = json_encode($filenames);

$jsonarr  = '(';
$jsonarr .= $json;
$jsonarr .= ')';
echo $jsonarr;
