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

});