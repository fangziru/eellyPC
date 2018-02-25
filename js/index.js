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
			$(this).css({"box-shadow":"0 0 27px 3px #333","z-index":10});
			//box-shadow: 0 0 27px 3px #333;
			$(this).find("div").stop().animate({
				top:127
			},300);
		},
		function(){
			$(this).css({"box-shadow":"none","z-index":2});
			$(this).find("div").stop().animate({
				top:79
			},300);
		}
	);
})

//热销好卖
$(function(){
	$(".s_stores_ul > li").hover(
		function(){
			$(this).css({"z-index":"200","box-shadow":"0 0 18px #888"});
			$(this).find(".s_store_img").find("a").css({"display":"block"});
			$(this).find(".s_store_img").find("img").css({"margin":"0"});
			$(this).find(".s_store_list").css("opacity","1");
			$(this).find(".s_store_img").find("a.s_enter").animate({
				width:80
			},100);
			$(this).find(".s_store_img").find("a.s_enter_child").animate({
				width:110
			},100);
			$(this).find(".s_store_msg").stop().animate({
				width:279
			},100,function(){
				
			});
		},
		function(){
			$(this).css({"z-index":"20","box-shadow":"none"});
			$(this).find(".s_store_img").find("a").css({"display":"none","width":"148px"});
			$(this).find(".s_store_img").find("img").css({"margin":"0 auto"});
			$(this).find(".s_store_list").css("opacity","0");
			$(this).find(".s_store_msg").animate({
				width:210
			},100);
		
		}
	)
	$(".s_stores_ul").mouseleave(function(){
		$(this).children().css("box-shadow","none")
		$(this).find(".s_store_img").find("a").css({"display":"none","width":"148px"});
		$(this).find(".s_store_img").find("img").css({"margin":"0 auto"});
		$(this).find(".s_store_list").css("opacity","0");
		$(this).find(".s_store_msg").animate({
			width:210
		},100);
		
	});
})

$(function(){
	$(".s_store_rank >li").mouseenter(function(){
		$(this).find("ul").css("display","block");
		$(this).siblings("li").find("ul").css("display","none");
		
		$(this).find(".s_rank_num").css("color","#222");
		$(this).siblings("li").find(".s_rank_num").css("color","#E0E0E0");
	})
})

//新品推荐
$(function(){
	$(".s_products_list").mouseenter(
		function(){
			$(this).css({"border-color":"white","box-shadow":"0 0 15px #ccc","z-index":"100"});
			$(this).find(".s_product_txt1").css({"display":"none"});
			$(this).find(".s_product_txt2").css({"display":"block"});
			$(this).find(".s_cover_img").css({"opacity":"1"});
			$(this).find(".s_product_over").css({"opacity":"1","display":"block"});
			$(this).find(".s_product_over").animate({
				bottom:-24
			},200);
			//$(this).siblings("li").css({"box-shadow":"none"});
			$(this).siblings("li").find(".s_product_txt1").css({"display":"block"});
			$(this).siblings("li").find(".s_product_txt2").css({"display":"none"});
			$(this).siblings("li").find(".s_cover_img").css({"opacity":"0"});
			$(this).siblings("li").find(".s_product_over").animate({
				opacity:0,
				bottom:-50
			},200);
			//$(this).siblings("li").find(".s_product_over").css({"opacity":"0","display":"none","bottom":"-50px"});
			
		})
		$(".s_products_list").mouseleave(function(){
			$(this).css({"border-color":"#fafafa","box-shadow":"none","z-index":"10"});
			$(this).find(".s_product_txt1").css({"display":"block"});
			$(this).find(".s_product_txt2").css({"display":"none"});
			$(this).find(".s_cover_img").css({"opacity":"0"});
			//$(this).find(".s_product_over").css({"display":"none"});
			$(this).find(".s_product_over").animate({
				opacity:0,
				bottom:-50
			},200);
		})
	
})

//衣联简介
$(function(){
	var eLis=$(".s_intro ul li");
	var eNum=$(".s_eelly > div");
		console.log(eNum);
	for(let i=0;i<eLis.length;i++){
		//let ord=i;
		eLis.eq(i).mouseenter(function(){
			
			$(this).css({"background":"white","border-left-color":"#d9d9d9","border-top-color":"#ee2346","border-right-color":"#d9d9d9","border-bottom-color":"transparent"});
			eLis.eq(0).css({"border-left-color":"transparent"});
			$(this).siblings().css({"background":"#FAFAFA","border-color":"transparent","border-bottom-color":"#d9d9d9"});
			eNum.eq(i).css({"display":"block"});
			eNum.eq(i).siblings().css({"display":"none"});
		})
	}
	
})

//顶部悬浮

$(window).scroll(function(){
	if($(this).scrollTop()>300){
		$(".s_logo_search").addClass("s_xf");
		$(".s_head_main").find(".s_logo").find("img")[0].src="img/logo.png";
		$(".s_head_main").find(".s_logo").children("a").css({"width":"100px"});
		$(".s_head_main").find(".s_code").css({"display":"none"});
		$(".s_head_main").find(".s_search").addClass("s_xf_search");
		$(".s_head_main").find(".s_search_box").css({"width":"855px"});
		$(".s_head_main").find(".search_box").addClass("xf_search_box");
		$(".s_head_main").find(".search").addClass("xf_search");
		$(".s_logo_search").animate({
			"top":0
		},1000);
	}else{
		$(".s_logo_search").removeClass("s_xf");
		
		$(".s_head_main").find(".s_logo").find("img")[0].src="img/p4YBAFmeP0qIcKUqAAAUdZl3p7EAABergLb1MIAABSN818.png";
		$(".s_head_main").find(".s_logo").children("a").css({"width":"388px"});
		$(".s_head_main").find(".s_code").css({"display":"block"});
		$(".s_head_main").find(".s_search").removeClass("s_xf_search");
		$(".s_head_main").find(".s_search_box").css({"width":"530px"});
		$(".s_head_main").find(".search_box").removeClass("xf_search_box");
		$(".s_head_main").find(".search").removeClass("xf_search");
	}
	
	
	
	if($(this).scrollTop()>700){
		$(".back_top").children("i").css({"background-position-y":"0px"});
		$(".back_top").css({"background":"#cf1f3f"});
	}else{
		$(".back_top").children("i").css({"background-position-y":"-17px"});
		$(".back_top").css({"background":"none"});
	}
	
	
	if($(window).scrollTop()>700){
		
		$(".back_top").hover(
			function(){
				$(this).css({"background":"#cf1f3f"});
				$(".back_top").children("i").css({"background-position-y":"0px"});			
			},
			function(){
				$(this).css({"background":"#cf1f3f"});
				$(".back_top").children("i").css({"background-position-y":"0px"});
			}
		)
	}else{
		$(".back_top").hover(
			function(){
				$(this).css({"background":"#cf1f3f"});
				$(".back_top").children("i").css({"background-position-y":"0px"});			
			},
			function(){
				$(this).css({"background":"none"});
				$(".back_top").children("i").css({"background-position-y":"-17px"});
			}
		)
	}
})

$(function(){
	$("#footer").load("footer.html");
	$("#aside").load("aside.html");
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
	let elUserName=getCookie("eluserName");
	//let elUserPass=getCookie("eluserPass");
	$(".s_head_nav1 p").html('Hi，'+elUserName+'<span><a href="#">消息</a><i class="span_line">|</i><a href="login.html">退出</a></span>');
})

















