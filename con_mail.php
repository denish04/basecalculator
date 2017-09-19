<?php
  if(isset($_POST['SendBtn']))
  { 
   /* require_once("Classes/Base_Class.php");
    extract($_POST);

    $objFun = new Base_Class();
    $result = $objFun->mailWithAttachment($from,$mailto,$subject,$message);*/
    
$to = "140540107030@darshan.ac.in";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);
    
  }
?>