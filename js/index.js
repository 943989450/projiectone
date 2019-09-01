/*
* @Author: hp
* @Date:   2019-08-19 19:03:15
* @Last Modified by:   hp
* @Last Modified time: 2019-08-29 13:42:45
*/

$(function(){

	/*轮播图部分*/

	var n=0;
	var timer;
	function start(){
		timer=setInterval(function(){
			n++;
			if(n>6){n=0}
			$('.banner .ul li').eq(n).show().siblings('li').hide();
			$('.banner .ol li').eq(n).addClass('current').siblings('li').removeClass('current')
			$('.banner .ol li').eq(n).children('h3').css('font-size', '24px').parent().siblings('.banner .ol li').children('h3').css('font-size', '14px');
			$('.banner .ol li').eq(n).children('p').css('display', 'block').parent().siblings('.banner .ol li').children('p').css('display', 'none');
		},1500)
	}
	start();
	$('.banner .ol li').mouseenter(function(event) {
		    clearInterval(timer);
		    var num=$(this).index()
		    $('.banner .ul li').eq(num).show().siblings('.banner .ul li').hide() 
    		$(this).addClass('current').siblings('li').removeClass('current')
    		$(this).children('h3').css('font-size', '24px').parent().siblings('.banner .ol li').children('h3').css('font-size', '14px');
			$(this).children('p').css('display', 'block').parent().siblings('.banner .ol li').children('p').css('display', 'none');		
    	});
	$('.banner .ol li').mouseleave(function(event) {
		start();		
	});
	$('.banner .ul li').click(function(event) {
		location.href='html/detail.html';
	});


	/*内容部分的左右点击事件*/
	$('.content7 .right').click(function(event) {
		$(this).hide()
		$('.content7 .left').show()
		$('.content7 ul').css('margin-left', '-280px');
	});
	$('.content7 .left').click(function(event) {
		$(this).hide()
		$('.content7 .right').show()
		$('.content7 ul').css('margin-left', '0px');
	});



	/*头部窗口事件*/
	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
		if(h>520){
			$('.f2').show()
			$('.header').css('background-color', '#fff');
			$('.left .ul li').css('opacity', '1');
			$('.right .a .a1').css('color', '#333');
		}else{
			$('.f2').hide()
			$('.header').css('background-color', 'rgba(0,0,0,0.1)');
			$('.left .ul li').css('opacity', '0');
			$('.right .a .a1').css('color', '#fff');
		}
	});


	/*返回顶部事件*/
	$('.f2').click(function(event) {
		$('html,body').animate({'scrollTop':0}, 1000)
	});


	/*头部input部分的触发事件*/
	$('.form input').focus(function(event) {
		$(this).attr('placeholder', ' ');
		$('.form .form-list').show();
	});
	$('.form input').blur(function(event) {
		$('.form .form-list').hide();
		$('.form input').attr('placeholder','中国好声音');
	});
	$('.banner ol li').click(function(event) {
		location.href='html/good.html';
	});

	/*content2的轮播换图事件*/
	var n1=0;
	$('.span').click(function(event) {
		n1++;
		if(n1>3){n1=0}
		$('.content2 ul').css('margin-left', -1400*n1+'px');
	});


	/*content11的ul切换事件*/
	$('.title11 a').mouseenter(function(event) {
		$(this).css({
			'color': '#148aff',
			'border-bottom': '2px solid #148aff'
		}).siblings('a').css({
			'color': '#333',
			'border-bottom': '2px solid transparent'
		});
		var n2=$(this).index()
		$('.content11 ul').eq(n2).css('display', 'block').siblings('ul').css('display', 'none');
	});


	/*header部分内容移入移出相关子内容出现事件*/
	$('.ul .li4').mouseenter(function(event) {
		$('.ul .li4 .pindao').show()
	});
	$('.ul .li4 .pindao').mouseleave(function(event) {
		$('.ul .li4 .pindao').hide()
	});

	$('.right .aone').mouseenter(function(event) {
		$('.right .aone .one').show()
	});
	$('.right .aone .one').mouseleave(function(event) {
		$('.right .aone .one').hide()
	});
	$('.right .atwo').mouseenter(function(event) {
		$('.right .atwo .two').show()
	});
	$('.right .atwo .two').mouseleave(function(event) {
		$('.right .atwo .two').hide()
	});
	$('.right .athree').mouseenter(function(event) {
		$('.right .athree .three').show()
	});
	$('.right .athree .three').mouseleave(function(event) {
		$('.right .athree .three').hide()
	});
	$('.right .afour').mouseenter(function(event) {
		$('.right .afour .four').show()
	});
	$('.right .afour .four').mouseleave(function(event) {
		$('.right .afour .four').hide()
	});


	/*登录跳转*/
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
  
})
