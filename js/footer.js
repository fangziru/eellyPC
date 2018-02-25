$(function(){
	$(".show_more").toggle(function(){
		$(".sort_more").slideDown("normal",function(){
			$(".show_more").css("background-position","-99px 0")
		});
	},
	function(){
		$(".sort_more").slideUp("normal",function(){
			$(".show_more").css("background-position","-84px 0")
		});
	})
})
