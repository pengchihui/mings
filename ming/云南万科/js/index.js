/*二级栏目*/
$('.nav-li').mouseenter(function() {
	$(this).children('.downBox').stop().show(100);
	// $(this).removeClass('.nav-a');
	// $(this).addClass('.nav-a-a').;
    //$(this).next(".downBox").stop().show(100);
});
$('.nav-li').mouseleave(function() {
	$(this).children('.downBox').stop().hide(100);
	// $(this).removeClass('.nav-a-a');
	// $(this).addClass('.nav-a');
})

/*介绍点击*/
$(".ri").click(function() {
$("html,body").animate({scrollTop:740}, 500);
});
$(".jieshao-bb").click(function(){
    $("html,body").animate({scrollTop:1230},500)
})

  //加载事件
$(function(){
    $(".pro-nav>li").mouseenter(function(event) {
        //   操作  ul  tab-item
        $(this).addClass('active').siblings('li').removeClass('active');
        //   操作products 下边的main
        //此处需要索引
        // var index=$(this).index();
        // $('.products>.main').eq(index).addClass('selected').siblings('.main').removeClass('selected');
    });
});

//加载事件
$(function(){
    $("#zz-nav>li").mouseenter(function(event) {
        //   操作  ul  tab-item
        $(this).addClass('active').siblings('li').removeClass('active');
        //   操作products 下边的main
        //此处需要索引
        var index=$(this).index();
        $('.zz-pro>.zz-p').eq(index).addClass('selected').siblings('.zz-p').removeClass('selected');
    });
});

(function() {
				window.scrollReveal = new scrollReveal({
					reset: false,
					move: '350px'
				});
			})()

			//回到顶部
			$(function() {
				$('.rightnav>.contact1').hover(function() {
					$(this).children('img,span').css('visibility', 'visible');
				}, function() {
					$(this).children('img,span').css('visibility', 'hidden')
				});
				$(".rightnav>.contact1-4").click(function() {
					$("html,body").animate({
						scrollTop: 0
					}, 500);
				});
				//回到顶部的显示隐藏
				$(window).scroll(function() {
					if($(window).scrollTop() > 800) {
						$(".rightnav").fadeIn(500);
					} else {
						$(".rightnav").fadeOut(500);
					}
				})
			})








