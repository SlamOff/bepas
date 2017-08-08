$(document).ready(function() {
	// remove placeholder after click
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	// ScrollTo
	$('.scroll').mPageScroll2id();
	
	// toggle_btn
	$('.toggle_btn').click(function(){
		$(".sandwich").toggleClass("active");
		if($('.menu').is(':visible')) {
			$('.menu').slideUp(300);
		} else {
			$('.menu').slideDown(300);
		};
	});
	if($(window).width() < 768){
		$('.buy h4').click(function(){
			$(this).siblings('p').slideToggle();
		});
		$('.why h4').click(function(){
			$(this).siblings('p').slideToggle();
		});
	}
	
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// carousel
	$('.produce_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		prevArrow: '.produce_prev',
		nextArrow: '.produce_next',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	$('.project_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		swipe: false,
		prevArrow: '.project_prev',
		nextArrow: '.project_next',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	$('.below').click(function(){
		var src = $(this).attr('src');
		$(this).parent().siblings('.main').attr('src', src);
	});
	$('.cert_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		focusOnSelect: true,
		swipe: false,
		prevArrow: '.cert_prev',
		nextArrow: '.cert_next',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	// photo magnific gallery
	$('.gallery').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	//validation
	$('#mainForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#bottomForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#stepForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#workForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	$('#consultForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});
	





});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/