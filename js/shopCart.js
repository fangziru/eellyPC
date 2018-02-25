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
	let elUserName=getCookie("eluserName");
	//let elUserPass=getCookie("eluserPass");
	$(".s_head_nav1 p").html('Hi，'+elUserName+'<span><a href="#">消息</a><i class="span_line">|</i><a href="login.html">退出</a></span>');
	
	$.ajax({
		type:"get",
		url:"php/getShoppingCart.php",
		async:true,
		data:{
			userName:elUserName
		},
		success:function(data){
			var goodsCartList=eval(data);
			//console.log(goodsCartList);
			var str="";
			for(let i=0;i<goodsCartList.length;i++){
				let colorSize=goodsCartList[i].beiyong14.split(";");
				let colorList=goodsCartList[i].beiyong6.split("/");
				let count=0;
				let sizeLength=0;
				for(let n=0;n<colorSize.length;n++){
					if(colorSize[n]!=""){
						count++;
						let sizeAndNum=colorSize[n].split(",");
						if(sizeAndNum.length>sizeLength){
							sizeLength=sizeAndNum.length;
						}
					}
				}
										
				str+='<dl class="c_storeWrap c_storeDrop cart_store" goodid="'+goodsCartList[i].goodsId+'">'+
						'<dt>'+
							'<ul class="c_store clear">'+
								'<li class="c_check">'+
									'<label for="">'+
										'<input type="checkbox" class="order_chx c_check_one" name="" id="" value="" />'+
									'</label>'+
								'</li>'+
								'<li class="c_store_name">'+
									'供应商：<a href="javascript:;">'+goodsCartList[i].goodsName+'</a>'+
								'</li>'+
							'</ul>'+
						'</dt>'+
						'<dd>'+
							'<ul class="c_shop_msg clear_ul">'+
								'<li></li><li class="c_check">'+
									'<label for="">'+
										'<input type="checkbox" class="order_chx c_check_shop" name="" id="" value="" />'+
									'</label>'+
								'</li>'+
								'<li class="c_shop_desc">'+
									'<div class="c_shop_img">'+
										'<a href="javascript:;">'+
											'<img src="img/'+goodsCartList[i].beiyong1.replace("_118_","_")+'"/>'+
										'</a>'+
									'</div>'+
									'<div class="c_shop_name">'+
										'<p>'+
											'<a href="javascript:;">'+goodsCartList[i].goodsDesc+'</a>'+
										'</p>'+
									'</div>'+
								'</li>'+
								'<li class="c_shop_guige">'+
									'<p class="c_size_num">'+
										'<span class="c_select">已选&nbsp;<em>'+count+'</em>&nbsp;色&nbsp;<em>'+sizeLength+'</em>&nbsp;码</span>'+
										'<span class="c_tip"></span>'+
										'<span class="c_edit">'+
											'<i></i>修改'+
										'</span>'+
									'</p>'+
									'<span class="c_warmTip"></span>'+
									'<table class="c_table">'+
										'<tbody>';
										for(let j=0;j<colorSize.length;j++){
											if(colorSize[j]!=""){
												str+='<tr>'+
														'<td class="c_color t_overflow">'+colorList[j]+'</td>'+
														'<td>'+
															'<ul class="c_sema">';
															let sizeAndNum=colorSize[j].split(",");
															for(let k=0;k<sizeAndNum.length;k++){
																str+='<li>'+
																		'<span class="t_overflow c_junSize">'+sizeAndNum[k].substring(0,sizeAndNum[k].indexOf("-"))+'</span>'+
																		'<span class="c_cema_num">×'+sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1)+'</span>'+
																	'</li>';
															}
												str+='</ul>'+'</td>'+'</tr>';
													
											}
										}
											
										str+='</tbody>'+
									'</table>'+
								'</li>'+
								'<li class="c_shop_price">'+
									'<span class="c_goods_icon">¥<span class="c_goods_price">'+goodsCartList[i].goodsPrice+'</span></span>'+
								'</li>'+
								'<li class="c_shop_count">'+
									'<p class="c_count">'+goodsCartList[i].goodsCount+'</p>'+
								'</li>'+
								'<li class="c_shop_sum">'+
									'<p class="c_sum">'+goodsCartList[i].beiyong15+'</p>'+
								'</li>'+
								'<li class="c_cart_icon">'+
									'<i class="cart_goods_collect"></i>'+
									'<i class="cart_goods_delete"></i>'+
									'<div class="c_delete">'+
										'<p>确认要删除该商品吗？</p>'+
										'<p>'+
											'<span class="c_dropYes oct_btn" >确认</span>'+
											'<span class="c_dropNo oct_btn" >取消</span>'+
										'</p>'+
									'</div>'+
								'</li>'+
							'</ul>'+
						'</dd>'+
					'</dl>';
				
			}
			$(".c_shop").append(str);
			
			for(let i=0;i<goodsCartList.length;i++){
				//颜色、尺码
				$(".c_edit").eq(i).click(function(){
					$(".c_spec_edit").attr("goodsId",goodsCartList[i].goodsId);
					$(".summary_table").html("");
					var colorList=goodsCartList[i].beiyong6.split("/");
					var sizeList=goodsCartList[i].beiyong7.split("/");
					let colorSize=goodsCartList[i].beiyong14.split(";");
					
					var colorStr='<span class="x_clr_item x_clr0 active">'+colorList[0]+'</span>'
					var sizeStr='<div class="x_size_area x_size_area_show">';
					for(let j=0;j<sizeList.length;j++){
						sizeStr+='<ul class="size_item size_item'+sizeList[j]+'">'+
									'<li class="size_name cell">'+sizeList[j]+'</li>'+
									'<li class="size_price cell">'+goodsCartList[i].goodsPrice+'元</li>'+
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
					for(let k=1;k<colorList.length;k++){
						colorStr+='<span class="x_clr_item x_clr'+k+'">'+colorList[k]+'</span>';
						sizeStr+='<div class="x_size_area">';
						for(let j=0;j<sizeList.length;j++){
							sizeStr+='<ul class="size_item size_item'+sizeList[j]+'">'+
										'<li class="size_name cell">'+sizeList[j]+'</li>'+
										'<li class="size_price cell">'+parseFloat(goodsCartList[i].goodsPrice).toFixed(2)+'元</li>'+
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
					$(".x_size_list").html('<span class="x_chima">尺码</span>'+sizeStr);
					
					for(let j=0;j<colorSize.length;j++){
						if(colorSize[j]!=""){
							let sizeAndNum=colorSize[j].split(",");
							let goodsColorNum=0;
							let trDom='<tr class="summary_item summary_item'+j+'">'+
										'<td class="summary_name">'+
											'<a href="javascript:;" class="l_title">'+colorList[j]+'</a>'+
										'</td>'+
										'<td class="summary_count"></td>'+
										'<td></td>'+
									'</tr>';
							$(".summary_table").append(trDom);
							for(let k=0;k<sizeAndNum.length;k++){
								goodsColorNum+=parseInt(sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1));
								//let goodsColorNum=parseInt(sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1));
								
								let sizeArea=$(".x_size_area").eq(j).find(".size_item"+sizeAndNum[k].substring(0,sizeAndNum[k].indexOf("-")));
								let domAdd=sizeArea.find(".x_ipt_num_rbtn");
								domAdd.prev().children(".x_ipt_num_cur").val(parseInt(sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1)));
								createEverySize(domAdd,j);
								let summaryItem=$(".summary_item"+j).find(".summary_count_item"+sizeAndNum[k].substring(0,sizeAndNum[k].indexOf("-")));
								summaryItem.find(".x_summary_num").html("("+parseInt(sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1))+")");
								summaryItem.find(".x_ipt_num_cur").val(parseInt(sizeAndNum[k].substring(sizeAndNum[k].indexOf("-")+1)));
							}
							$(".x_clr"+j).html('<span class="x_colorName">'+colorList[j]+'</span><span class="x_num">'+goodsColorNum+'</span>');
							$(".summary_item"+j).find(".summary_count").html(goodsColorNum+"件");
							//$(".summary_item"+j).find(".x_summary_num").html("("+goodsColorNum+")");
	
						}
					}
					
					if($(".x_clr_item .x_num").index()>0){
							$(".x_qingdan").css("display","block");
							$(".x_qingdan").animate({
								'margin-top':"0px",
								"height":"48px"
							},200)
						}
					
					$(".x_goods_num").html(goodsCartList[i].goodsCount+"件");
					$(".x_goods_price").html("¥"+goodsCartList[i].beiyong15+"件");
			
					$(".c_edit").click(function(){
						$(".c_spec_edit").css("display","block");
					})
					
					$(".edit-close").click(function(){
						$(".c_spec_edit").css("display","none");
					})
					$(".x_clr_item").click(function(){
						let colorIndex=$(this).index();
						console.log(colorIndex);
						$(".x_size_area").eq(colorIndex).addClass("x_size_area_show");
						$(".x_size_area").eq(colorIndex).siblings().removeClass("x_size_area_show");
						$(this).addClass("active");
						$(this).siblings().removeClass("active");
					})
				
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
								'margin-top':"0px",
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
									'margin-top':"-49px",
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
				})
			}
			
			$(".cart_goods_delete").click(function(){
				$(this).next(".c_delete").css("display","block");
				
				$(this).next(".c_delete").find(".c_dropYes").click(function(){
					let elUserName=getCookie("eluserName");
					let goodId=$(this).parents(".c_storeWrap").attr("goodid")
					$.ajax({
			    		url: 'php/deleteGoods.php',
			    		type: 'get',
			    		data: {
			    			userName: elUserName,
			    			goodsId:goodId
			    		},
			    		success:function(data){
			    			if(data=="1"){ 
							    location.reload()
							}else{
								alert("删除失败")
							}
			    		}
			    	})
					$(this).parents(".c_delete").css("display","none");
				})
				
				$(this).next(".c_delete").find(".c_dropNo").click(function(){
					$(this).parents(".c_delete").css("display","none");
				})
				
			})
			
		}
	});
})

$(function(){
	let elUserName=getCookie("eluserName");
	
	$(".c_uptate").click(function(){
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
			$.ajax({
				type:"get",
				url:"php/addShoppingCart.php",
				
				data:{
					goodsId:$(".c_spec_edit").attr("goodsId"),
					userName:elUserName,
					goodsCount:parseInt($(".x_goods_num").html()),
					goodsColorSizeStr:goodsColorSizeStr,
					goodsMoney:$(".x_goods_price").html().substring(1)
				},
				success:function(data){
					console.log(data);
					if(data=="1"){
						window.location.reload();
						$(".c_spec_edit").css("display","none");
					}else if(data=="0"){
						alert("修改失败失败");
						$(".c_spec_edit").css("display","none");
					}
					
					
				}
			});
		}else{
			$(".c_spec_edit").css("display","none");
		}		
	})
	
	
})













