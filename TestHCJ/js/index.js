/**
 * カート用JavaScriptファイル
 */
'use strict';

// 税率
const TAX = 1.1;

// プルダウンメニューの取得
const selects = document.querySelectorAll('.select');

selects.forEach(function(item){

	item.onchange = function() {

		// 選択した果物の名前
		const fruitName = this.dataset.fruit;
		// 選択した個数
		const count = this.selectedIndex;
		// 選択した果物の単価
		const fruitPrice = document.getElementById(fruitName + 'Price').textContent;
		// 選択した果物の小計を計算
		const subtotal = Math.floor(fruitPrice * count * TAX);

		// 小計に表示
		document.getElementById(fruitName + 'Subtotal').textContent = subtotal;

		// 合計を表示
		const subtotals = document.getElementsByClassName('subtotal');
		let total = 0;
		for (let item of subtotals) {
			total += parseInt(item.textContent);
		}
		document.getElementById('total').textContent = total;

	}
});

