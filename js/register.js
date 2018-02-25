$(function(){
	$("header").load("head1.html");
})

$(function(){
	$(".d_aside_con1").hover(
		function(){
			$(this).css({"background-color":"#d70d25","color":"white"});
		},
		function(){
			$(this).css({"background-color":"#fff","color":"#666"});
		}
	);
	$(".d_aside_con1").click(function(){
		$(this).css({"display":"none"});
		$(".d_aside_con2").css({"right":"1px"});
	});
	$(".d_box_close").click(function(){
		
		$(".d_aside_con2").css({"right":"-255px"});
		$(".d_aside_con1").css({"display":"block"});
	})
})


$(function(){
	$(".reg_ul li .reg_text").focus(function(){
		var order_icon=$(this).parent().index();
		$(this).prev("i").addClass("reg_icon"+(order_icon+1)+"_focus");
	});
	$(".reg_ul li .reg_text").blur(function(){
		var order_icon=$(this).parent().index();
		$(this).prev("i").removeClass("reg_icon"+(order_icon+1)+"_focus");
	})
})

$(function(){
	
	$("#phone").blur(function(){
		let phone=$(this).val();
		console.log(phone);
		$(this).siblings(".reg_error").css("display","block");
		if(phone==""){
			$(this).siblings(".reg_error").html("请输入手机！")
			$(this).siblings(".reg_error").removeClass("ok");
			$(this).siblings(".reg_error").addClass("error");
			
		}else if(!(/^1[34578]\d{9}$/.test(phone))){
			$(this).siblings(".reg_error").removeClass("ok");
			$(this).siblings(".reg_error").addClass("error");
			$(this).siblings(".reg_error").html("手机格式错误！");
			
		}else if(/^1[34578]\d{9}$/.test(phone)){
			
			$.ajax({
				type:"get",
				url:"php/checkphone.php",
				async:true,
				data:{
					userPhone:$(this).val()
				},
				success:function(data){
					if(data=="1"){
						$("#phone").siblings(".reg_error").removeClass("ok");
						$("#phone").siblings(".reg_error").addClass("error");
						$("#phone").siblings(".reg_error").html("该手机号已经存在！");
						
					}else if(data=="0"){
						
						$("#phone").siblings(".reg_error").removeClass("error");
						$("#phone").siblings(".reg_error").addClass("ok");
						$("#phone").siblings(".reg_error").html("");
						
					}
					
				}
			});
			
		}
		
		
	});
	//console.log(rightPhone);
	$("#userPass").focus(function(){
		
		//$(".pass_leve").css("background-position","0px -8px");
		$(".tip_pwd").css("display","block");
		$("#userPass").keyup(function(){
			let userPass=$(this).val();
			if(userPass==""){
				$(".pass_leve").css("background-position","0px 0px");
				$(".pass_leve_txt").html("");
			}else if(/^\d+$/.test(userPass) || /^[a-zA-Z]+$/.test(userPass) || /^\W+$/.test(userPass) || userPass.length<=1){
				$(".pass_leve").css("background-position","0px -8px");
				$(".pass_leve_txt").html("弱");
			}else if(/\d+/.test(userPass) && /[a-zA-Z]+/.test(userPass) && /\W+/.test(userPass)){
				$(".pass_leve").css("background-position","0px -24px");
				$(".pass_leve_txt").html("强");
			}else{
				$(".pass_leve").css("background-position","0px -16px");
				$(".pass_leve_txt").html("中");
			}
		})
	})
	
	$("#userPass").blur(function(){
		let userPass=$(this).val();
		//console.log(userPass);
		
		$(".tip_pwd").css("display","none");
		$(this).siblings(".reg_error").css("display","block");
		if(userPass==""){
			$(this).siblings(".reg_error").html("登录密码不能为空！")
			$(this).siblings(".reg_error").removeClass("ok");
			$(this).siblings(".reg_error").addClass("error");
			
		}else if(/\s|\/|\\|\|\[|\]|\{|\|;|:|""|''}/.test(userPass)){
			$(this).siblings(".reg_error").removeClass("ok");
			$(this).siblings(".reg_error").addClass("error");
			$(this).siblings(".reg_error").html("登录密码包含非法字符！");
			
		}else{
			if(/^\d+$/.test(userPass) || /^[a-zA-Z]+$/.test(userPass) || /^\W+$/.test(userPass)){
				$(this).siblings(".reg_error").removeClass("ok");
				$(this).siblings(".reg_error").addClass("error");
				$(this).siblings(".reg_error").html("登录密码过于简单！");
				
			}else if(userPass.length<6 || userPass.length>16){
				$(this).siblings(".reg_error").removeClass("ok");
				$(this).siblings(".reg_error").addClass("error");
				$(this).siblings(".reg_error").html("请输入6-16个字符！");
				
			}else{
				$(this).siblings(".reg_error").removeClass("error");
				$(this).siblings(".reg_error").addClass("ok");
				$(this).siblings(".reg_error").html("");
				
			}
		}
		//console.log(rightPass);
	})
	
	$("#checkPass").blur(function(){
		let checkPass=$(this).val();
		//console.log(checkPass);
		$(".tip_pwd").css("display","none");
		$(this).siblings(".reg_error").css("display","block");
		if(checkPass==""){
			$(this).siblings(".reg_error").html("请填写图形验证码！")
			$(this).siblings(".reg_error").removeClass("ok");
			$(this).siblings(".reg_error").addClass("error");
			
		}else{
			$(this).siblings(".reg_error").html("")
			$(this).siblings(".reg_error").removeClass("error");
			$(this).siblings(".reg_error").addClass("ok");
		}
	})
	//let emptyInputTit=["请输入手机!","登录密码不能为空！","请填写图形验证码！"];
	$("#go_step").click(function(){
		let phoneEmpty=$("#phone").siblings(".reg_error").html();
		let passEmpty=$("#userPass").siblings(".reg_error").html();
		let checkEmpty=$("#checkPass").siblings(".reg_error").html();
		let phonebox=$("#phone").val();
		let passbox=$("#userPass").val();
		let checkBox=$("#checkPass").val();
		$(".agree_error").css("display","block")
		if($("#agree")[0].checked==false){
			$("#agree").siblings(".reg_error").removeClass("ok");
			$("#agree").siblings(".reg_error").addClass("error");
			$("#agree").siblings(".reg_error").html("请阅读并同意《衣联用户服务协议》和《隐私申明》");
		}else{
			
			$("#agree").siblings(".reg_error").removeClass("error");
			$("#agree").siblings(".reg_error").addClass("ok");
			$("#agree").siblings(".reg_error").html("");
			
		}
		let inputEmpty=$("#agree").siblings(".reg_error").html();
		//console.log(rightPhone+","+rightPass);
		if(phoneEmpty!="" || passEmpty!="" || checkEmpty!="" || inputEmpty!="" || phonebox=="" || passbox=="" || checkBox==""){
			alert("请填写正确的信息");
			return;
		}else{
			$.ajax({
				type:"post",
				url:"php/register.php",
				async:true,
				data:{
					userPhone:$("#phone").val(),
					userPass:$("#userPass").val()
				},
				success:function(data){
					if(data=="1"){
						alert("注册成功！");
					}else if(data=="0"){
						alert("失败！");
					}
				}
			});
		}
	})
})

$(function(){
	
})


















