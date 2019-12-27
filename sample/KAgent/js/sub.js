$(function(){
	// 繊維用
	$('a').on('click', function(){
		location.href="./sample2.html";
	});
	// Background Balls Generate
	balls.init();
	mapSize.init();
});
// BACKGROUND CIRCLE ANIMATION
var balls = {
	maxQuantity:15,		// 生成する円の個数
	quantity:3,
	maxSize:100,	// 最大の大きさ
	minSize:30,		// 最小の大きさ
	ballArray:[],
	frameWidth:0,
	frameHeight:0,
	initWidth:100,
	init:function(){
		balls.events();
	},
	events:function(){
		balls.frameSet();
		balls.resetBalls();
		balls.randQuantity();
		balls.genBalls();
		balls.ballArraySet();
		balls.ballsSet();
		balls.eventListener();
	},
	eventListener:function(){
		$(window).on('resize', function(){
			var w = $(window).width();
			if(w <= balls.initWidth - 150 || w >= balls.initWidth + 150){
				setTimeout(function(){
					balls.events();
				},2000);
				balls.initWidth = w;
			}
		});
	},
	frameSet:function(){
		balls.frameHeight = $('.balls').outerHeight();
		balls.frameWidth = $('.balls').width();
		balls.initWidth = $(window).width();
	},
	resetBalls:function(){
		$('.balls').html('');
		balls.ballArray = [];
	},
	genBalls:function(){
		for (var i = 0; i < balls.quantity; i++) {
			$('.balls').append('<div></div>');
		}
	},
	ballArraySet:function(){
		$('.balls > div').each(function(i,e){
			// 乱数生成
			var size = balls.randSize();
			var top = balls.randHeight(size);
			var left = balls.randWidth(size);
			var opacity = 0.1 * balls.randNum(10,1);
			var animation = balls.randNum(30,3);
			var direction = (i % 2) ? 'normal' : 'reverse';
			// 各要素を連想配列に格納
			var arr = {'top':top, 'left':left, 'width':size, 'height':size, 'opacity': opacity, 'animation': animation + 's rounding linear 0s infinite ' + direction};

			// 配列要素に追加
			balls.ballArray.push(arr);
		});
	},
	ballsSet:function(){
		$('.balls > div').each(function(i,e){
			var thisDiv = $(this);
			$.each( balls.ballArray[i], function( index, value ) {
				thisDiv.css(index,value);
			});
		});
	},
	// 乱数生成関数
	randQuantity:function(){
		var min = (balls.maxQuantity > 5) ? balls.maxQuantity - 2 : 0;
		balls.quantity = balls.randNum(balls.maxQuantity, min);
	},
	randHeight:function(size){
		var radius = size / 2;
		return Math.floor( Math.random() * ((balls.frameHeight + radius) + 1 - (0 - radius) ) ) + (0 - radius);
	},
	randWidth:function(size){
		var radius = size / 2;
		return Math.floor( Math.random() * ((balls.frameWidth + radius) + 1 - (0 - radius) ) ) + (0 - radius);
	},
	randSize:function(){
		return Math.floor( Math.random() * (balls.maxSize + 1 - balls.minSize) ) + balls.minSize;
	},
	randNum:function(max, min){
		return Math.floor( Math.random() * (max + 1 - min) ) + min;
	},
}
// MAP SIZE ADJUST
var mapSize = {
	ratio:0.6,
	width:1000,
	initWidth:100,
	init:function(){
		mapSize.events();
	},
	events:function(){
		mapSize.initSet();
		mapSize.mapResize();
		mapSize.wresizes();
	},
	wresizes:function(){
		$(window).on('resize', function(){
			var w = $(window).width();
			if(w <= mapSize.initWidth - 150 || w >= mapSize.initWidth + 150){
				setTimeout(function(){
					mapSize.events();
				},1000);
				mapSize.initWidth = w;
			}
		});
	},
	initSet:function(){
		mapSize.width = $('.map').width();
	},
	mapResize:function(){
		var height = mapSize.width * mapSize.ratio;
		$('.map').css('height', height);
	},
}
// MENU
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
	(h > 175) ? $('nav').removeClass('scroll') : $('nav').addClass('scroll');
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