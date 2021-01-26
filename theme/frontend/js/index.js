var FUNCTION = (function () {
  var swiper_banner = new Swiper('.banner-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 1500,
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var product = new Swiper('.product-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var video = new Swiper('.video-swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    keyboard: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });

  var news = new Swiper('.news-swiper', {
    slidesPerView: 2,
    // autoplay: {
    //   delay: 1000,
    // },
    spaceBetween: 10,
    loop: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  });
  var banner2 = new Swiper('.banner-swipper2', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var feedBack = new Swiper('.feed-back-list', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  });
  var fancyBox = function () {
    $(document).ready(function () {

      $(".various").fancybox({
        maxWidth: 400,
        maxHeight: 300,
        fitToView: false,
        width: '50%',
        height: '70%',
        autoSize: true,
        closeClick: true,
        openEffect: 'none',
        closeEffect: 'none'
      });
    })

  };

  var backToTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('.slider').height()) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
    $(".back-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });

  }



  var cuon = function () {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function () {
      // var pos_body = $('html,body').scrollTop();//a1
      var pos_body = $(this).scrollTop();
      var heightHtop = $('.wrapper-header').height();
      if (pos_body > heightHtop) {
        $('.fixed').addClass('fixed-2');
      }
      else {
        $('.fixed').removeClass('fixed-2');
      }
      if (pos_body > 100) {
        $('.back-to-top').addClass('show')
      }
      else {
        $('.back-to-top').removeClass('show')
      }
    });
    $('.back-to-top').click(function () {
      $('html,body').animate({
        scrollTop: 0
      },//cuộn về 0px
        1000);//tốc độ cuộn
    });
  };
  var _scroll_menu = function () {
    var win = $(window);
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (win.scrollTop() > 0) {
        $('.header-bottom').addClass('beautyfixed');
      }
      else {
        $('.header-bottom').removeClass('beautyfixed');
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $('.header-bottom').css('top', 0);
      } else {
        var MenuHeight = $('.header-bottom').innerHeight();
        $('.header-bottom').css('top', (0 - MenuHeight));
      }
      prevScrollpos = currentScrollPos;
    }
  }
  var paddingTop = function () {
    $(document).ready(function () {
      $(".banner-img,.banner-sp-img").css('padding-top',
        $(".header").innerHeight() + 0);
    })
  }
  var wowjs = function () {
    new WOW().init();
  };
  var newScroll = function () {
    $(window).click(function (e) {
      if ($('ul li ul').has(e.target).length == 0 && !$('ul li ul').is(e.target) && $('li i').has(e.target).length == 0 && !$('li i').is(e.target)) {
        $('ul li ul').slideUp(300);
        $('li i').removeClass('active');
      }
    });
    $('.menu_danhmuc').find("ul li").each(function () {
      if ($(this).find('ul>li').length > 0) {
        $(this).prepend('<i></i>');
      }
    });
    $('.menu_danhmuc').find('li i').click(function (event) {
      var ul = $(this).nextAll("ul");
      if (ul.is(":hidden") === true) {
        $(this).addClass('active');
        ul.slideDown(300);
      } else {
        $(this).removeClass('active');
        ul.slideUp();
      }
    });
  };
  var thumb = function () {
    $(document).ready(function () {
      /*********************
        Thumbnails slider
      *********************/
      // Change the main image whenever a thumbnail button is activated
      $('.thumbnails-slider').on('init', function (e, slider) {
        $(slider.$slides.find('.thumbnail-button')).each(function (index) {
          $(this).on('click', function () {
            // Move aria-current="true" to this button
            $(slider.$slides.find('.thumbnail-button').removeAttr('aria-current'));
            $(this).attr('aria-current', true);

            // Change the main image to match this thumbnail button
            var index = $(this).closest('.slick-slide').data('slick-index');
            $('.main-image-slider').slick('slickGoTo', index);
          });
        });
      });
      // Initialize the slider
      $('.thumbnails-slider').slick({
        vertical: true,
        slidesToShow: 4,
        infinite: false,
        instructionsText: 'This carousel contains a column of small thumbnails. Selecting a thumbnail will change the main image in the carousel that follows. Use the Previous and Next buttons to cycle through all the thumbnails, use Enter to select.',
      });
      /********************
        Main image slider
      *********************/
      $('.main-image-slider').slick({
        slidesToShow: 1,
        draggable: false,
        instructionsText: 'This carousel shows one large product image at a time. Use the Previous and Next buttons to move between images, or use the preceding thumbnails carousel to select a specific image to display here.',
      });

      // Update the thumbnail slider when the user changes the main slider directly.
      $('.main-image-slider').on('beforeChange', function (e, slider, currentSlide, nextSlide) {
        // Remove aria-current from the last selected thumbnail image button
        $('.thumbnails-slider .thumbnail-button[aria-current="true"]').removeAttr('aria-current');

        // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
        $('.thumbnails-slider').slick('slickGoTo', nextSlide);

        // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
        $('.thumbnails-slider .thumbnail-button:eq(' + nextSlide + ')').attr('aria-current', true);
      });
    });
  }
  var count = function () {
   $("#up").click(function(){
     var val= $(this).parent().find(".input-value").val();     
     val++;
     $(this).parent().find(".input-value").val(val);
   });


   
   $("#down").click(function(){
    var val= $(this).parent().find(".input-value").val();   
    val--;
    if(val<1){
     return false;
    }
    $(this).parent().find(".input-value").val(val);
    console.log(val);
  });


  };
  // menu-mobile
  var menu = function(){
    $(".overlay").click(function(e){
			if($('').has(e.target).length ==0 ){
        $('.overlay').removeClass('overlay-show');
        $('.menu-mb').removeClass('menu-add');
        $('.menu-toggle').removeClass('open');
			}
		});
    $('.menu-toggle').click(function(){
      $(this).toggleClass('open');
      $(".menu-mb").toggleClass("menu-add");
      $(".overlay").toggleClass("overlay-show");

  });


		$(window).click(function(e){
			if($('ul li ul').has(e.target).length == 0 && !$('ul li ul').is(e.target) && $('li i').has(e.target).length == 0 && !$('li i').is(e.target)){
				$('ul li ul').slideUp(300);
				$('li i').removeClass('active');
			}
		});
		$('.menu-mb').find("ul li").each(function(){
			if($(this).find('ul>li').length > 0){
				$(this).prepend('<i></i>');
			}
		});
		$('.menu-mb').find('li i').click(function(event) {
			var ul=$(this).nextAll("ul");
			if(ul.is(":hidden") === true ){
				$(this).addClass('active');
				ul.slideDown(300);
			}else{
				$(this).removeClass('active');
				ul.slideUp();
			}
		});
	};

  return {
    _: function () {
      menu();
      cuon();
      wowjs();
      // paddingTop();     
      newScroll();
      thumb();
      count();
      fancyBox();
      swiper_banner();
      product();
      video();
      news();
      banner2();
      feedBack();
      fixedTop();
      backToTop();
     

    }
  }
})();
$(function () {
  FUNCTION._()
});