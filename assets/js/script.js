/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: 1.6, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.lb-header-section').addClass('sticky-on')
		} else {
			jQuery('.lb-header-section').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	$('.lb-header-section .main-navigation li a').on("click", function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top -50
				}, 1000);
				return false;
			}
		}
	});

	if($('.nx-letter').length) {
		var txtSplit = $('.nx-letter');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "chars",
				wordsClass: "split-word"
			});
		});
	}


	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});


	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.lb-scrollup').fadeIn();
		} else {
			$('.lb-scrollup').fadeOut();
		}
	});
	$('.lb-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	document.addEventListener("mousemove", (e) => {
		window.requestAnimationFrame(() => {
			document.querySelectorAll(".img_move").forEach((move) => {
				const movingValue = parseFloat(move.dataset.value);
				const x = (e.clientX * movingValue) / 250;
				const y = (e.clientY * movingValue) / 250;

				move.style.transform = `translate(${x}px, ${y}px)`;
			});
		});
	});

	if($(".lb-number").length) {
		var AGTTitleAni = $(".lb-number");
		if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "chars",
				charsClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('lb-number-anim') ){
				gsap.set(el.split.chars, {
					y: 100,
					opacity: 0,
					rotationX: -45,
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse",
					markers: false,
				},
				x: 0,
				y: 0,
				scaleX: 1,
				scaleY: 1,
				opacity: 1,
				duration: 1,
				stagger: .1,
				rotationX: 0,
				delay: .1,
				ease: "power3.inOut",
			});
		});
	}
	if($('.lb_sec_title').length) {
		var edtitle = $(".lb_sec_title");

		if(edtitle.length == 0) return; gsap.registerPlugin(SplitText); edtitle.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			if( $(el).hasClass('lb_title_anim') ){
				gsap.set(el.split.words, {
					opacity: .3,
					y: "100",
				});
			};
			el.anim = gsap.to(el.split.words, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					markers: false
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: 1,
				stagger: 0.1,
			});
		});
	}
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			
			setTimeout(function() {
				if($(".lb_hero_title").length) {
					var AGTTitleAni = $(".lb_hero_title");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hr_title') ){
							gsap.set(el.split.lines, {
								y: 100,
								opacity: 0,
								rotationX: -45,
							});
						}
						el.anim = gsap.to(el.split.lines, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .1,
							rotationX: 0,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}
				gsap.utils.toArray(".lb-text p").forEach(paragraph => {
					let timeline = gsap.timeline({
						scrollTrigger: {
							trigger: paragraph,
							start: "top 90%",
							end: "bottom 60%",
							toggleActions: "play none none none"
						}
					});
					let splitText = new SplitText(paragraph, { type: "lines" });
					gsap.set(paragraph, { perspective: 400 });
					timeline.from(splitText.lines, {
						opacity: 0,
						rotationX: -80,
						transformOrigin: "top center -50",
						force3D: true,
						duration: 1,
						delay: 0.5,
						stagger: 0.1
					});
				});
				const LNHERO = gsap.timeline();
				LNHERO
				.from(".lb-hero-sec .hero_gradiant", {  yPercent: 100, opacity: 0,   duration: 1, transformOrigin: "right", ease: "power1.out" },"<=.1")
				.from(".lb-hero-img-wrap .item-img1", {  height: 0, y: -100, opacity: 0,   duration: 3, transformOrigin: "top", ease: "elastic.out(1,0.7)" })
				.from(".lb-hero-img-wrap .item-img2", {  height: 0, x: 100, opacity: 0,   duration: 3, transformOrigin: "top", ease: "elastic.out(1,0.7)" },"<=.1")
				.from(".lb-hero-img-wrap .item-img3", {  height: 0, x: -100, opacity: 0,   duration: 3, transformOrigin: "top", ease: "elastic.out(1,0.7)" },"<=.1")
				.from(".lb-hero-img-wrap .item-img4", {  height: 0, opacity: 0,   duration: 3, transformOrigin: "bottom", ease: "elastic.out(1,0.7)" },"<=.1")
				.from(".lb-hero-img-wrap .item-img5", {  height: 0, opacity: 0,   duration: 3, transformOrigin: "bottom", ease: "elastic.out(1,0.7)" },"<=.1")
				.from(".lb-hero-text .desc-btn .top_line", {  width: 0, opacity: 0,   duration: 3, transformOrigin: "bottom", ease: "power1.out" },"<=.1")
				.from(".lb-hero-text .desc-btn .lb-btn1", {  x: 100, opacity: 0,   duration: 1, transformOrigin: "right", ease: "power1.out" },"<=.1")
				
				
			}, 700);
		})		
	});
	

	if ($(".progress-bar").length) {
		var $progress_bar = $('.progress-bar');
		$progress_bar.appear();

		$(document.body).on('appear', '.progress-bar', function() {
			var current_item = $(this);

			if (!current_item.hasClass('appeared')) {
				var percent = current_item.data('percent');
				current_item.css('width', percent + '%').addClass('appeared');
				var $counter = $('<span class="counter">0%</span>');
				current_item.parent().append($counter);
				$({countNum: 0}).animate(
					{countNum: percent},
					{
						duration: 1200,
						easing: "swing",
						step: function() {
							$counter.text(Math.floor(this.countNum) + "%");
						},
						complete: function() {
							$counter.text(this.countNum + "%");
						}
					}
					);
			}
		});
	}


	if ($('.lb-testi-slider').length > 0 ) {
		var slider = new Swiper('.lb-testi-slider', {
			slidesPerView: 4,
			loop: true,
			spaceBetween: 24,
			speed: 1000,
			navigation: {
				nextEl: ".lb-testi1-next",
				prevEl: ".lb-testi1-prev",
			},
			pagination: {
				el: ".lb-tst-pagi",
				clickable: true,
			},
			autoplay: {
				enabled: true,
				delay: 6000
			},
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1400': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};


	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, xPercent: -50,  yPercent: 50})
	});
	gsap.utils.toArray(' .top_view1').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 100%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {   yPercent: 20})
	});
	gsap.utils.toArray(' .top_view2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 110%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {   yPercent: -100})
	});
	gsap.utils.toArray(' .top_view3').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 50%",
				end: "top 20%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,  yPercent: -50})
	});
	gsap.utils.toArray(' .top_view4').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 100%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,   yPercent: 50})
	});
	gsap.utils.toArray(' .top_view5').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 100%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,   xPercent: -50})
	});
	gsap.utils.toArray('.lb-tools-img-wrap .item-img1').forEach((el) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				end: "top 50%", 
				duration: 2,
				scrub: 1, 
				toggleActions: "play none none reverse",
				markers: false
			}
		});

		tlcta.set(el, { transformOrigin: 'center center', transformPerspective: 1000 })
		.fromTo(el, { rotationX: 15, y: -100,  scale: 1 }, { rotationX: 0, y: 0,  ease: "none" }
			);
	});
	const boxes = gsap.utils.toArray('.txt_item_active');
	boxes.forEach(svg => {
		gsap.to(svg, {
			scrollTrigger: {
				trigger: svg,
				start: "top 100%",
				end: "bottom bottom",
				toggleClass: "active",
				duration: 3,
				delay:1,
				toggleActions: "play play play reverse",
				once: true,
			}
		});
	});


	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,

			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	});


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var TVCONT = gsap.timeline({
			scrollTrigger: {
				trigger: '.lb-footer-sec',
				start: "top 30%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		TVCONT
		.from(".lb-footer-sec .lb-footer-screen .ftr-screen1", { opacity: 0, scale: .4,  yPercent: -100, duration: 1,   ease: "power1.out" },"<= .5")
		.from(".lb-footer-sec .lb-footer-screen .ftr-screen2", { opacity: 0, scale: .4,  yPercent: -100, duration: 1,   ease: "power1.out" },"<= .1")
		.from(".lb-footer-sec .lb-footer-screen .ftr-screen3", { opacity: 0, scale: .4,  yPercent: -100, duration: 1,   ease: "power1.out" },"<= .1")
		.from(".lb-footer-sec .lb-footer-screen .ftr-screen4", { opacity: 0, scale: .4,  yPercent: -100, duration: 1,   ease: "power1.out" },"<= .1")
		.from(".lb-ftr-shape2", { opacity: 0, scale: .4,  rotate: 360, duration: 1,   ease: "power1.out" },"<= .1")
		.from(".lb-ftr-text", { opacity: 0, yPercent: 100 ,  ease: "power1.out" },"<= .1")
	};


})(jQuery);