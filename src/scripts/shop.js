import { renderProducts, renderCart, renderNavigation } from './renderHelper';

export default class Shop {
	constructor(cartProducts, currentPage) {

		this._currentPageProducts = {};
		this._cartProducts = cartProducts;

		this._currentPage	= currentPage;

		this.render();
	}

	render() {
		renderProducts(this.currentPageProducts);
		renderCart(this.cartProducts, this.totalPrice);
		renderNavigation(this.currentPage);
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

		this.render();
	}

	addProductToCart(id) {
		this._currentPageProducts[id].count++;
		this._cartProducts[id].count++;

		this.render();
	}

	removeProduct(id) {
		this._products[id].count = 0;
		this._products[id].inCart = false;

		this.render();
	}

	get currentPageProducts() {
		return Object.values(this._currentPageProducts);
	}

	get cartProducts() {
		return Object.values(this._cartProducts);
	}

	get totalPrice() {
		return this.currentPageProducts.map(p => p.price * p.count).reduce((a, value) => a + value, 0);
	}

	get currentPage() {
		return this._currentPage;
	}
}
