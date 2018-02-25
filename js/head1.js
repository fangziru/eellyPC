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

