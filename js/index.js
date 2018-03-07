$(function(){
	var time = 0;
	var n = 0;
	var loadText = ["Loading.","Loading..","Loading..."];
	var tTween = setInterval(function(){
		time++;
		if(time==101)
		{
			clearInterval(tTween);
			$('#loading').fadeOut(500);
			var swiper = new Swiper('.swiper-container', {
		        direction: 'vertical',
		        initialSlide :0,
		         onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				    $('.down').on('click',function(){
				    	swiper.slideNext();
				    });
				  }, 
				  onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				    if(swiper.isEnd){
				    	$('.down').hide();
				    }else{
				    	$('.down').show();
				    }
				  } 
		    });
		}else{
			if(time%20==0)
			{
				n++;
				if(n==3)
				{
					n=0;
				}
				$('.lt1').text(loadText[n]);
			}
			
			$('.lt2').text(time+'%');
		}
	},30);
//	popWin("请输入正确的手机号码");
	$('.delete1').prevAll().remove();
	$('.delete2').nextAll().remove();
	var music = 0;
	var musicOpen = true;
	var musicTween = setInterval(function() {
		music += 2;
		$('#music').css('transform', "rotate(" + music + "deg)");
		if(music == 360) {
			music = 0;
		}
	}, 10);
	$('#music').on('click', function() {
		if(musicOpen == true) {
			musicOpen = false;
			clearInterval(musicTween);
			$('#bg')[0].pause();
		} else {
			musicOpen = true;
			musicTween = setInterval(function() {
				music += 2;
				$('#music').css('transform', "rotate(" + music + "deg)");
				if(music == 360) {
					music = 0;
				}
			}, 10);
			$('#bg')[0].play();
		}
	
	});
	//生成回执
	$('.page5').find('button').on('click',function(){
		$('.page5').hide();
		$('#page6').show();
		$('.img61').addClass('animated fadeInDown');
		$('.img62').find('img').addClass('animated bounceIn');
		$('.img62').find('p').addClass('animated rotateIn');
		$('.p62').addClass('animated fadeInLeft');
		$('.p63').addClass('animated fadeInRight');
		$('.p64').addClass('animated fadeInLeft');
		$('.p65').addClass('animated fadeInRight');
		$('.p66').addClass('animated fadeInLeft');
		
	});
	//如果已经签到
	var has = true;
	if(has==true)
	{
		$('.page5').hide();
		$('#page6').show();
		$('.img61').addClass('animated fadeInDown');
		$('.img62').find('img').addClass('animated bounceIn');
		$('.img62').find('p').addClass('animated rotateIn');
		$('.p62').addClass('animated fadeInLeft');
		$('.p63').addClass('animated fadeInRight');
		$('.p64').addClass('animated fadeInLeft');
		$('.p65').addClass('animated fadeInRight');
		$('.p66').addClass('animated fadeInLeft');
	}
});
function popWin(text){
	$('.pBox').text(text);
	$('#pop').show();
	$('#pop').find('button').on('click',function(){
		$('#pop').hide();
	});
}
