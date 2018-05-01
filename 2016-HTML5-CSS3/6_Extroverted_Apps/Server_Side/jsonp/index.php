<?php

header('Content-type: application/json');
$jsonCallback = htmlspecialchars($_REQUEST['callback']);
$json_data= '[{"name":"ARTESIA","time":1308774240669,"sales":8},
{"name":"LOS ANGELES","time":1308774240669,"sales":2},
{"name":"PASADENA","time":1308774240669,"sales":8},
{"name":"STOCKTON","time":1308774240669,"sales":2},
{"name":"FRESNO","time":1308774240669,"sales":2},
{"name":"SPRING VA LLEY","time":1308774240669,"sales":9},
{"name":"ELVERTA","time":1308774240669,"sales":5},
{"name":"SACRAMENTO","time":1308774240669,"sales":7},
{"name":"SAN MATEO","time":1308774240669,"sales":1}]';

echo $jsonCallback."(".$json_data.")";
?>