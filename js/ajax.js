$(function(){
	var outTitle = [];　//タイトル格納用
	var outContent = [];　//内容格納用
	var outDate = [];　//日付格納用


	//Ajax
	$.getJSON('http://localhost/github/wordpress/wp-json/wp/v2/posts',{
		format:"json"
	})

	//実行完了時
	.done(function(data){
		for (var i = 0; i < data.length; i++) {
			//console.log(data[i].title.rendered); //タイトル
			outTitle.push(data[i].title.rendered);

			//内容部分
			var content = data[i].content.rendered.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
			content = content.replace(/\s+/g,'');
			//console.log(content);
			outContent.push(content);

			//日付部分
			//console.log(data[i].date);
			//console.log(dataAdjust(data[i].date));  //整形　日付データ
			outDate.push(dataAdjust(data[i].date));
		}
		console.log(outTitle);
		console.log(outContent);
		console.log(outDate);
		
	})

	//実行失敗時
	.fail(function(){
		alert('通信状況にエラーが生じしました。通信環境をご確認の上再度ロードする。');
		return;
	})

	function dataAdjust(date){
		var adjustDate = date.split('T');
		//console.log(adjustDate);
		var dateData = adjustDate[0];
		//console.log(dateData);
		var data =  dateData.split('-');
		//console.log(data);
		var formatData = data[0] + '年' + data[1] + '月' + data[2] + '日';
		//console.log(formatData);
		return formatData;
	}



})
