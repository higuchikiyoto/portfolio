$(function(){

	$('.menu-trigger').on('click',function(){
		console.log('cha');
		if ($('ul').hasClass('active')){
			$('ul').removeClass('active');
			$('.menu-trigger').removeClass('active');
			$('body').css('overflow','visible');
		}else{
			$('ul').addClass('active');
			$('.menu-trigger').addClass('active');
			$('body').css('overflow','hidden');
		console.log('test');
			
		}
	});

});