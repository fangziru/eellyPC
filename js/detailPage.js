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
	let elUserName=getCookie("eluserName");
	//let elUserPass=getCookie("eluserPass");
	$(".s_head_nav1 p").html('Hi，'+elUserName+'<span><a href="#">消息</a><i class="span_line">|</i><a href="login.html">退出</a></span>');

	let urlStr=location.href;
	let goodId=urlStr.substring(urlStr.indexOf("?")+1);
	console.log(goodId);
	$.ajax({
		type:"post",
		url:"php/getGoodsInfo.php",
		async:true,
		data:{
			goodsId:goodId
		},
		success:function(data){
			let goodmsg=JSON.parse(data);
			//console.log(goodmsg);	
			$(".x_store_txt h2 span:last-child").html(goodmsg.goodsName);
			$(".x_imgList ul").append(''+
									'<li><a href="javascript:;"><img src="img/'+goodmsg.beiyong1+'"/></a></li>'+
									'<li><a href="javascript:;"><img src="img/'+goodmsg.beiyong2+'"/></a></li>'+
									'<li><a href="javascript:;"><img src="img/'+goodmsg.beiyong3+'"/></a></li>'+
									'<li><a href="javascript:;"><img src="img/'+goodmsg.beiyong4+'"/></a></li>'+
									'<li><a href="javascript:;"><img src="img/'+goodmsg.beiyong5+'"/></a></li>');
			$(".x_img_box").append('<img src="img/'+goodmsg.beiyong1.replace("small_118_","small_640_")+'"/>')
//			$(".size_price").html(goodmsg.goodsPrice);
			
			//颜色、尺码
			var colorList=goodmsg.beiyong6.split("/");
			var sizeList=goodmsg.beiyong7.split("/");
			
			var colorStr='<span class="x_clr_item x_clr0 active">'+colorList[0]+'</span>'
			var sizeStr='<div class="x_size_area x_size_area_show">';
			for(let j=0;j<sizeList.length;j++){
				sizeStr+='<ul class="size_item size_item'+sizeList[j]+'">'+
							'<li class="size_name cell">'+sizeList[j]+'</li>'+
							'<li class="size_price cell">'+goodmsg.goodsPrice+'元</li>'+
							'<li class="size_num cell">100001件</li>'+
							'<li class="size_op cell">'+
								'<div class="x_ipt_num">'+
									'<span class="x_ipt_num_btn x_ipt_num_lbtn"></span>'+
									'<span class="x_ipt_num_warp">'+
										'<input type="text" id="" value="0" class="x_ipt_num_cur"/>'+
										'<ul class="x_ipt_num_slc" style="width: 44px;">'+
											'<li>15</li><li>10</li><li>5</li>'+
										'</ul>'+
									'</span>'+
									'<span class="x_ipt_num_btn x_ipt_num_rbtn"></span>'+
								'</div>'+
							'</li>'+
						'</ul>';
			}
			sizeStr+='</div>';
			for(let i=1;i<colorList.length;i++){
				colorStr+='<span class="x_clr_item x_clr'+i+'">'+colorList[i]+'</span>';
				sizeStr+='<div class="x_size_area">';
				for(let j=0;j<sizeList.length;j++){
					sizeStr+='<ul class="size_item size_item'+sizeList[j]+'">'+
								'<li class="size_name cell">'+sizeList[j]+'</li>'+
								'<li class="size_price cell">'+goodmsg.goodsPrice+'元</li>'+
								'<li class="size_num cell">100001件</li>'+
								'<li class="size_op cell">'+
									'<div class="x_ipt_num">'+
										'<span class="x_ipt_num_btn x_ipt_num_lbtn"></span>'+
										'<span class="x_ipt_num_warp">'+
											'<input type="text" id="" value="0" class="x_ipt_num_cur"/>'+
											'<ul class="x_ipt_num_slc" style="width: 44px;">'+
												'<li>15</li><li>10</li><li>5</li>'+
											'</ul>'+
										'</span>'+
										'<span class="x_ipt_num_btn x_ipt_num_rbtn"></span>'+
									'</div>'+
								'</li>'+
							'</ul>';
				}
				sizeStr+='</div>';
			}
			$(".x_clr").html(colorStr);
			$(".x_size_list").append(sizeStr);
			
			
			$(".x_imgList ul li img").mouseenter(function(){
				//console.log(this.src);
				$(".x_img_box img")[0].src=this.src.replace("small_118_","small_640_");
				$(".mirrorShow img").src=this.src.replace("small_118_","");
			})
	
			$(".x_img_box").mouseenter(function(){
				
				let img800=$(".x_img_box img")[0].src.replace("small_640_","");
				mirror(img800);
				$(".mirrorShow img").src="";
			})
			$(".x_img_box").mousemove(function(e){
				//let evt=event || window.event;
				let left=e.pageX-$(".x_img_box").position().left-$(".x_shop").offset().left-$(".mirror").width()/2;
				let top=e.pageY-$(".x_img_box").position().top-$(".x_shop").position().top-$(".mirror").height()/2;
				
				if(left<0){
					left=0;
				}else if(left>$(this).width()-$(".mirror").width()){
					left=$(this).width()-$(".mirror").width();
				}
				
				if(top<0){
					top=0;
				}else if(top>$(this).width()-$(".mirror").width()){
					top=$(this).height()-$(".mirror").height();
				}
				
				$(".mirror").css("left",left);
				$(".mirror").css("top",top);
				
				$(".mirrorShow img").css("left",-left*4/3);
				$(".mirrorShow img").css("top",-top*4/3);
			})
	
			$(".x_img_box").mouseleave(function(){
				$(".mirror").remove();
				$(".mirrorShow").remove();
			})
			
			$(".x_clr_item").click(function(){
				let colorIndex=$(this).index();
				console.log(colorIndex);
				$(".x_size_area").eq(colorIndex).addClass("x_size_area_show");
				$(".x_size_area").eq(colorIndex).siblings().removeClass("x_size_area_show");
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
			})
			
			
		//	加
			
			let tatolNum=parseInt($(".x_goods_num").html());
			let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
			
			$(".x_ipt_num_rbtn").click(function(){
				let goodsnum=$(this).prev().children(".x_ipt_num_cur").val();
				
				if($(".x_clr_item .x_num").index()<0){
					$(".x_qingdan").css("display","block");
					$(".x_qingdan").animate({
						'margin-top':"0px",
						"height":"48px"
					},200)
				}
				
				
				let colorIndex=$(".x_clr_item.active").index(".x_clr_item");
				let tatolNum=parseInt($(".x_goods_num").html());
				let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
				let priceCurr=parseFloat($(this).parents(".size_item").children(".size_price").html());
				//alert(colorIndex);
						
				let sizeCurr=$(this).parents(".size_item").children(".size_name").html();
				if($(".x_clr_item.active .x_num").index()<0){
					initDate($(this),colorIndex);
				}
				let everyColorNum=$(".x_clr_item.active .x_num").html();
				everyColorNum++;
				goodsnum++;
				$(this).prev().children(".x_ipt_num_cur").val(goodsnum);
				$(".x_clr_item.active .x_num").html(everyColorNum);
				$(".summary_item"+colorIndex).find(".summary_count").html(everyColorNum+"件");
				tatolNum++;
				$(".x_goods_num").html(tatolNum+"件");
				$(".x_goods_price").html("¥"+parseFloat(tatolPrice+priceCurr).toFixed(2));
			
			
				let colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
				let sizeCurrNum=0;
				if(colorSize.index()<0){
					createEverySize($(this),colorIndex);
				}
				colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
				sizeCurrNum=$(this).prev().children(".x_ipt_num_cur").val();
				colorSize.find(".x_summary_num").html("("+sizeCurrNum+")");
				colorSize.find(".x_ipt_num_cur").val(sizeCurrNum);
					
			})
			
		//	减
			$(".x_ipt_num_lbtn").click(function(){
				let goodsnum=$(this).next().children(".x_ipt_num_cur").val();
				let colorIndex=$(".x_clr_item.active").index(".x_clr_item");
				let sizeCurr=$(this).parents(".size_item").children(".size_name").html();
				if(goodsnum>0){
					
					let tatolNum=parseInt($(".x_goods_num").html());
					let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
					let priceCurr=parseFloat($(this).parents(".size_item").children(".size_price").html());
					//alert(colorIndex);
							
					
					
					let everyColorNum=$(".x_clr_item.active .x_num").html();
					everyColorNum--;
					goodsnum--;
					$(this).next().children(".x_ipt_num_cur").val(goodsnum);
					$(".x_clr_item.active .x_num").html(everyColorNum);
					$(".summary_item"+colorIndex).find(".summary_count").html(everyColorNum+"件");
					tatolNum--;
					$(".x_goods_num").html(tatolNum+"件");
					$(".x_goods_price").html("¥"+parseFloat(tatolPrice-priceCurr).toFixed(2));
				
				
					let colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
					let sizeCurrNum=0;
					
					colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
					sizeCurrNum=$(this).next().children(".x_ipt_num_cur").val();
					colorSize.find(".x_summary_num").html("("+sizeCurrNum+")");
					colorSize.find(".x_ipt_num_cur").val(sizeCurrNum);
					
				}
				if($(this).next().children(".x_ipt_num_cur").val()<=0){
					$(".summary_item"+colorIndex).find(".summary_count_item"+sizeCurr).parent().remove();
				}
				let colorName=$(".x_clr_item.active .x_colorName").html();
				if($(".x_clr_item.active .x_num").html()==0){
					$(".x_clr_item.active").html(colorName);
					$(".summary_item"+colorIndex).remove();
				}
			
				if($(".x_clr_item .x_num").index()<0){
					$(".x_qingdan").css("display","none");
					$(".x_qingdan").animate({
						'margin-top':"49px",
						"height":"0px"
					},200)
				}
					
			})
			
			$(".x_qingdan_btn").toggle(
				function(){
					$(this).addClass("active");
					$(".summary_list").css("display","block");
				},
				function(){
					$(this).removeClass("active");
					$(".summary_list").css("display","none");
				}
			)
			
		//	文本框
			$(".x_ipt_num_cur").focus(function(){
				let that=$(this);
				let inputCurVal=$(this).val();
				console.log(inputCurVal);
				$(this).parent().parent(".x_ipt_num").addClass("active");
				let tatolNum=parseInt($(".x_goods_num").html());
				$(this).next().children("li").mousedown(function(){
					//alert($(this).html());
					that.val($(this).html());
					console.log($(this).html());
					that.parent().parent(".x_ipt_num").removeClass("active");
					
					if($(".x_clr_item .x_num").index()<0){
						$(".x_qingdan").css("display","block");
						$(".x_qingdan").animate({
							'margin-top':"0px",
							"height":"48px"
						},200)
					}
					let colorIndex=$(".x_clr_item.active").index(".x_clr_item");
					let sizeCurr=that.parents(".size_item").children(".size_name").html();
					let colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
					let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
					let priceCurr=parseFloat($(this).parents(".size_item").children(".size_price").html());
					if($(".x_clr_item.active .x_num").index()<0){
						initDate(that,colorIndex);
					}
					let everyColorNum=$(".x_clr_item.active .x_num").html();
					everyColorNum=everyColorNum-inputCurVal+parseInt($(this).html());
					$(".x_clr_item.active .x_num").html(everyColorNum);
					$(".summary_item"+colorIndex).find(".summary_count").html(that.val()+"件");
					$(".x_goods_price").html("¥"+parseFloat(tatolPrice-priceCurr*inputCurVal+priceCurr*$(this).html()).toFixed(2));
					tatolNum=parseInt(tatolNum)-inputCurVal+parseInt($(this).html());
					console.log(parseInt($(this).html()));
					$(".x_goods_num").html(tatolNum+"件");
					let sizeCurrNum=0;
					if(colorSize.index()<0){
						createEverySize(that,colorIndex);
						
					}
					colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
					colorSize.find(".x_ipt_num_cur").val(that.val());
					colorSize.find(".x_summary_num").html("("+that.val()+")");
					
					$(this).parent().children("li").unbind("mousedown");//嵌套的点击事件每次回多触发一次，点击后删除这个事件
				});
			});
			$(".x_ipt_num_cur").blur(function(){
				$(this).parent().parent(".x_ipt_num").removeClass("active");
			})
		}
	});
	
	
	$(".btn_addCart").click(function(){
		var goodsColorSizeStr="";
		for(var i=0;i<$(".x_clr_item").length;i++){
			if($(".x_clr_item").eq(i).find(".x_num").index()<0){
				goodsColorSizeStr+=";";
			}else{
				let sizeNum=$(".summary_item"+i).find(".summary_count_item");
				for(var j=0;j<sizeNum.length;j++){
					goodsColorSizeStr+=sizeNum.eq(j).text().replace("15105","").replace("(","-").replace(")","")+",";
				}
				goodsColorSizeStr=goodsColorSizeStr.substring(0,goodsColorSizeStr.length-1)+";";
			}
		}
		goodsColorSizeStr=goodsColorSizeStr.substring(0,goodsColorSizeStr.length-1);
		
		if(parseInt($(".x_goods_num").html())>0){
			console.log(goodId);
			console.log(elUserName);
			console.log(parseInt($(".x_goods_num").html()));
			console.log(goodsColorSizeStr);
			console.log($(".x_goods_price").html().substring(1));
			$.ajax({
				type:"get",
				url:"php/addShoppingCart.php",				
				data:{
					goodsId:goodId,
					userName:elUserName,
					goodsCount:parseInt($(".x_goods_num").html()),
					goodsColorSizeStr:goodsColorSizeStr,
					goodsMoney:$(".x_goods_price").html().substring(1)
				},
				success:function(data){
					console.log(data);
					if(data=="1"){
						alert("添加成功");
						
					}else if(data=="0"){
						alert("添加失败")
					}
				}
			});
		}else{
			alert("请选择商品！");
		}
		
	})
	
})


$(function(){
	$(".x_clr_btn").toggle(
		function(){
			$(".x_clr").removeClass("x_clr_height");
			$(this).addClass("active");
		},
		function(){
			$(".x_clr").addClass("x_clr_height");
			$(this).removeClass("active");
		}
	)
})

function mirror(imgSrc){
	//$(".x_img_box").one("mouseenter",function(){
	$(".x_img_box").append('<div class="mirror"></div>');
	$(".x_img_box").after('<div class="mirrorShow"><img src="'+imgSrc+'"/></div>');
	//})
}

$(window).scroll(function(){
	if($(this).scrollTop()>215){
		$(".x_shop_right").addClass("x_shop_right_fixed");
	}else{
		$(".x_shop_right").removeClass("x_shop_right_fixed");
	}
})

$(function(){
	$(".btn_getorder").click(function(){
		
	})
})

function operation(obj){
	let that=obj;
	obj.parent().parent(".x_ipt_num").addClass("active");
	obj.next().children("li").click(function(){
		//alert($(this).html());
		that.val($(this).html());
		that.parent().parent(".x_ipt_num").removeClass("active");
	})
}

function initDate(obj,colorIndex){
	let colorName=$(".x_clr_item.active").html();
	
	//
	$(".x_clr_item.active").html('<span class="x_colorName">'+colorName+'</span><span class="x_num"></span>');
	
	let trDom='<tr class="summary_item summary_item'+colorIndex+'">'+
				'<td class="summary_name">'+
					'<a href="javascript:;" class="l_title">'+colorName+'</a>'+
				'</td>'+
				'<td class="summary_count">0件</td>'+
				'<td></td>'+
			'</tr>';
	$(".summary_table").append(trDom);
	//createEverySize(obj,colorIndex);
}
	
function createEverySize(obj,colorIndex){
	let sizeCurr=obj.parents(".size_item").children(".size_name").html();
	let sizeDom='<a href="javascript:void(0)" class="l_title2">'+
					'<span class="summary_count_item summary_count_item'+sizeCurr+'">'+sizeCurr+
						'<span class="summary_num">'+
							'<span class="x_summary_num">(0)</span>'+
							'<div class="x_ipt_num">'+
								'<span class="x_ipt_num_btn x_ipt_num_lbtn"></span>'+
								'<span class="x_ipt_num_warp">'+
									'<input type="text" id="" value="0" class="x_ipt_num_cur"/>'+
									'<ul class="x_ipt_num_slc" style="width: 25px;">'+
										'<li>15</li><li>10</li><li>5</li>'+
									'</ul>'+
								'</span>'+
								'<span class="x_ipt_num_btn x_ipt_num_rbtn"></span>'+
							'</div>'+
						'</span>'+
					'</span>'+
				'</a>';
	$(".summary_item"+colorIndex).children("td").last().append(sizeDom);
	
	$(".summary_count_item").on("mouseenter",function(){
		$(this).find(".x_summary_num").css("display","none");
		$(this).find(".x_ipt_num").css("display","inline-block");
	})
	$(".summary_count_item").on("mouseleave",function(){
		$(this).find(".x_summary_num").css("display","inline");
		$(this).find(".x_ipt_num").css("display","none");
	})
	
	
	$(".summary_item"+colorIndex).find(".summary_count_item"+sizeCurr).find(".x_ipt_num_rbtn").on("click",function(){
		//let colorIndex=$(".x_clr_item.active").index(".x_clr_item");
		let goodsnum=$(this).prev().children(".x_ipt_num_cur").val();		
		
		let tatolNum=parseInt($(".x_goods_num").html());
		let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
		
		let sizeUl=$(".x_size_area").eq(colorIndex).find(".size_item"+sizeCurr);		
		let priceCurr=parseFloat(sizeUl.children(".size_price").html());
		
		let everyColorNum=$(".x_clr_item").eq(colorIndex).find(".x_num").html();
		everyColorNum++;
		goodsnum++;
		$(this).prev().children(".x_ipt_num_cur").val(goodsnum);
		sizeUl.find(".x_ipt_num_cur").val(goodsnum);
		$(".x_clr_item").eq(colorIndex).find(".x_num").html(everyColorNum);
		$(".summary_item"+colorIndex).find(".summary_count").html(everyColorNum+"件");
		tatolNum++;
		$(".x_goods_num").html(tatolNum+"件");
		$(".x_goods_price").html("¥"+parseFloat(tatolPrice+priceCurr).toFixed(2));
		$(this).parents(".summary_count_item"+sizeCurr).find(".x_summary_num").html("("+goodsnum+")");
	})
	
	$(".summary_item"+colorIndex).find(".summary_count_item"+sizeCurr).find(".x_ipt_num_lbtn").on("click",function(){
		
		let goodsnum=$(this).next().children(".x_ipt_num_cur").val();		
		if(goodsnum>0){
			let tatolNum=parseInt($(".x_goods_num").html());
			let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
			
			let sizeUl=$(".x_size_area").eq(colorIndex).find(".size_item"+sizeCurr);		
			let priceCurr=parseFloat(sizeUl.children(".size_price").html());
			
			let everyColorNum=$(".x_clr_item").eq(colorIndex).find(".x_num").html();
			everyColorNum--;
			goodsnum--;
			console.log(goodsnum);
			$(this).next().children(".x_ipt_num_cur").val(goodsnum);
			sizeUl.find(".x_ipt_num_cur").val(goodsnum);
			$(".x_clr_item").eq(colorIndex).find(".x_num").html(everyColorNum);
			$(".summary_item"+colorIndex).find(".summary_count").html(everyColorNum+"件");
			tatolNum--;
			$(".x_goods_num").html(tatolNum+"件");
			$(".x_goods_price").html("¥"+parseFloat(tatolPrice-priceCurr).toFixed(2));
			$(this).parents(".summary_count_item"+sizeCurr).find(".x_summary_num").html("("+goodsnum+")");
		}
		if($(this).next().children(".x_ipt_num_cur").val()<=0){
			$(this).parents(".summary_count_item"+sizeCurr).parent().remove();
		}
		let colorName=$(".x_clr_item").eq(colorIndex).find(".x_colorName").html();
		if($(".x_clr_item").eq(colorIndex).find(".x_num").html()<=0){
			$(".x_clr_item").eq(colorIndex).html(colorName);
			$(".summary_item"+colorIndex).remove();
		}
		if($(".x_clr_item .x_num").index()<0){
			$(".x_qingdan").css("display","none");
			$(".x_qingdan").animate({
				'margin-top':"0px",
				"height":"0px"
			},200)
		}
	})
	
	//文本框选择
	$(".summary_item"+colorIndex).find(".summary_count_item"+sizeCurr).find(".x_ipt_num_cur").focus(function(){
		let that=$(this);
		let inputCurVal=$(this).val();
		console.log(inputCurVal);
		$(this).parent().parent(".x_ipt_num").addClass("active");
		$(this).next().children("li").mousedown(function(){
			//alert($(this).html());
			that.val($(this).html());
			console.log($(this).html());
			that.parent().parent(".x_ipt_num").removeClass("active");
			let tatolNum=parseInt($(".x_goods_num").html());
			let tatolPrice=parseFloat($(".x_goods_price").html().substring(1));
			
			let sizeUl=$(".x_size_area").eq(colorIndex).find(".size_item"+sizeCurr);		
			let priceCurr=parseFloat(sizeUl.children(".size_price").html());
			let colorSize=$(".summary_item"+colorIndex).children("td").last().find(".summary_count_item"+sizeCurr);
			
			let everyColorNum=$(".x_clr_item").eq(colorIndex).find(".x_num").html();
			everyColorNum=everyColorNum-inputCurVal+parseInt($(this).html());
			$(".x_clr_item").eq(colorIndex).find(".x_num").html(everyColorNum);
			$(".summary_item"+colorIndex).find(".summary_count").html(everyColorNum+"件");
			$(".x_goods_price").html("¥"+parseFloat(tatolPrice-priceCurr*inputCurVal+priceCurr*$(this).html()).toFixed(2));
			$(this).parents(".summary_count_item"+sizeCurr).find(".x_summary_num").html("("+$(this).html()+")");
			tatolNum=parseInt(tatolNum)-inputCurVal+parseInt($(this).html());
			console.log(parseInt($(this).html()));
			$(".x_goods_num").html(tatolNum+"件");
			sizeUl.find(".x_ipt_num_cur").val($(this).html());
			
			$(this).parent().children("li").unbind("mousedown");//嵌套的点击事件每次回多触发一次，点击后删除这个事件
		});
	});
	$(".x_ipt_num_cur").blur(function(){
		$(this).parent().parent(".x_ipt_num").removeClass("active");
	})
}

$(function(){
	$("#footer").load("footer.html");
	$("#aside").load("aside.html");
})















