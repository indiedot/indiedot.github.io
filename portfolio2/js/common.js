

	// pc, mobile 구분
	var log = document.getElementById('log'); 
	var useragent = window.navigator.userAgent; 
	var mediaState = false; // false =  PC, true = mobile
	var browserIE = false; // false = other browser, true = IE

	if(useragent.indexOf('Pad') > -1 || useragent.indexOf('Android') > -1 || useragent.indexOf('Phone') > -1)  {
		mediaState = true; 
		$('body').addClass('mobile');
	} else {
		mediaState = false; 
		$('body').addClass('pc');
	}

	if(useragent.indexOf('MSIE') > -1){
		browserIE = true;
		// alert('ie입니다.')
	}
	
	
	//포트폴리오 섬네일 모션
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
	// if(!mediaState){
	// 	$('.item').mouseenter(function(){
	// 			$(this).find('.overlay').animate({
	// 					'margin' : '0'
	// 				}, 
	// 				250
	// 			);
	// 			$(this).find('.title').animate({
	// 					'margin' : '80px',
	// 					'font-size' : '2em'
	// 				}, 
	// 				250
	// 			);
				
	// 			$(this).find('.overlay').css('background-color',  'rgba(0, 70, 255, 0.9)');	
	// 			if ($.browser.msie) {
	// 				$(this).find('.overlay').css('background-color',  '#0056FF');
	// 			}
	// 			$(this).find('.title').css('color',  '#fff');
	// 			$(this).find('.detail').css('color',  '#fff');
	// 			$(this).find('line').css('stroke', '#fff')
	// 			$(this).find('polyline').css('stroke', '#fff')
	// 			// $(this).find('.overlay').css('display',  'block');
	// 			$(this).find('.type').addClass('test');
	// 		}
	// 	);
	// 	$('.item').mouseleave(function(){
	// 			$(this).find('.overlay').animate({
	// 					'margin' : '20px'	 
	// 				}, 
	// 				250
	// 			);
	// 			$(this).find('.title').animate({
	// 					'margin' : '20px',
	// 					'font-size' : '1.2em'
	// 				}, 
	// 				250
	// 			);
				
	// 			$(this).find('.overlay').css('background-color',  'rgba(255, 255, 255, 0.8)');	
	// 			if ($.browser.msie) {
	// 				$(this).find('.overlay').css('background-color',  '#fff');
	// 			}
	// 			$(this).find('.title').css('color',  '#000');
	// 			$(this).find('line').css('stroke', '#000')
	// 			$(this).find('polyline').css('stroke', '#000')
	// 			// $(this).find('.overlay').css('display',  'none');
	// 			$(this).find('.type').removeClass('test');
	// 		}
	// 	);
	// }

	


	//IE 일때 
	if(!browserIE){
		$('.item').mouseenter(function(){
				$(this).find('.overlay').animate({
						'margin' : '0'
					}, 
					250
				);
				$(this).find('.title').animate({
						'margin' : '80px',
						'font-size' : '2em',
						// 'color' : '#fff'
					}, 
					250
				);
				$(this).find('.title').css('color',  '#000');
				$(this).find('.overlay').css('background-color',  '#0056FF');	
			}
		);
		$('.item').mouseleave(function(){
				$(this).find('.overlay').animate({
						'margin' : '20px'
					},
					250
				);
				$(this).find('.title').animate({
						'margin' : '20px',
						'font-size' : '1.2em',
						// 'color' : '#000'
					}, 
					250
				);
				$(this).find('.title').css('color',  '#000');
				$(this).find('.overlay').css('background-color',  '#FFFFFF');	
			}
		);
	}

	$('.item').mouseenter(function(){
			//console.log('오버')
			$(this).find('.overlay').animate({
					'margin' : '0',
					// 'background-color' : 'rgba(0, 70, 255, 0.9)'
				}, 
				250
			);
			$(this).find('.title').animate({
					'margin' : '80px',
					'font-size' : '2em',
					// 'color' : '#fff'
				}, 
				250
			);
			
			$(this).find('.overlay').css('background-color',  'rgba(0, 70, 255, 0.9)');	
			$(this).find('.title').css('color',  '#fff');
			// $(this).find('.detail').css('color',  '#fff');
			$(this).find('line').css('stroke', '#fff')
			$(this).find('polyline').css('stroke', '#fff')
			// $(this).find('.overlay').css('display',  'block');
			// $(this).find('.type').addClass('test');
		}
	);
	$('.item').mouseleave(function(){
			//console.log('안오버')
			$(this).find('.overlay').animate({
					'margin' : '20px',
					// 'background-color' : 'rgba(255, 255, 255, 0.8)'
				}, 
				250
			);
			$(this).find('.title').animate({
					'margin' : '20px',
					'font-size' : '1.2em',
					// 'color' : '#000'
				}, 
				250
			);
			
			$(this).find('.overlay').css('background-color',  'rgba(255, 255, 255, 0.8)');	
			$(this).find('.title').css('color',  '#000');
			$(this).find('line').css('stroke', '#000')
			$(this).find('polyline').css('stroke', '#000')
			// $(this).find('.overlay').css('display',  'none');
			// $(this).find('.type').removeClass('test');
		}
	);


	var idx = 0;
	//메뉴 클릭시 해당 컨텐츠로 이동
	// $(".menuwork").click(function() {
	//     	$('html, body').animate({
	//         			scrollTop: $(".portfolio").offset().top-50
	//     		}, 1000);
	//     	$('.nav').slideUp(150).removeClass('on');
	//     	idx = 0;
	//     	return false;
	// 	}
	// );

	// $(".menuabout").click(function() {
	//     	$('html, body').animate({
	//         			scrollTop: $(".about").offset().top-50
	//     		}, 1000);
	//     	$('.nav').slideUp(150).removeClass('on');
	//     	idx = 0;
	// 	return false;
	// 	}
	// );
	// $(".menublog").click(function() {
	//     	$('html, body').animate({
	//         			scrollTop: $(".blog").offset().top-50
	//     		}, 1000);
	//     	$('.nav').slideUp(150).removeClass('on');
	//     	idx = 0;
	// 	return false;
	// 	}
	// );
	// $(".menucontact").click(function() {
	//     	$('html, body').animate({
	//         			scrollTop: $(".contact").offset().top-50
	//     		}, 1000);
	//     	$('.nav').slideUp(150).removeClass('on');
	//     	idx = 0;
	// 	return false;
	// 	}
	// );

	//맨위로 가기
	$(".totop").click(function() {
	    	$('html, body').animate({
	        			scrollTop: 0
	    		}, 500);
		return false;
		}
	);

	
	//메뉴 열림
	$('.menulink').click(function(){
			if(idx == 0){
				$('.nav').slideDown(500).addClass('on');
				$('.header').addClass('backwhite');
				$(this).removeClass('off');
				$(this).addClass('on');
				idx = 1;	
			}else {
				$('.nav').slideUp(150).removeClass('on');
				$('.header').removeClass('backwhite');
				$(this).removeClass('on');
				$(this).addClass('off');
				idx = 0;
			}
			

		}
	);
	//메뉴의 세로값을 디바이스에 맞춤
	// $(document).ready(function(){
	// 	$('.nav').css('height', $(window).height());
	// 	$(window).resize(function() {
	// 			$('.nav').css('height', $(window).height());
	// 		}
	// 	);
	// });


	//스크롤 시 메뉴 변경
	// $(function() {
	// 	$(window).scroll(function () {
	// 		if ($(this).scrollTop() > 80) { // 스크롤 내릴 표시
	// 			$('.header').addClass('scroll');
	// 		}
	// 		 else {
	// 			$('.header').removeClass('scroll');
	// 		}
	// 	});
	// });

	//세로값 디바이스에 맞춰 .main, .cover 자동 조절
	// $(document).ready(function(){
	// 	// $('.main').css('width', $(window).width() - 50 );
	// 	$('.main').css('height', $(window).height());
	// 	$(window).resize(function() {
	// 			// $('.main').css('width', $(window).width() - 50 );
	// 			$('.main').css('height', $(window).height());
	// 		}
	// 	);
	// }); 
	
	
	


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


	// var back = $('.cover').css('background');
	// $('.header').css('background', back);
