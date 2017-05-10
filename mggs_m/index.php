<?php 
//名爵 手机端

include("./jue.html");
echo '<input type="hidden" name="fromwh" value="1" />';
 
if(isset($_GET['self'])){
	echo '<input type="hidden" name="fself" value="'.$_GET['self'].'" />';
}else{
	echo '<input type="hidden" name="fself" value="0" />';
}  
echo ' <script type="text/javascript" src="/medias/public/javascript/skin/js/jweixin-1.0.0.js"></script>';
?>