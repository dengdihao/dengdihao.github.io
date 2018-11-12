// 等到页面内包括图片的所有元素加载完毕后才能执行

$(window).load(function () {
	$('body').addClass('loaded');
	//	$('#loader-wrapper .load_title').remove();
	$(".W-yi-bg h2").addClass('fadeInUp1');
	$(".W-yi-bg strong").addClass('fadeInUp2');
	$(".W-yi-bg .W-p1").addClass('fadeInUp3');
	$(".W-yi-bg .W-p2").addClass('fadeInUp4');
	$(".W-yi-bg .W-mailbox").addClass('fadeInUp5');
	$('.Ws-tou').addClass('rubberBand');

});

// 是DOM结构绘制完毕后就执行，不必等到加载完毕
; $(function () {
	(function () {
		console.log('Hi! 朋友，感谢您愿意调试简历代码。\n如果您有什么建议或者想学习前端，欢迎您加入我,我们互相学习，共同进步^_^。\nQQ:874611736');
		setTimeout(function () { $('body').addClass('loaded'); }, 400);
		var Timer = null,
			aa = 1,
			bb = null;
		// $('html,body').css('min-width', $(window).width());
		$('#wowslider-container .ws_images').css('height', $(window).height());
		$('#wowslider-container .ws_images').find('img').css('height', $(window).height());
		setInterval(function () {
			$('#wowslider-container .ws_images').find('img').css('height', $(window).height());
		}, 10);

		//	卡片效果
		var mouse = {
			X: 0,
			Y: 0,
			CX: 0,
			CY: 0
		},
			block = {
				X: mouse.X,
				Y: mouse.Y,
				CX: mouse.CX,
				CY: mouse.CY
			},
			imags = [
				'14828-105.jpg',
				'51705-105.jpg',
				'241984-105.jpg',
				'296480-105.jpg'
			];

		$('.block').on('mousemove', function (e) {
			mouse.X = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
			mouse.Y = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
		})

		$('.block').on('mouseleave', function (e) {
			mouse.X = mouse.CX;
			mouse.Y = mouse.CY;
		})

		setInterval(function () {

			block.CY += (mouse.Y - block.CY) / 12;
			block.CX += (mouse.X - block.CX) / 12;

			$('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
			$('.block').css({
				transform: 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
			})

		}, 20);

		$('.slider .item').each(function (i) {
			if (i == 0) {
				$(this).addClass('active');
				$(this).next().addClass('next');
				$(this).prev().addClass('prev');
			}
			$(this).attr('id', 'slide-' + i);
		});

		//	导航
		$('.nav-toggle').on('click', function () {
			if ($('.navigation').css('right') == '0px') {
				quxiao();
				if ($(window).width() <= 770) {
					if ($(window).scrollTop() >= 480) {
						$('.Ws-hui').stop(true, true).fadeIn(400);
					} else {
						$('.Ws-hui').stop(true, true).fadeOut(400);
					};
					$('.nav-toggle').css('background', 'transparent');
				};
			} else {
				$('.Ws-hui').hide();
				$('.navigation').stop().animate({ 'right': '0px' }, 200, 'linear');
				$('.navigation ul').stop().animate({ 'right': '1%' }, 100, 'linear');
				$('.W-logo').stop().animate({ 'right': '1%' }, 100, 'linear');
				$('body').addClass('nav-open');
				$('.nav-zhe').show();
				Timer = setTimeout(function () {
					$('.nav-toggle').css('background', '#ccc');
				}, 100);
			}
		});
		$('.nav-toggle').hover(function () {
			$(this).css('background', '#337ab7');
			if ($(window).width() >= 480) {
				$('.talkbubble').stop(true, true).fadeIn(400);
			} else {
				$('.talkbubble').stop(true, true).hide();
			}
		}, function () {
			$('.talkbubble').stop(true, true).fadeOut(400);
			if ($('body').hasClass('nav-open')) {
				$('.nav-toggle').css('background', '#ccc');
			} else {
				$('.nav-toggle').css('background', 'transparent');
			}
		});

		$('.navigation ').css('border-bottom-width', $(window).height());

		$(window).resize(function () {
			$('.navigation ').css('border-bottom-width', $(window).height());
		});

		$('.navigation ul li').hover(function () {
			$(this).find('a span').stop().animate({ 'width': '100%' }, 400);
		}, function () {
			if ($(this).find('a span').hasClass('span-active')) {
				return false;
			} else {
				$(this).find('a span').stop().animate({ 'width': '0' }, 100);
			}
		});

		// 点击旋转图片
		$('.W-yyue').hover(function () {
			if (aa == 1) {
				$(this).find('span').eq(0).css('display', 'block');
			} else if (aa == 0) {
				$(this).find('span').eq(1).css('display', 'block');
			}
		}, function () {
			$(this).find('span').hide();
		});

		$('.W-yyue').on('click', function () {
			if ($(this).find('span').eq(0).css('display') == 'block') {
				aa = 0;
				$(this).find('span').eq(0).css('display', 'none');
				$(this).find('span').eq(1).css('display', 'block');
				sound.pause();
				return aa;
			} else {
				aa = 1;
				$(this).find('span').eq(0).css('display', 'block');
				$(this).find('span').eq(1).css('display', 'none');
				sound.play();
				return aa;
			}
			$(this).find('span').hide();
			return false;
		});
		// 点击头连接
		$('.W-introduce-me').on('click', function () {
			window.open('https://show8.github.io');
		});

		$('.W-time').hover(function () {
			$(this).css({
				'animation': 'runs 0.5s linear',
				'-o-animation': 'runs 0.5s linear',
				'-webkit-animation': 'runs 0.5s linear',
				'-ms-animation': 'runs 0.5s linear',
				'-moz-animation': 'runs 0.5s linear'
			});

			$('.W-zhuan').stop(true, true).fadeIn(200);

		}, function () {
			$(this).css({
				'animation': 'runn 0.5s linear',
				'-o-animation': 'runn 0.5s linear',
				'-webkit-animation': 'runn 0.5s linear',
				'-moz-animation': 'runn 0.5s linear',
				'-msanimation': 'runn 0.5s linear'
			});
			$('.W-zhuan').stop(true, true).fadeOut(700);
		})

		//我的经历
		$('.W-tim-ul,.W-work-right ul').find('li').hover(function () {
			$('.W-jie1').css('color', '#fff');
			$('.W-jie1').eq($(this).index()).css('color', '#6bc30d');
			if ($(this).index() == 0) {
				xuanz1(0, '57px');
			} else if ($(this).index() == 1) {
				xuanz1(1, '182px');
			} else if ($(this).index() == 2) {
				xuanz1(2, '307px');
			}
		}, function () {
			$('.W-jie1').css('color', '#fff');
			if ($(this).index() == 0) {
				xuanz2(0, '63px');
			} else if ($(this).index() == 1) {
				xuanz2(1, '188px');
			} else if ($(this).index() == 2) {
				xuanz2(2, '313px');
			}
		})
		function xuanz1(n, top) {
			$('.W-tim-ul li').find('span').eq(n).stop().animate({ 'border-width': '8px', 'right': '-20px', 'top': top }, 100, 'linear');
		}
		function xuanz2(n, top) {
			$('.W-tim-ul li').find('span').eq(n).stop().animate({ 'border-width': '2px', 'right': '-14px', 'top': top });
		};

		// 联系我

		$('.W-lian-bottom').find('a').hover(function () {
			$(this).find('span').stop(true, true).fadeIn(400);
		}, function () {
			$(this).find('span').stop(true, true).fadeOut(400);
		});

		$(document).on('touchstart', function () {
			$('.W-lian-bottom a').find('span').stop(true, true).fadeOut(400);
		});
		/*作品*/

		//大的swiper
		var mySwiper1 = new Swiper('.swiper-container1', {
			speed: 500,//速度
			direction: 'vertical',//垂直
			paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
			simulateTouch: false,//鼠标无效 当在手机端时候 改为ture
			pagination: '.swiper-pagination1',
			//effect : 'cube',//切换特效coverflow flip
			//回调函数，swiper从一个slide过渡到另一个slide结束时执行。
			onSlideChangeEnd: function (swiper) {
				//				if(swiper.activeIndex == 0) {
				//					
				//				}else{
				//					
				//				}
			},
			//swiper从当前slide开始过渡到另一个slide时执行
			onSlideChangeStart: function (swiper) {
				// wowSlider.autoPlay
				if (swiper.activeIndex == 0) {
					$('.slider').stop(true, true).fadeIn(800);
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(0).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(0).find('a span').css('width', '100%').addClass('span-active');
				} else if (swiper.activeIndex == 1) {
					$('.slider').hide();
					$('.W-introduce').addClass('fadeInLeft');
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(1).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(1).find('a span').css('width', '100%').addClass('span-active');
				} else if (swiper.activeIndex == 2) {
					$('.slider').hide();
					$('#content').addClass('fadeInLeft');
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(2).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(2).find('a span').css('width', '100%').addClass('span-active');
				} else if (swiper.activeIndex == 3) {
					$('.slider').hide();
					$('.W-work-nr').addClass('fadeInLeft');
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(3).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(3).find('a span').css('width', '100%').addClass('span-active');
				} else if (swiper.activeIndex == 4) {
					$('.slider').hide();
					$('.swiper-container2,.W-works-zi').addClass('fadeInLeft');
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(4).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(4).find('a span').css('width', '100%').addClass('span-active');
				} else if (swiper.activeIndex == 5) {
					$('.slider').hide();
					$('.W-lian').addClass('fadeInLeft');
					$('.navigation li a').removeClass('a-active');
					$('.navigation li').eq(5).find('a').addClass('a-active');
					$('.navigation li a span').css('width', '0').removeClass('span-active');
					$('.navigation li').eq(5).find('a span').css('width', '100%').addClass('span-active');
				}
			},
			keyboardControl: true,
			mousewheelControl: true,
			preventClicks: false,
			preventLinksPropagation: true,
			width: window.innerWidth,
			observer: true,
		});
		$('.navigation').find('li').on('click touchstart', function () {
			moveNav($(this).index());
			quxiao();
		});

		function moveNav(index) {
			mySwiper1.slideTo(index);
		}

		//小的swiper
		var mySwiper2 = new Swiper('.swiper-container2', {
			speed: 700,//速度
			//		    loop: true,
			paginationClickable: true,
			// 如果需要分页器
			// 切换效果
			effect: 'fade',
			pagination: '.swiper-pagination2',
			paginationBulletRender: function (swiper, index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},

			observeParents: true, //修改swiper的父元素时，自动初始化swipe
			preventClicks: false,  //当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
			preventLinksPropagation: true,  //阻止click冒泡。拖动Swiper时阻止click事件。
			observer: true  //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
		});

		//小的swiper
		var mySwiper3 = new Swiper('.swiper-container3', {
			speed: 700,//速度
			//		    loop: true,
			spaceBetween: 20,//距离
			effect: 'cube',
			pagination: '.swiper-pagination3',
			preventClicks: false,
			paginationClickable: true,
			observeParents: true, //修改swiper的父元素时，自动初始化swipe
			preventClicks: false,  //当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
			preventLinksPropagation: true,  //阻止click冒泡。拖动Swiper时阻止click事件。
			observer: true  //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
		});



		//音频载入
		var sound = new Howl({
			src: ["audio/show.MP3", "audio/show.OGG"],
			autoplay: true,
			loop: true,
			volume: 0.5,
			onend: function () {
				console.log('Finished!');
			}
		});

		//点击导航li取消东西
		function quxiao() {
			clearInterval(Timer);
			$('.navigation').stop().animate({ 'right': '-100%' }, 100, 'linear');
			$('body').removeClass('nav-open');
			$('.nav-zhe').hide();
			$('.nav-toggle').css('background', 'transparent');
			$('.navigation ul').stop().animate({ 'right': '-150px' }, 100, 'linear');
			$('.W-logo').stop().animate({ 'right': '-80%' }, 100, 'linear');

		}

		// 判断是否为ie浏览器
		if (!!window.ActiveXObject || "ActiveXObject" in window) {
			$('.W-introduce-me').find('img').hide();
			$('.W-introduce-me').css({ 'background': 'url(img/me1.jpg) no-repeat', 'background-size': 'cover' });
		}

		//禁止鼠标右键f12键

		document.oncontextmenu = function () {
			return false;
		}
		$(document).keydown(function (e) {
			e = window.event || e || e.which;
			if (e.keyCode == 123) {
				location.href = 'http://www.cnblogs.com/studysuper/';
				return false;
			}
		});

		// 评论
		var ping = null;
		$('.bg-3').on('click touchstart', function () {
			$('.W-pinglun').removeClass('PingGuan');
			$('.W-pinglun').stop(true, true).show().addClass('pingl');
			$('.swiper-container,.W-head-portrait,.nav-yuan,.bg-3,.W-page2,.W-s-yyue').addClass('swiper-slide-blur');
		});

		$('.bg-2').on('click', function () {
			clearTimeout(ping);
			$('.swiper-container,.W-head-portrait,.nav-yuan,.bg-3,.W-page2,.W-s-yyue').removeClass('swiper-slide-blur');
			$('.W-pinglun').delay(200).addClass('PingGuan');
			ping = setTimeout(function () {
				$('.W-pinglun').stop(true, true).hide();
			}, 600);
		});

		//手机端
		//随机背景图
		var Imgatr = ['img/WS1.jpg', 'img/WS2.jpg', 'img/WS3.jpg'];
		var url = Imgatr[Math.floor(Math.random() * Imgatr.length)];
		$('.W-yi-bg').css('background-image', 'url(' + url + ')');
		if (url == "img/WS3.jpg") {
			$('.Ws-tou').find('img').attr('src', 'img/me2.jpg');
		} else {
			$('.Ws-tou').find('img').attr('src', 'img/me1.jpg');
		}
		//技能图	
		var Wjn = [
			{ "color": "#1abc9c", "text": "PHOTOSHOP" },
			{ "color": "#e74c3c", "text": "CSS3" },
			{ "color": "#34495e", "text": "HTML5" },
			{ "color": "#3498db", "text": "JQUERY" },
			{ "color": "#d35400", "text": "javascript" },
			{ "color": "#9b59b6", "text": "Java" },
		];
		$('.Ws-tu').find('.Ws-PHOTOSHOP').each(function (index) {
			$(this).find('em').text(Wjn[index].text);
			$(this).find('.Ws-ph .Ws-ph-f').css('background', Wjn[index].color);
			$(this).find('.Ws-ph .Ws-ph-f').css('width', $(this).find('.Ws-ph .Ws-ph-f').data('percentage'));
		});

		//	缩小会抖 把图图片改为1366 现在自己电脑上试试
		$(window).resize(function () {
			$('#wowslider-container .ws_images').css('height', $(window).height());
			if ($(window).width() <= 770) {
				$('.swiper-container,.W-head-portrait,.nav-yuan,.bg-3,.W-page2,.W-s-yyue').removeClass('swiper-slide-blur');
				$('.nav-toggle').hover(function () {
					$(this).css('background', 'transparent');
				});
			};

		});

		var top = $('.Ws-me').find('.Ws-me-title').offset().top,
			top1 = $('.Ws-ji').find('.Ws-me-title').offset().top,
			top2 = $('.Ws-jing').find('.Ws-me-title').offset().top,
			top3 = $('.Ws-zuo').find('.Ws-me-title').offset().top,
			top4 = $('.Ws-lianxi').find('.Ws-me-title').offset().top;

		if ($(window).width() <= 770) {
			$('.swiper-container,.W-head-portrait,.nav-yuan,.bg-3,.W-page2,.W-s-yyue').removeClass('swiper-slide-blur');
			$('.nav-toggle').hover(function () {
				$(this).css('background', 'transparent');
			});

			$('.navigation').find('li').eq(0).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: 0
				});
			});
			$('.navigation').find('li').eq(1).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: top
				});
			});

			$('.navigation').find('li').eq(2).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: top1
				});
			});
			$('.navigation').find('li').eq(3).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: top2
				});
			});
			$('.navigation').find('li').eq(4).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: top3
				});
			});
			$('.navigation').find('li').eq(5).on('click touchstart', function () {
				$('body,html').animate({
					scrollTop: top4 + 60
				});
			});

			$('.navigation').find('li').eq(6).on('click touchstart', function () {
				window.location.href = "https://showcc.github.io";
			});

		};

		$(window).scroll(function () {
			if ($(window).scrollTop() > 200) {
				$('.Ws-header').show();
			} else {
				$('.Ws-header').hide();
			};
			if ($(window).scrollTop() >= 480) {
				$('.Ws-hui').stop(true, true).fadeIn(400);
			} else {
				$('.Ws-hui').stop(true, true).fadeOut(400);
			};

		});

		$('.Ws-hui').on('click', function () {
			$('html,body').stop().animate({
				scrollTop: 0
			}, 500);
		});

		//根据位置 加动画 
		$(window).scroll(function () {
			var topH = $(window).scrollTop(),
				topc = top1 - topH,
				topji = top2 - topH,
				topzuo = top3 - topH,
				toplian = top4 - topH;
			if ($(window).scrollTop() > 10) {
				$('.Ws-me').find('.Ws-me-title i').animate({ "width": 60 }, 1000);
			};
			if (topc < $(window).height() - 40) {
				$('.Ws-ji').find('.Ws-me-title i').animate({ "width": 80 }, 1000);
			};
			if (topji < $(window).height() - 40) {
				$('.Ws-jing').find('.Ws-me-title i').animate({ "width": 80 }, 1000);
			};
			if (topzuo < $(window).height() - 40) {
				$('.Ws-zuo').find('.Ws-me-title i').animate({ "width": 80 }, 1000);
			};
			if (toplian < $(window).height() - 40) {
				$('.Ws-lianxi').find('.Ws-me-title i').animate({ "width": 60 }, 1000);
			};

		});
	})();
});

