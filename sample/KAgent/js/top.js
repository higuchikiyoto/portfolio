$(function(){
	// 遷移用
	$('a').on('click', function(){
		location.href="./sample_sub.html";
	});

	// SLICK SLIDER ANIMATION
	$('.slick-slider').slick({
			infinite: true, //スライドをループさせるか
			arrows: false, //前後ボタンの表示
			dots: true, //点の表示
			slidesToShow: 1,
			fade:true,
			lazyLoad: 'ondemand',
			variableWidth: false,
			autoplaySpeed:3000,
			centerMode: true, //要素を中央寄せ
			centerPadding:'0', //両サイドの見えている部分のサイズ
			autoplay:true, //自動再生
	});	
});
// 新着情報量判定（スクロール化）
$(window).on('load resize', function(){
	var InfoHeight = $('.info > table').outerHeight();
	(InfoHeight>300) ? $('.info').css('overflow-y','scroll') : $('.info').css('overflow-y','visible');
	if($(window).scrollTop()==0) $('nav').addClass('scroll');
});
// SCROLL EVENT（windowサイズ)
var startPos = 0;	//スクロール開始地点
var headerHeight = $('header').outerHeight();
$(window).on('scroll', function(){
	var pos = $(this).scrollTop();	// 現在位置の取得
	if (pos > startPos) {
		if($(this).scrollTop() >= headerHeight) $('nav').removeClass('scroll');
	}else{
		($(this).scrollTop() <= headerHeight) ? $('nav').addClass('scroll') : $('nav').addClass('scroll');
	}
	startPos = pos;	//スクロール開始地点の更新
});
$(window).on('resize', function(){
	var h = $(window).scrollTop();
	(h > 0) ? $('nav').removeClass('scroll') : $('nav').addClass('scroll');
	
});
// vue console dev warning remove
Vue.config.devtools = false;
Vue.config.productionTip = false

var top = new Vue({
	el:'header',
	data:{
		menuBtnFlg:false,
	},
	methods:{
		menuBtnClick:function(){
			this.menuBtnFlg = (!this.menuBtnFlg) ? true : false;
		},
	}
});
var news = new Vue({
	el:'#info',
	data:{
		// PHPでjson化予定
		news:[
			{date:'2018/10/27', content:'株式会社KAgent設立'},
			{date:'2018/10/27', content:'SES事業開始'},
			{date:'2018/11/01', content:'IT事務教育事業開始'},
			{date:'2019/06/01', content:'事務所移転'},
			{date:'2018/07/01', content:'フロントエンジニア教育事業開始'},
			{date:'2019/10/01', content:'受託業務開始'},
		],
	},
	methods:{
		sortData:function(data){
			this.news.sort(function(a, b){
				return (a.date < b.date ? -1 : 1);
			});
		},
	},
	mounted(){

	},
})