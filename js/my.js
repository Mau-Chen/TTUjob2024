// JavaScript Document

// ToTop
$(function(){
	$(".toTop").click( function(){
		$("html,body").animate( {scrollTop:"0px"}  ,  1000);
	})
	
	$(window).scroll(function(){
		var scrollT = $(window).scrollTop();  //目前捲軸距離頂端位置
		var windowH = ($(window).height())/2 ; 
		if(scrollT >= 150){              //當捲軸位置大於視窗高時
			$(".toTop").fadeIn("slow");
		}else{
			$(".toTop").fadeOut("slow");
		}
	})
})

