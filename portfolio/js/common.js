

	// pc, mobile 구분
	var log = document.getElementById('log'); 
	var useragent = window.navigator.userAgent; 
	var mediaState = false; // false =  PC, true = mobile

	if(useragent.indexOf('Pad') > -1 || useragent.indexOf('Android') > -1 || useragent.indexOf('Phone') > -1)  {
		mediaState = true; 
		$('body').addClass('mobile');
	} else {
		mediaState = false; 
		$('body').addClass('pc');
	}
	
	
	//포트폴리오 섬네일 모션 - pc일 경우에만 작
	// if(!mediaState){
	// 	$('.item').mouseenter(function(){
	// 			$(this).find('.overlay').animate({
	// 					'margin-top' : '0'
	// 				}, 
	// 				250
	// 			);
	// 			$(this).find('.overlay').css('background-color',  'rgba(80, 80, 80, 0.7)');
	// 			$(this).find('.type').addClass('test');
	// 		}
	// 	);
	// 	$('.item').mouseleave(function(){
	// 			$(this).find('.overlay').animate({
	// 					'margin-top' : '100px'	 
	// 				}, 
	// 				250
	// 			);
	// 			$(this).find('.overlay').css('background-color',  'rgba(80, 80, 80, 0.7)');
	// 			$(this).find('.type').removeClass('test');
	// 		}
	// 	);
	// }


	var idx = 0;
	//메뉴 클릭시 해당 컨텐츠로 이동
	$(".menuwork").click(function() {
	    	$('html, body').animate({
	        			scrollTop: $(".portfolio").offset().top-50
	    		}, 1000);
	    	$('.nav').slideUp(150).removeClass('on');
	    	idx = 0;
	    	return false;
		}
	);

	$(".menuabout").click(function() {
	    	$('html, body').animate({
	        			scrollTop: $(".about").offset().top-50
	    		}, 1000);
	    	$('.nav').slideUp(150).removeClass('on');
	    	idx = 0;
		return false;
		}
	);
	$(".menublog").click(function() {
	    	$('html, body').animate({
	        			scrollTop: $(".blog").offset().top-50
	    		}, 1000);
	    	$('.nav').slideUp(150).removeClass('on');
	    	idx = 0;
		return false;
		}
	);
	$(".menucontact").click(function() {
	    	$('html, body').animate({
	        			scrollTop: $(".contact").offset().top-50
	    		}, 1000);
	    	$('.nav').slideUp(150).removeClass('on');
	    	idx = 0;
		return false;
		}
	);


	

	$('.menulink').click(function(){
			if(idx == 0){
				$('.nav').slideDown(500).addClass('on');
				$('.header').addClass('backwhite');

				// $('.header').animate({
				// 		backgoundColor : '#CD3333',
				// 		left:'-50px'
				// 	}, 500);
				idx = 1;	
			}else {
				$('.nav').slideUp(150).removeClass('on');
				$('.header').removeClass('backwhite');
				idx = 0;
			}
			

		}
	);

	//스크롤 시 메뉴 변경
	$(function() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 80) { // 스크롤 내릴 표시
				$('.header').addClass('scroll');
			}
			 else {
				$('.header').removeClass('scroll');
			}
		});
	});

	//세로값 디바이스에 맞춰 .main, .cover 자동 조절
	$(document).ready(function(){
		// $('.main').css('width', $(window).width() - 50 );
		$('.main').css('height', $(window).height());
		$(window).resize(function() {
				// $('.main').css('width', $(window).width() - 50 );
				$('.main').css('height', $(window).height());
			}
		);
	}); 

	//연락 전송 버튼 클릭시 모션
	$('#ss-form').submit(function(){
			// // alert('감사합니다!');
			// $('.thanks').text('완료되었습니다. 감사합니다.'); 
			$('#ss-submit').attr("value", "완료되었습니다. 감사합니다.");
			$('.submit').text('완료되었습니다. 감사합니다.');
			setTimeout(function(){
				$('#ss-form')[0].reset();
				// $('.thanks').text(''); 
				$('#ss-submit').attr("value", "보내기");
				$('.submit').text('보내기');
				//$('#ss-submit').val() 의 값만 fadeout 하고 싶음.
				//$('#ss-submit').fadeOut(100, function(){
				// 	$(this).attr("value", "보내기");
				// });
			},2000);
			
		}
	);



	//포트폴리오 필터링
	$('.filt_all').on('click', function(){
		$('.web').removeClass('hide');
		$('.event').removeClass('hide');
		$('.others').removeClass('hide');
		$('.filter li').removeClass('on');
		$(this).addClass('on');
	});

	$('.filt_web').on('click', function(){
		$('.web').removeClass('hide');
		$('.event').removeClass('hide');
		$('.others').removeClass('hide');
		$('.event').addClass('hide');
		$('.others').addClass('hide');
		$('.filter li').removeClass('on');
		$(this).addClass('on');
	});

	$('.filt_event').on('click', function(){
		$('.web').removeClass('hide');
		$('.event').removeClass('hide');
		$('.others').removeClass('hide');
		$('.web').addClass('hide');
		$('.others').addClass('hide');
		$('.filter li').removeClass('on');
		$(this).addClass('on');
	});

	$('.filt_others').on('click', function(){
		$('.web').removeClass('hide');
		$('.event').removeClass('hide');
		$('.others').removeClass('hide');
		$('.web').addClass('hide');
		$('.event').addClass('hide');
		$('.filter li').removeClass('on');
		$(this).addClass('on');
	});
