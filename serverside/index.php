<?php 
//print_r($_POST); 
print_r($_REQUEST); 

$values = '';
foreach($_REQUEST as $key=>$value) {
    $values.= $key . "=" . $value . "\t";
}

$filename = 'answers.htm';
$firstline='<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><BR>\n';
if (!file_exists($filename)) {   $values=$firstline.$values; }
file_put_contents($filename, $values."<HR>\n", FILE_APPEND);
//$handle = fopen($filename, 'w');
//fwrite($handle, $values);
//fclose($handle);


?>