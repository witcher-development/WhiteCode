import { renderProducts, renderCart, renderNavigation } from './renderHelper';

export default class Shop {
	constructor(cartProducts, currentPage, sortBy) {

		this._currentPageProducts = {};
		this._cartProducts = {};
		this.setCartProducts(cartProducts);

		this._currentPage	= currentPage;
		this._pageCount = 0;

		this._sortBy = sortBy;

		this.render();
	}

	render() {
		renderProducts(this.currentPageProducts);
		renderCart(this.cartProducts, this.totalPrice);
	}

	setCartProducts(products) {
		let cartProducts = {};

		products.forEach((product) => {
			cartProducts[product.id] = product;
		});

		this._cartProducts = cartProducts;
	}

	setCurrentPageProducts(products) {
		const _cartProducts = this._cartProducts;
		let newProducts = {};

		products.forEach(product => {
			newProducts[product.id] = {
				...product,
				count: _cartProducts[product.id] ? _cartProducts[product.id].count : 0,
			}
		});

		this._currentPageProducts = newProducts;

		console.log(newProducts);

		this.render();
	}

	addProductToCart(id) {
		this._currentPageProducts[id].count++;
		this._cartProducts[id] = this._currentPageProducts[id];

		this.render();
	}

	removeProduct(id) {
		delete this._cartProducts[id];

		if (this._currentPageProducts[id]) {
			this._currentPageProducts[id].count = 0;
		}

		this.render();
	}

	sortBy(type) {
		this._sortBy = type;
		this.render();
	}

	get currentPageProducts() {
		const type = this._sortBy;
		let products = Object.values(this._currentPageProducts);

		switch (type) {
			case 'name': {
				products.sort((a, b) => (a.title > b.title) ? 1 : -1);
				return products;
			}
			case 'price': {
				products.sort((a, b) => (a.price > b.price) ? 1 : -1);
				return products;
			}
			case 'available': {
				products.sort((a, b) => b.available - a.available);
				return products;
			}
			default: {
				return products;
			}
		}
	}

	get cartProducts() {
		return Object.values(this._cartProducts);
	}

	get totalPrice() {
		return this.cartProducts.map(p => p.price * p.count).reduce((a, value) => a + value, 0);
	}

	get currentPage() {
		return this._currentPage;
	}

	set currentPage(value) {
		this._currentPage = value;

		renderNavigation(this.currentPage, this.pageCount);
	}

	get pageCount() {
		return this._pageCount;
	}

	set pageCount(value) {
		this._pageCount = value;

		renderNavigation(this.currentPage, this.pageCount);
	}
}
