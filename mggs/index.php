<?php  
 //名爵 pc端
 
include("./mingj.html");
echo '<input type="hidden" name="fromwh" value="2" />';
 
if(isset($_GET['self'])){
	echo '<input type="hidden" name="fself" value="'.$_GET['self'].'" />';
}else{
	echo '<input type="hidden" name="fself" value="0" />';
}  
echo ' <script type="text/javascript" src="/medias/public/javascript/skin/js/jweixin-1.0.0.js"></script>';
?>