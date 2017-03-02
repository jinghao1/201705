<?php
 
$conn = mysql_connect("localhost","root","1823song");
//mysql_query("set names 'utf8'");
mysql_select_db("media");
$sql = "select * from zt_admin";
$result = mysql_query($sql,$conn);
 
while($row = mysql_fetch_array($result)){
	var_dump($row['username'],$row['email']);
	echo "<br>";
}
?>