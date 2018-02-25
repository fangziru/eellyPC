<?php
	header("content-type:text/html;charset=utf-8");
	
	//接收客户端的数据
	$userphone=$_POST['userPhone'];
	$userpass=$_POST['userPass'];
	
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "注册失败！服务器异常，请稍后再试……";		
	}else{
		//2)、选择数据库
		mysql_select_db("eellyusers",$con);
		
		//3)、执行SQL语句（增）
		$sqlStr="insert into eellyuser(userphone,userpass) values('".$userphone."','".$userpass."')";
	    //echo $sqlStr;
		$t = mysql_query($sqlStr,$con);
		//4)、关闭数据库
		mysql_close($con);
		
		//echo $t;
		//3、注册成功！		
		if($t==1){
			echo "1";
		}else{
			echo "0";
		}	
	}
?>