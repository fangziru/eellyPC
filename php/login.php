<?php
	header("content-type:text/html;charset=utf-8");
	$loginName=$_POST['loginName'];
	$loginPass=$_POST['loginPass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		mysql_select_db("eellyusers",$con);
		
		$sqlStr="select * from  eellyuser where userphone='".$loginName."' and userpass='".$loginPass."'";
	   // echo $sqlStr;
		$result = mysql_query($sqlStr,$con);
		//4)、关闭数据库
		mysql_close($con);
		
		//数据库中查询出结果，表示登录成功。
		if(mysql_num_rows($result)==1){
			echo "1";
		}else if(mysql_num_rows($result)==0){
			echo "0";
		}	
	}
?>