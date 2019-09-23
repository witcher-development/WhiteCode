import { renderProducts, renderSidebarProducts, renderCart } from './renderHelper';

export default class Shop {
	constructor(page) {

		this.products = [];
		this.page	= page;
		this.cart = {
			products: {},
			result: 0,
		};

		this.init();
	}

	init() {
		this._products = [];
		this._cart = {
			products: {},
			result: 0,
		};
		renderProducts([]);
		renderSidebarProducts([]);
	}

	set cart(products) {

		if (products.products !== undefined && products.result !== undefined) return;

		const cart = {
			products: {},
			result: 0,
		};

		products.forEach(product => {
			if (Object.keys(cart.products).indexOf(product.id) > -1) {
				cart.products[product.id].count++;
			} else {
				const newProduct = {
					...product,
					count: 1,
				};
				cart.products[product.id] = newProduct
			}
		});

		console.log(cart);

		this._cart = cart;
		renderCart(cart);

	}

	get products() {
		return this._products;
	}

	set products(products) {
		this._products = products;
		renderProducts(products);
	}

	get currentPage() {
		return this.page;
	}
}
