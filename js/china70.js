/*
* @Author: Administrator
* @Date:   2019-08-24 23:31:56
* @Last Modified by:   Administrator
* @Last Modified time: 2019-08-24 23:59:00
*/

$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>1000){
			$('.fix').show()
		}else{
			$('.fix').hide()
		}
	});
	$('.fix').click(function(event) {
		$('html,body').animate({'scrollTop':0},1000)
	});

	$('.ico').click(function(event) {
		$(this).hide()
		$('.time').hide()
		$('yincang').hide()
		$('.video img').hide()
	});
})