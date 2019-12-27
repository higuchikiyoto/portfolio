// console dev warning remove
Vue.config.devtools = false;
Vue.config.productionTip = false

// vue.js アニメーション処理
var fadeAni = new Vue({
	el:'main',
	data:{
		slides:[
			{'image':'img1.png','access':'#top','comment':'株式会社KAgent','linkMessage':'ABOUT KAgent','linkAct':false},
			{'image':'img6.png','access':'#about','comment':'KAgent Corporate Identity','linkMessage':'会社概要','linkAct':true},
			{'image':'img3.png','access':'#works','comment':'MISSION','linkMessage':'経営理念','linkAct':true},
			{'image':'img4.png','access':'#contact','comment':'業務内容','linkMessage':'Our Works','linkAct':true},
			{'image':'img5.png','access':'#qa','comment':'default5','linkMessage':'link message','linkAct':true},
			{'image':'img2.png','access':'#qa','comment':'default6666662','linkMessage':'link 22222','linkAct':true},
		],
		isActive:true,
		slideObj:null,
		counter:0,
		slideTime:4000,
	},
	methods:{
		start(){
		},
		slideAnime(){
			this.counter++;
			this.chkNum();
		},
		chkNum(){
			this.counter = (this.counter > this.slides.length - 1) ? 0 : this.counter++;
		},
		default(){
		},
	},
	mounted(){
		// 常時実行処理
		var self = this;
		this.default();
		this.slideObj = setInterval(function(){self.slideAnime()}, this.slideTime);
	}
})

var menu = new Vue({
	el:'nav',
	data:{
		menuList:[
			{'disp':'TOP','over':'トップ'},
			{'disp':'ABOUT_US','over':'会社概要'},
			{'disp':'MISSION','over':'経営理念'},
			{'disp':'WORKS','over':'業務内容'},
			{'disp':'CONTACT','over':'問い合わせ'},
			{'disp':'Q/A','over':'よくある質問'},
		],
		menu:[],
	},
	methods:{
		menuOver(item){
		},
	},
	mounted(){
		for (var i = 0; i < this.menuList.length; i++) {
			this.menu.push(this.menuList[i].disp);
		}
	},
})