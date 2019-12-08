$(function(){
	$('.slider').slick({
		centerMode: true,
	    centerPadding: '0px',
	    focusOnSelect:true,
		slidesToShow:2,
		slidesToScroll:2,
		prevArrow:'<div class="slick-prev-button slick-button"><i class="fas fa-arrow-circle-left"></i></div>',
        nextArrow:'<div class="slick-next-button slick-button"><i class="fas fa-arrow-circle-right"></i></div>',
        responsive:[
			{
				breakpoint: 650,
				settings:{
				    slidesToShow:1,
				    centerPadding: '10px',
				}
			},	
		]
	});

	$('div.menu').on('click',function(){
		if ($('.menu-trigger').hasClass('active')){
			$('.menu-trigger').removeClass('active');
			$('nav').removeClass('active');
		}else{
			$('.menu-trigger').addClass('active');
			$('nav').addClass('active');
			console.log('.menu-nav');
		}
	});

});