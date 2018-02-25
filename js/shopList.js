$(function(){
	$("header").load("head1.html");
	let elUserName=getCookie("eluserName");
	//let elUserPass=getCookie("eluserPass");
	$("header .s_head_nav1 p").html('Hi，'+elUserName+'<span><a href="#">消息</a><i class="span_line">|</i><a href="login.html">退出</a></span>');

})

$(function(){
	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		success:function(data){
			let goodsList=eval(data);
			let goodsStr='';
			for(let i=0;i<goodsList.length;i++){
				goodsStr+='<li class="l_list_items">'+
							'<div class="l_goods_con">'+
								'<div class="l_goods_show">'+
									'<div class="l_goods_img">'+
										'<a href="detailPage.html?'+goodsList[i].goodsId+'">'+
											'<img src="img/'+goodsList[i].goodsImg+'"/>'+
										'</a>'+
										'<div class="layer_cont">'+
											'<span>'+
												'<a href="javascript:;">'+goodsList[i].beiyong1+'</a>'+
											'</span>'+
										'</div>'+
									'</div>'+
									'<div class="l_goods_txt">'+
										'<p class="l_shop_price clear">'+
											'<span class="l_price_icon"><span>¥</span>'+goodsList[i].goodsPrice+'</span>'+
											'<a href="javascript:;"></a>'+
										'</p>'+
										'<p class="l_shop_dec">'+
											'<a href="javascript:;">'+goodsList[i].goodsName+'</a>'+
										'</p>'+
										'<p class="l_shop_detail">'+
											'<span class="l_shop_area">'+
												'<a href="javascript:;">'+goodsList[i].goodsDesc+'</a>'+
											'</span>'+
											'<span class="l_store_old">'+
												'<span class="year">'+
													'<span>'+goodsList[i].beiyong2+'</span>'+
												'</span>'+
											'</span>'+
											'<a href="javascript:;" class="service_log"></a>'+
										'</p>'+
										'<div class="l_store_cer">'+
											'<ul class="clear_ul">'+
												'<li class="is_integrity"></li>'+
												'<li class="is_credit no_credit"></li>'+
												'<li class="is_entity no_entity"></li>'+
												'<li class="is_company"></li>'+
											'</ul>'+
										'</div>'+
										'<p class="l_store_tit">'+
											'<span>'+goodsList[i].beiyong3+'</span>'+
										'</p>'+
									'</div>'+
								'</div>'+
								'<div class="l_goods_hide">'+
									'<h3 class="title">'+
										'<span class="title_txt"><a href="javascript:;">本店同系列推荐</a></span>'+
										'<span class="goods_num">'+
											'<i><a href="javascript:;">全部('+goodsList[i].goodsCount+')</a></i>'+
										'</span>'+
									'</h3>'+
									'<ul class="like_goods clear_ul">'+
										'<li>'+
											'<div class="like_goods_img">'+
												'<a href="javascript:;"><img src="img/'+goodsList[i].beiyong4+'"/></a>'+
											'</div>'+
											'<p class="other_txt">'+
												'<span class="price">¥'+goodsList[i].beiyong7+'</span>'+
												'<span class="cart_icon"></span>'+
											'</p>'+
										'</li>'+
										'<li>'+
											'<div class="like_goods_img">'+
												'<a href="javascript:;"><img src="img/'+goodsList[i].beiyong5+'"/></a>'+
											'</div>'+
											'<p class="other_txt">'+
												'<span class="price">¥'+goodsList[i].beiyong8+'</span>'+
												'<span class="cart_icon"></span>'+
											'</p>'+
										'</li>'+
										'<li>'+
											'<div class="like_goods_img">'+
												'<a href="javascript:;"><img src="img/'+goodsList[i].beiyong6+'"/></a>'+
											'</div>'+
											'<p class="other_txt">'+
												'<span class="price">¥'+goodsList[i].beiyong9+'</span>'+
												'<span class="cart_icon"></span>'+
											'</p>'+
										'</li>'+
									'</ul>'+
								'</div>'+
							'</div>'+
						'</li>'
			}
			$(".l_list_ul").append(goodsStr);
			console.log(goodsList);
			console.log(goodsList.length);
			console.log(goodsList[0].goodsId);
			$(".l_list_items").hover(
		
			function(){
				//alert("1");
				$(this).addClass("active");
				$(this).find(".l_goods_hide").css("display","block");
				$(this).siblings().removeClass("active");
				$(this).siblings().find(".l_goods_hide").css("display","none");
			},
			function(){
				$(this).removeClass("active");
				$(this).find(".l_goods_hide").css("display","none");
			}
		)
		}
	});
	setTimeout(function(){
		
	},1000)
	
})

$(function(){
	//价格区间
	$(".l_price_box input").focus(function(){
		$(".l_price_box").next(".l_qdOrqx").css("display","block")
	})
	$(".l_price_box input").blur(function(){
		$(".l_price_box").next(".l_qdOrqx").css("display","none")
	})
	
	//起订量
	$(".l_order_num input").focus(function(){
		$(".l_order_num").addClass("l_order_num_hover");
		$(".l_goods_num").css("overflow","visible");
		$(".l_order_num").children(".l_qdOrqx").css("display","block")
	})
	$(".l_order_num input").blur(function(){
		$(".l_order_num").removeClass("l_order_num_hover");
		$(".l_goods_num").css("overflow","hidden");
		$(".l_order_num").children(".l_qdOrqx").css("display","none")
	})
})


//页面跳转
$(function(){
	$(".l_page_num").click(function(){
		let pageOrd=$(this).index();
		let pageCurr=$(".l_page_curr").index();
		//console.log(pageOrd);console.log(pageCurr);
	})
	
})



$(function(){
	$("#footer").load("footer.html");
	$("#aside").load("aside.html");
	//$("#footer .s_footer .s_footer_nav ul").css("display","none");
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
	//console.log($(".fff").val());
})


//悬浮
$(window).scroll(function(){
	if($(this).scrollTop()>300){
		$(".l_select_con").addClass("l_select_xf");
	}else{
		$(".l_select_con").removeClass("l_select_xf");
	}
})





















