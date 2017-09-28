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

//全部商品类目
$(function(){
	$(".s_nav_tit").mouseenter(function(){
		$(this).css({"background":"white","color":"#666","box-shadow":"0px -2px 5px rgba(0,0,0,0.1)","height":"41px"});
		$(".s_goods_sort").slideToggle("fast");
	})
	$(".s_allGoods").mouseleave(function(){
		$(".s_nav_tit").css({"background":"#e11639","color":"white","box-shadow":"none","height":"40px"});
		$(".s_goods_sort").stop().slideToggle("fast");
	})
})

//批发市场
$(function(){
	$(".s_one_2").mouseenter(function(){
		$(".s_one_1 .s_hot_goods").css("opacity","0");
		$(".s_one_1").css("background","#ee2346");
		$(".s_one_2").css("background","#303345");
		$(this).find(".s_ban_goodsSort").css("display","block");
		$(".s_one_2 .s_ban_goodsSort").stop().animate({
			width:"612"
		},200,function(){
			$(".s_one_2 .s_hot_goods").css("opacity","1");
		})
	});
	$(".s_one_2").mouseleave(function(){
		$(".s_one_2 .s_hot_goods").css("opacity","0");
		$(".s_one_1").css("background","#303345");
		$(".s_one_2").css("background","#e11639");
		$(".s_one_2 .s_ban_goodsSort").stop().animate({
			width:"204"
		},200,function(){
			$(".s_one_2 .s_ban_goodsSort").css("display","none");
			$(".s_one_1 .s_hot_goods").css("opacity","1");
			
		})
	})
})

//手风琴
$(function(){
	let arrStart=[0,195,390,585,780];
	$(".s_list_one > li").each(function(i){
		$(this).css("left",arrStart[i]+"px");
	})
	
	let arrLeft=[0,66,132,198,270];
	let arrRight=[600,660,720,780];
	$(".s_list_one > li").mouseenter(function(){
		$(this).css({"width":"707","zIndex":10});
		$(this).find(".s_brief p").css({"text-align":"left","display":"block"});
		$(this).find(".s_adress,.s_cell").css("margin-top","2px");
		$(this).find(".s_goods_list").css({"display":"block"});
		$(this).find(".s_link").css("opacity","0");
		let index = $(this).index();
		console.log(index+"#");
		$(".s_list_one > li:gt("+index+")").each(function(i){//0
			console.log(i+"右");
			$(this).css("z-index",5-i);
			$(this).animate({
				left:arrRight[i+index]
			},300);			
		});
		$(".s_list_one > li:lt("+(index+1)+")").each(function(i){
			$(this).css("z-index",i+6);
			console.log(i+"左");
			$(this).animate({
				//left:arrLeft[i+1]
				left:arrLeft[i]
			},300);
			
		});
		
		$(this).find(".s_goods_list").animate({
			"opacity":1
		},1000);
		$(this).siblings("li").css("width","195");
		$(this).siblings("li").find(".s_goods_list").css({"opacity":"0","display":"none"});
		$(this).siblings("li").find(".s_link").css("opacity","0.25");
		
		$(this).siblings("li").find(".s_brief p").css({"text-align":"center","display":"block"});
		$(this).siblings("li").find(".s_adress").css("margin-top","4px");
		
		$(this).siblings("li").find(".s_cell").css({"margin-top":"0px","display":"none"});
	});
	$(".s_list_one").mouseleave(function(){
		$(".s_list_one > li").each(function(i){
			$(this).css("left",arrStart[i]+"px");
			$(this).css({"z-index":"1","width":"195"});
			$(this).find(".s_goods_list").css({"opacity":"0","display":"none"});
			
			$(this).find(".s_brief p").css({"text-align":"center","display":"block"});
			$(this).find(".s_adress").css("margin-top","4px");
		
			$(this).find(".s_cell").css({"margin-top":"0px","display":"none"});
			$(this).find(".s_link").css("opacity","0");
		})
	})
})

//走货
$(function(){
	var currOrd=0;
	var timer;
	goStepUp();
	function goStepUp(){
		timer=setInterval(function(){
		currOrd++;
		var imgSrc=["1.jpg","2.jpg","3.jpg","4.jpeg","5.jpg","6.png","7.jpeg","8.jpeg"];
		var num=parseInt(Math.random()*8);
		var lis =$("#s_walk_goods li").eq(1+currOrd);//获取li
        var linew = lis.clone(true);//克隆
        linew.find("img").attr({src:"img/"+imgSrc[num],alt:""});
        $("#s_walk_goods").append(linew);
        $("#s_walk_goods").animate({
        	top:-90*currOrd
        },400,function(){
      	$("#s_walk_goods>li").eq(0).remove();
     	$("#s_walk_goods").css("top",0);
      	currOrd=0
        })
	},5000);
	}
	$(".s_piano_right > div").mouseenter(function(){
		clearInterval(timer);
	})
	$(".s_piano_right > div").mouseleave(function(){
		//timer;
		goStepUp();
	})
})

//精选市场
$(function(){
	$(".s_market ul li").hover(
		function(){
			$(this).find("div").stop().animate({
				top:127
			},300);
		},
		function(){
			$(this).find("div").stop().animate({
				top:79
			},300);
		}
	);
})

































