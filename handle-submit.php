<html lang="en">
  <head>
    <meta charset="utf-8">
   </head>
   <body>
<?php
/*
200902 - initial version - different file per submission 
Changes

*/
// file name different each time:  sn101-B2-DATE-paradopoulos.htm
// file contents : textarea + sn101-B2-DATE-paradopoulos

//$schoolname-

print_r ($_REQUEST);


$mytext=$_REQUEST["text_entered"] ;

echo "<HR>";
//$cur_date= date('Ymd');
$file_name="sch".$_REQUEST["schoolname"]."-".$_REQUEST["taksi"].$_REQUEST["tmima"]."-".date('Ymd')."-".$_REQUEST["name"].".htm";

echo $file_name;
//$file_name=$cur_date;


$myfile = fopen("word_saved_data/".$file_name, "w") or die("Unable to open file!");
$txt = "<h2>$file_name</h2>\n";
fwrite($myfile, $txt);
$txt = "$mytext\n";
fwrite($myfile, $txt);
fclose($myfile);

echo "<HR><h2>Η εργασία σας καταχωρήθηκε.</h2> Παρακαλώ κλείστε αυτήν την καρτέλα.";



?>
</body> 
</html>