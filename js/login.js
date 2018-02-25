//顶部图片
$(function(){
	$(".s_icon_close").one("click",function(){
		$(".s_head_title").slideToggle("slow");
	})
})

//登录注册行的js
$(function(){
	$(".s_head_nav2 > li").mouseenter(function(){
		$(this).css("z-index","103");
		$(this).children(".s_tit").children(".s_nav_icon").css("background-position","-6px 0");
		$(this).children(".s_cart_tit").children(".s_nav_pic").css("background-position","0px -19px");
		$(this).children(".s_sc_tit").children(".s_nav_pic").css("background-position","-15px -19px");
		$(this).children(".s_call_tit").children(".s_nav_pic").css("background-position","-29px -19px");
		
		$(this).children(".s_tit").css({"color":"#CF1F3F","border-left":"1px solid #eeeeee","border-right":"1px solid #eeeeee"});
		$(this).children("div.s_net_tit").css("color","#666");
		$(this).children(".s_con").slideToggle("fast");
	});
	
	$(".s_head_nav li").mouseleave(function(){
		$(this).css("z-index","100");
		$(this).children(".s_tit").children(".s_nav_icon").css("background-position","0px 0");
		$(this).children(".s_cart_tit").children(".s_nav_pic").css("background-position","0px -5px");
		$(this).children(".s_sc_tit").children(".s_nav_pic").css("background-position","-15px -5px");
		$(this).children(".s_call_tit").children(".s_nav_pic").css("background-position","-29px -5px");
		
		$(this).children(".s_tit").css({"color":"#666","border-left":"1px solid transparent","border-right":"1px solid transparent"});
		$(this).css("border","none");
		$(this).children(".s_con").stop().slideToggle(0);
	});
})

$(function(){
	$(".d_login_top ul li").click(function(){
		$(this).addClass("current");
		$(this).siblings().removeClass("current");
	})
	$(".d_login_top ul li:first-child").click(function(){
		$(".d_form1").css("display","block");
		$(".d_form2").css("display","none")
	})
	$(".d_login_top ul li:last-child").click(function(){
		$(".d_form2").css("display","block");
		$(".d_form1").css("display","none")
	})
})
$(function(){
	$(".slide_btn")[0].onclick=function(){
		$("#slide_bottom").animate({
			left:-2000
		},1000,function(){
			$("#img01").css("display","none");
			$("#slide_bottom").css("width","10%");
			$("#slide_bottom").animate({
				//width:126,
				left:-126,
			},100,function(){
				$("#img02").css("display","block");
				$("#slide_bottom").animate({left:0},500);
			});
		});
	}
	$("#img02")[0].onclick=function(){
		$("#slide_bottom").animate({
			left:-126
		},100,function(){
			$("#img02").css("display","none");
			$("#slide_bottom").css("width","100%");
			$("#slide_bottom").animate({
				//width:100%,
				left:-2000
			},200,function(){
				$("#img01").css("display","block");
				$("#slide_bottom").animate({left:0},1000);
			});
		});
	}
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
	$("#loginName").focus(function(){
		$(".d_show_error span").html("");
	});
	$("#loginPass").focus(function(){
		$(".d_show_error span").html("");
	});
	
	$("#loginBtn").click(function(){
		if($("#loginName").val()==""){
			$(".d_show_error span").html("请输入已注册用户名或手机或邮箱");
		}else if($("#loginPass").val()==""){
			$(".d_show_error span").html("请输入登录密码");
		}else if($("#loginCheck").val()==""){
			$(".d_show_error span").html("请输入图形验证码");
		}else{
			$.ajax({
				type:"post",
				url:"php/login.php",
				async:true,
				data:{
					loginName:$("#loginName").val(),
					loginPass:$("#loginPass").val()
				},
				success:function(data){
					if(data=="1"){
						if($("#loginTen")[0].checked==true){
							console.log("11");
							addCookie("eluserName",$("#loginName").val(),10);
							addCookie("eluserPass",$("#loginPass").val(),10);
						}
						
						location.href="index.html";
						console.log("登录成功");
					}else if(data=="0"){
						$(".d_show_error span").html('账户名和密码不匹配  ,<a href="#">忘记密码？</a>');
					}
				}
			});
		}
	})
	
	
//	保存cookie
	
})























