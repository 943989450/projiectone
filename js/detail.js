/*
* @Author: hp
* @Date:   2019-08-27 15:28:24
* @Last Modified by:   hp
* @Last Modified time: 2019-08-29 13:46:36
*/

$(function(){

	/*头部input部分的触发事件*/
	$('.form input').focus(function(event) {
		$(this).attr('placeholder', ' ');
		$('.form .form-list').show();
	});
	$('.form input').blur(function(event) {
		$('.form .form-list').hide();
		$('.form input').attr('placeholder','中国好声音');
	});

	$('.afour').mouseenter(function(event) {
		$('.four').show()
	});
	$('.afour .four').mouseleave(function(event) {
		$('.four').hide()
	});
	$('.atwo').mouseenter(function(event) {
		$('.two').show()
	});
	$('.atwo .two').mouseleave(function(event) {
		$('.two').hide()
	});
	$('.athree').mouseenter(function(event) {
		$('.three').show()
	});
	$('.athree .three').mouseleave(function(event) {
		$('.three').hide()
	});


	$('.four .btn2').click(function(event) {
		$('.all').show()
	});
	$('.close').click(function(event) {
		$('.all').hide()
	});
	$('.img1').click(function(event) {
		$(this).hide()
		$('.img2').show()
		$('.da').hide()
		$('.saoma').show()
	});
	$('.img2').click(function(e) {
		e.stopPropagation();//阻止上一个事件的发生
		$(this).hide()
		$('.img1').show()
		$('.da').show()
		$('.saoma').css('display', 'none');
	});


	
	$('.content1 .tit li').click(function(event) {
		location.href='good.html'
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>400){
			$('.header').addClass('ff')
			$('.ul li a').css('color', '#333');
			$('.ul li a').hover(function() {
				$(this).css('color', '#24a5ff');
			}, function() {
				$(this).css('color', '#333');
			});
			$('.video-fix').show()
			$('.fixed-bottom').show()
		}else{
			$('.header').removeClass('ff')
			$('.ul li a').css('color', '#fff')
			$('.ul li a').hover(function() {
				$(this).css('color', '#24a5ff');
			}, function() {
				$(this).css('color', '#fff');
			});
			$('.fixed-bottom').hide()
		}
	});

	$('.tit li').hover(function() {
		$(this).children('.dis').show()
	}, function() {
		$(this).children('.dis').hide()
	});

	$('.video-fix').hover(function() {
		$('.close1').show()
	}, function() {
		$('.close1').hide()
	});
	$('.close1 span').click(function(event) {
		$('.video-fix').hide()
	});
	$('.fixed-bottom .f2').click(function(event) {
		$('body,html').animate({'scrollTop':0}, 1000)
	});
})