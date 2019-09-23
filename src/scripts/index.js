import '../styles/index.scss';

import Shop from './shop';
import getData from './API';

const drawShop = async () => {
	const lastPage = localStorage.getItem('shopPage') || 0;

	const data = await getData();

	const shop = new Shop(lastPage);

	shop.products = data;
	shop.cart = data;

	// console.log(getProductTemplate(data[0]));

	return;
};

drawShop();
