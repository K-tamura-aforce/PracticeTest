//連想配列5つのデータを格納
var items = [
	{ name: 'りんご', price: 100, count: 3 },
	{ name: 'ぶどう', price: 200, count: 1 },
	{ name: 'ばなな', price: 100, count: 1 },
	{ name: 'いちご', price: 200, count: 2 },
	{ name: 'みかん', price: 300, count: 3 },
];

//関数の呼び出し
higherPrice(250);

//higherPrice関数(引数に設定した値より、小計が高額になる商品を出力する)
function higherPrice(targetPrice) {
	for (var i = 0; i < items.length; i++) {
		if (items[i].price * items[i].count > targetPrice) {
			console.log(items[i].name);
		}
	}

}
