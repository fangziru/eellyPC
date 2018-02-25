<?php
	header("content-type:text/html;charset=utf-8");
	$userPhone=$_GET['userPhone'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		mysql_select_db("eellyusers",$con);
		$sqlStr="select * from  eellyuser where userphone='".$userPhone."'";
		//echo $sqlStr;
		$result=mysql_query($sqlStr,$con);
		mysql_close($con);
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
		
	}
?>