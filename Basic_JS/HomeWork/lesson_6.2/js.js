'use strict'

const basket = {
	settings: {
		basketCountSelector: '#basket-count',
		basketPriceSelector: '#basket-price',
	},
	goods: [],

	countEl: null,
	priceEl: null,

	init(settings = {}) {
		this.settings = Object.assign(this.settings, settings);
		this.countEl = document.querySelector(this.settings.basketCountSelector);
		this.priceEl = document.querySelector(this.settings.basketPriceSelector);
		this.render();
	},
	add(goodName,goodPrice){
		this.goods.push({name: goodName, price: goodPrice});
		this.render();
	},

	render() {
		this.countEl.textContent = this.goods.length;
		this.priceEl.textContent = this.getGoodsPrice();
	},

	getGoodsPrice() {
		let cost = 0;
		// return this.goods.reduce((prev, current) => prev + current.price, 0);
		for (const good of this.goods) {
			cost += good.price;
		}
		return cost;
		
	},
}
window.onload = () => basket.init();
document.querySelectorAll('.buy-btn').forEach(el => {
	el.addEventListener('click', e => {
		basket.add(e.target.dataset.name, +e.target.dataset.price);
	})
})

