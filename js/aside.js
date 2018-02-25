$(function(){
	$(".slide_box").parent().hover(
		function(){
			$(this).css({"background":"#cf1f3f"});
			$(this).children("i").css({"background-position-y":"0px"});
			$(this).children(".slide_box").css({"opacity":"1","visibility":"visible"});
			$(this).children(".slide_box").animate({
				right:35
			},300);
		},
		function(){
			$(this).css({"background":"none"});
			$(this).children("i").css({"background-position-y":"-17px"});
			$(this).children(".slide_box").css({"opacity":"0","visibility":"hidden","right":"70px"});
		}
	)

	$(".aside_nav_list li:first-child").hover(
		function(){
			$(this).css({"background":"#cf1f3f"});
			$(this).children(".aside_cart").css({"border-color":"#cf1f3f"});
			$(this).children(".aside_cart").find("p").css({"color":"#fff"});
			$(this).children(".aside_cart").find("i").css({"background-position":"-15px -0px"});
		},
		function(){
			$(this).css({"background":"none"});
			$(this).children(".aside_cart").css({"border-color":"#333"});
			$(this).children(".aside_cart").find("p").css({"color":"#939596"});
			$(this).children(".aside_cart").find("i").css({"background-position":"-15px -17px"});
		}
	);
	$(".aside_nav_list li:nth-child(2)").hover(
		function(){
			$(this).css({"background":"#cf1f3f"});
			$(this).find(".user_msg").css({"opacity":"1","visibility":"visible"});
			$(this).find(".user_msg").animate({
				right:35
			},300);
		},
		function(){
			$(this).css({"background":"none"});
			$(this).find(".user_msg").css({"opacity":"0","visibility":"hidden","right":"70px"});
		}
	)
	$(".aside_code").hover(
		function(){
			$(this).css({"background":"#cf1f3f"});
			$(this).find(".aside_code_box").css({"opacity":"1","visibility":"visible"});
			$(this).find(".aside_code_box").animate({
				right:35
			},300);
		},
		function(){
			$(this).css({"background":"none"});
			$(this).find(".aside_code_box").css({"opacity":"0","visibility":"hidden","right":"40px"});
		}
	)
	//alert($(".aside_nav").height());
	if($(".aside_nav").height()<510){
		$(".aside_bottom").css("display","none");
	}else{
		$(".aside_bottom").css("display","block");
	}
	
	$(".back_top").click(function(){
		backTop();
	})
	
	
})
$(window).resize(function(){
	if($(".aside_nav").height()<510){
		$(".aside_bottom").css("display","none");
	}else{
		$(".aside_bottom").css("display","block");
	}
});

function backTop(){
	document.body.scrollTop = document.documentElement.scrollTop=0;	
}
