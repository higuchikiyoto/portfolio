$(function(){
	// SP MENU BTN
	$('.menu_btn').on('click', function(){
		if($('.menu_btn').hasClass('active')){
			$('.menu_btn').removeClass('active');
			$('nav').removeClass('active');
			$('body').css('overflow','visible');
		}else{
			$('.menu_btn').addClass('active');
			$('nav').addClass('active');
			$('body').css('overflow','hidden');
		}
	});
	//SLICK 
	$('.slider-wrapper').slick({
		// アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
		accessibility: true,
		// 自動再生。trueで自動再生される。
		autoplay: true,
		// 自動再生で切り替えをする時間
		autoplaySpeed: 3000,
		// 自動再生や左右の矢印でスライドするスピード
		speed: 400,
		// // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
		// pauseOnHover: true,
		// // 自動再生時にドットにマウスオンで一時停止するかどうか
		// pauseOnDotsHover: true,
		// 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
		cssEase: 'ease',
		// 画像下のドット（ページ送り）を表示
		dots: false,
		// ドットのclass名をつける
		dotsClass: 'dot-class',
		// ドラッグができるかどうか
		draggable: true,
		// 切り替え時のフェードイン設定。trueでon
		fade: true,
		// 左右の次へ、前へボタンを表示するかどうか
		arrows: true,
		// 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
		infinite: true,
		// 最初のスライダーの位置
		initialSlide: 0,
		// 画像の遅延表示。‘ondemand’or'progressive'
		lazyLoad: 'ondemand',
		// スライドのエリアにマウスオーバーしている間、自動再生を止めるかどうか。
		pauseOnHover: true,
		// スライドのエリアに画像がいくつ表示されるかを指定
		slidesToShow: 4,
		// 一度にスライドする数
		slidesToScroll: 1,
		// タッチスワイプに対応するかどうか
		swipe: true,
		// 縦方向へのスライド
		vertical: false,
		// 表示中の画像を中央へ
		centerMode: true,
		// 中央のpadding
		centerPadding: '0'
	});

	slider.init();
	
});


//SLIDER FADE VER	
var slider = {
	slide:'.slider-wrapper > div',
	time:3,
	timeObj:null,
	slideObj:[],
	itemCnt:0,
	method:'fade',
	init:function(){
		slider.classEquip();
		slider.animeEvent();
	},
	classEquip:function(){
		var cnt = 0;
		// アニメーションを行う対象に対してクラス付け
		$(slider.slide).each(function(){
			var className = 'slide_' + cnt;
			$(this).addClass(className);
			slider.slideObj.push(className);
			cnt++;
		});
		slider.itemCnt = cnt;
	},
	animeEvent:function(){
		for (var i = 0; i < slider.slideObj.length; i++) {
			//$('.' + slider.slideObj[i]).css('opacity','0');
		}
	},
	timeInterval:function(){

	}
}