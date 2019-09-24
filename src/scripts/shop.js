import { renderProducts, renderCart, renderNavigation } from './renderHelper';

export default class Shop {
	constructor(products, currentPage) {

		this._products = {};
		this.setProductsFromLocalStorage(products);

		this._currentPage	= currentPage;

		this.render();
	}

	render() {
		renderProducts(this.products);
		renderCart(this.products.filter(p => p.inCart), this.totalPrice);
		renderNavigation(this.currentPage);
	}

	setProductsFromLocalStorage(products) {
		let newProducts = {};

		products.forEach(product => {
			newProducts[product.id] = {
				...product,
				count: product.count,
				inCart: product.inCart,
			}
		});

		this._products = newProducts;

		this.render();
	}

	setProductsFromServer(products) {
		const _products = this._products;
		let newProducts = {};

		products.forEach(product => {
			newProducts[product.id] = {
				...product,
				count: _products[product.id] ? _products[product.id].count : 0,
				inCart: _products[product.id] ? _products[product.id].inCart : false,
			}
		});

		this._products = newProducts;

		this.render();
	}

	addProductToCart(id) {
		this._products[id].count = this._products[id].count + 1;
		this._products[id].inCart = true;

		this.render();
	}

	removeProduct(id) {
		this._products[id].count = 0;
		this._products[id].inCart = false;

		this.render();
	}

	get products() {
		return Object.values(this._products);
	}

	get totalPrice() {
		return this.products.filter(p => p.inCart).map(p => p.price * p.count).reduce((a, value) => a + value, 0);
	}

	get currentPage() {
		return this._currentPage;
	}
}
