import '../styles/index.scss';

import Shop from './shop';
import getData from './API';

const initShop = (async () => {
	const products = JSON.parse(localStorage.getItem('products')) || [];
	const currentPage = localStorage.getItem('currentPage') || 0;

	const shop = new Shop(products, currentPage);

	const data = await getData();
	shop.setProductsFromServer(data);

	handleUserActions(shop);

})();

const handleUserActions = (shop) => {
	document.addEventListener('click', (event) => {

		const target = event.target;

		if (target.classList.contains('product__button')) { // add to cart
			const id = target.getAttribute('data-product-id');

			shop.addProductToCart(id);

			const products = shop.products;
			localStorage.setItem('products', JSON.stringify(products));

		} else if (target.classList.contains('sidebar__item-remove')) { // remove from cart
			const id = target.getAttribute('data-product-id');

			shop.removeProduct(id);

			const products = shop.products;
			localStorage.setItem('products', JSON.stringify(products));
		}
	});
};
