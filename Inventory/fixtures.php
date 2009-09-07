<?php
//$response = $_GET['callback'] . '([{"filename":"\/index.html"}])';
$response = $_GET['callback'] . '({ "filelist":
 																	[
																		{
																			"dir": "",
																			"files": [
																					{"filename": "\/index.html"},
																					{"filename": "\/test.html"}
																				]
																		},
																		{
																			"dir": "asdf",
																			"files": [
																					{"filename": "\/index.html"},
																					{"filename": "\/test.html"}
																				]
																		}
																	]
																})';
echo $response;