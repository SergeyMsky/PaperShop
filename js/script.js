$(document).ready(function(){
	$('.slider_banner').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		cssEase: 'ease',
		speed: 2000,
	});
});

$(document).ready(function(){
	$('.card_slider').slick({
		arrows: false,
		swipe: false,
		draggable: false,
		asNavFor: ".card_slider-list"
	});
	$('.card_slider-list').slick({
		arrows: false,
		vertical: true,
		slidesToShow: 4,
		focusOnSelect: true,
		swipe: false,
		draggable: false,
		asNavFor: ".card_slider",
		responsive: [{
			breakpoint: 780,
			settings:{
				vertical: false
			}
		}]
	});
});


$(document).mouseup(function(){
	$(".popup-link").click(function(e) {
		e.preventDefault();
	  	$('.popup_city').addClass('open');
	  	$('body').addClass('lock');
	});
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".popup_city_content").length == 0) {
	        $(".popup_city").removeClass("open");
	        $('body').removeClass('lock');
	    }
	});
});
$(document).mouseup(function(){
	$(".popup_close").click(function(e) {
		e.preventDefault();
	  	$('.popup_city').removeClass('open');
	  	$('body').removeClass('lock');
	});
});

$(document).ready(function(){
		const navOffset = 
	$('.header_bottom').offset().top;

	$(window).scroll(function(){
		const scrolled =
	$(this).scrollTop();

		if(scrolled > navOffset) {
			$('.header_bottom').addClass('header-fixed');
		} else if (scrolled < navOffset) {
			$('.header_bottom').removeClass('header-fixed');
		}
	});
});

$(document).ready(function(){
	$('.toggle_promotions').click(function(){
		$('.leader_more-promotions').toggleClass('hide_promotions');	
	});				
	$('.toggle_new').click(function(){
		$('.leader_more-new').toggleClass('hide_new');	
	});				
	$('.toggle_hits').click(function(){
		$('.leader_more-hits').toggleClass('hide_hits');	
	});				
});


$(document).mouseup(function(){
$(".header_burger").click(function() {
    $(".mobile_menu").addClass("show");
    $('body').addClass('lock-menu'); 
    $('.mobile_container').addClass('mobile-shadow');
    $(".mobile_menu .body").show();
    $(".mobile_menu .header").show()
	});
});
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".mobile_menu").length == 0) {
            $(".mobile_menu").removeClass("show");
            $('body').removeClass('lock-menu'); 
    		$('.mobile_container').removeClass('mobile-shadow');
    		$('.mobile-catalog').removeClass('show-catalog');
        }
    });
$(document).mouseup(function() {  
	$(".open-mobile_catalog").click(function(e) {
		e.preventDefault();
	    $('.mobile-catalog').addClass('show-catalog');
	    $(".mobile_menu .body").hide();
	    $(".mobile_menu .header").hide();
	});
	$(".mobile-catalog_header").click(function(e) {
		e.preventDefault();
	    $('.mobile-catalog').removeClass('show-catalog');
	    $(".mobile_menu .body").show();
	    $(".mobile_menu .header").show()
	});
});

$(".sorting").click(function() {
    $(".sort-items").toggleClass("open-itm");
});
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".sort-items").length == 0) {
            $(".sort-items").removeClass("open-itm");
        }
    });



$(".menu_btn-list").click(function() {
    $(".wrapper_products").addClass("menu-list");
    $(this).addClass("active-btn");
    $(".menu_btn-grid").removeClass("active-btn");
});
$(".menu_btn-grid").click(function() {
    $(".wrapper_products").removeClass("menu-list");
    $(".menu_btn-list").removeClass("active-btn");
    $(this).addClass("active-btn");
});



$(".btn-filter").click(function() {
    $(".filters-body").addClass("show-filters");
    $('.filters-footer').addClass("show-footer");
    $('body').addClass('lock-filters'); 
    $('.filters').addClass('mobile-shadow'); 
});
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".filters-body").length == 0) {
            $(".filters-body").removeClass("show-filters");
            $(".filters-footer").removeClass("show-footer");
            $('body').removeClass('lock-filters'); 
    		$('.filters').removeClass('mobile-shadow'); 
        }
    });


$(".filter-itm_title").click(function() {
  $(this).next('.filter-box').slideToggle("fast");
  $(this).children('.down-arrow').toggleClass("rotate-arrow");
});



$(document).ready(function($){
	if($('.filter-box ul').find('li').length > 5){
		$('.more-btn').click(function(){
		$(this).prev().children('li:nth-child(n+6)').slideToggle('fast');
		$(this).toggleClass('opnd_g');
	if($(this).hasClass('opnd_g')){
		$(this).html('Скрыть');}
			else {$(this).html('Смотреть все');}
	});
			}else{$('.more-btn').hide();}
});

$(document).ready(function() {
	$('.tabs-triggers_itm').click(function(e) {
		e.preventDefault();
		$('.tabs-triggers_itm').removeClass('tabs-triggers_itm-active');
		$('.tabs-content_itm').removeClass('tabs-content_itm-active');
		$(this).addClass('tabs-triggers_itm-active');
		$($(this).attr('href')).addClass('tabs-content_itm-active');
	});
	$('.tabs-triggers_itm:first').click();
});


$(document).mouseup(function(){
	$('.login-btn').click(function(e) {
		e.preventDefault();
	  	$('.popup-login').addClass('open');
	  	$('body').addClass('lock-login');
		});
});
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest('.popup-login_content').length == 0) {
        $('.popup-login').removeClass('open');
        $('body').removeClass('lock-login');
    }
});
$(document).mouseup(function(){
	$(".popup-login_close").click(function(e) {
		e.preventDefault();
	  	$('.popup-login').removeClass('open');
	  	$('body').removeClass('lock-login');
		});
	});
$(document).mouseup(function(){
	$(".btn-register_login").click(function(e) {
		e.preventDefault();
		$(".popup-login").hide();
	  	$('.popup-register').show();
	  	$('body').addClass('lock-register');
		});
	$(".btn-register_enter").click(function() {
		$(".popup-register").hide();
		$(".popup-login").addClass("open");
		$(".popup-login").show();
		$('body').addClass('lock-login');
		});
});
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".popup-register_content").length == 0) {
        $(".popup-register").hide();
        $('body').removeClass('lock-register');
        $(".popup-login").show();
    }
});
$(document).mouseup(function(){
	$('.btn-enter-email').click(function(e) {
		e.preventDefault();
	  	$(".form-email").show();
	  	$(".form-phone").hide();
		});
	$('.btn-enter-phone').click(function(e) {
		e.preventDefault();
		$(".form-phone").show();
	  	$(".form-email").hide();
		});
	$(".popup-register_close").click(function() {
	  	$(".popup-register").hide();
	  	$('body').removeClass('lock-register');
		});
});




$(document).mouseup(function(){
	$(".mobile-btn_register").click(function(e) {
		e.preventDefault();
	  	$('.popup-login').addClass('open');
	  	$('body').addClass('lock-login');
	});
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".popup-login_content").length == 0) {
	        $(".popup-login").removeClass("open");
	        $('body').removeClass('lock-login');
	    }
	});
});




function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

