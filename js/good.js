/*
* @Author: Administrator
* @Date:   2019-08-25 11:32:31
* @Last Modified by:   hp
* @Last Modified time: 2019-08-29 12:57:38
*/

$(function(){
	/*inputs事件*/
	$('input').focus(function(event) {
		$('.display').show()
	});
	$('input').blur(function(event) {
		$('.display').hide()
	});

	/*下拉事件*/
	$('.xiala').click(function(event) {
		$(this).css('color', '#1f82fc');
		$('.option').toggle()
	});

	/*mod-left 的效果*/
	$('.mod-left').mouseenter(function(event) {
		$('.mod-left .i').show()
	});
	$('.mod-left').mouseleave(function(event) {
		$('.mod-left .i').hide()
	});

	// $('.sk-left').mouseenter(function(event) {
	// 	$('.sk-left .i').show()
	// });
	// $('.sk-left').mouseleave(function(event) {
	// 	$('.sk-left .i').hide()
	// });

	$('.i1').mouseenter(function(event) {
		$(this).css('background-position', '-62px -20px');
	});
	$('.i1').mouseleave(function(event) {
		$(this).css('background-position', '-80px -20px');
	});



	$('.tab-top li').eq(0).click(function(event) {
		$(this).addClass('add').siblings('li').removeClass('add')
		$('.tab-last ul').eq(0).show().siblings('ul').hide()
	});
	$('.tab-top li').eq(1).click(function(event) {
		$(this).addClass('add').siblings('li').removeClass('add')
		$('.tab-last ul').eq(1).show().siblings('ul').hide()
	});
	$('.tab-top li').eq(2).click(function(event) {
		$(this).addClass('add').siblings('li').removeClass('add')
		$('.tab-last ul').eq(2).show().siblings('ul').hide()
	});
	$('.tab-top li').eq(3).click(function(event) {
		$(this).addClass('add').siblings('li').removeClass('add')
		$('.tab-last ul').eq(3).show().siblings('ul').hide()
	});
	$('.tab-top li').eq(4).click(function(event) {
		$(this).addClass('add').siblings('li').removeClass('add')
		$('.tab-last ul').eq(4).show().siblings('ul').hide()
	});



	$('.sk .sk-left').mouseenter(function(event) {
		$(this).children('.i').css('display', 'block').parents('.sk').siblings('.sk').children().children('.i').css('display', 'none');
	});
	


	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
		if(h>520){
			$('.f2').show()
			$('.right-fixed').addClass('ch')
			$('.fixed').addClass('xx')
			$('.hot').hide()
		}else{
			$('.f2').hide()
			$('.right-fixed').removeClass('ch')
			$('.fixed').removeClass('xx')
			$('.hot').show()
		}
	});
	$('.f2').click(function(event) {
		$('html,body').animate({'scrollTop':0}, 1000)
	});

	$('.mod-left').click(function(event) {
		location.href='detail.html';
	});


})