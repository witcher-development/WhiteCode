import '../styles/index.scss';

import Shop from './shop';
import getData from './API';

const initShop = (async () => {
	const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
	const currentPage = localStorage.getItem('currentPage') || 1;
	const sortBy = localStorage.getItem('sortBy') || false;

	const shop = new Shop(cartProducts, currentPage, sortBy);

	const { products, pageCount } = await getData(currentPage);
	shop.setCurrentPageProducts(products);
	shop.pageCount = pageCount;

	handleUserActions(shop);

})();

const handleUserActions = (shop) => {
	document.addEventListener('click', (event) => {

		const target = event.target;

		if (target.classList.contains('product__button')) { // add to cart
			const id = target.getAttribute('data-product-id');

			shop.addProductToCart(id);

			const products = shop.cartProducts;
			localStorage.setItem('cartProducts', JSON.stringify(products));

		} else if (target.classList.contains('sidebar__item-remove')) { // remove from cart
			const id = target.getAttribute('data-product-id');

			shop.removeProduct(id);

			const products = shop.cartProducts;
			localStorage.setItem('cartProducts', JSON.stringify(products));
		} else if (target.classList.contains('nav__item')) {
			const page = target.getAttribute('data-page');

			getData(page).then(({ products, pageCount }) => {
				shop.setCurrentPageProducts(products);
				shop.pageCount = pageCount;
				shop.currentPage = page;

				localStorage.setItem('currentPage', page);
			});
		} else if (target.classList.contains('sort__item')) {
			const type = target.getAttribute('data-sort');

			shop.sortBy(type);
			localStorage.setItem('sortBy', type);
		}
	});
};
