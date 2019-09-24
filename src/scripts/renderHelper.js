const getProductTemplate = (product) => `
	<li class="products-list__item product">
		<div class="product__img">
			<img src="${product.image}" alt="chair">
		</div>
		<div class="product__body">
			<div class="product__body_left">
				<h3 class="product__title">${product.title}</h3>
				<p class="product__price">${product.price}$</p>
				<div class="product__description">${product.descr}</div>
			</div>
			<div class="product__body_right">
				<button class="product__button" data-product-id="${product.id}">Add to cart</button>
				<p class="product__counter">
					Added: 
					<span class="product__counter-count">${product.count}</span>
				</p>
			</div>
		</div>
	</li>	
`;

const getEmptyProductTemplate = () => `
	<li class="products-list__item product">
		There is no products yet!
	</li>	
`;

export const renderProducts = (products) => {

	const listElement = document.querySelector('.products-list');

	if (products.length) {
		const productsTemplate = products.map(product => getProductTemplate(product));
		listElement.innerHTML = productsTemplate.join('');
	} else {
		const emptyProductsTemplate = getEmptyProductTemplate();
		listElement.innerHTML = emptyProductsTemplate;
	}
};

const getSidebarProductTemplate = (product) => `
	<li class="sidebar__item">
		<div class="sidebar__item_left">
			<img src="${product.image}" alt="Chair" class="sidebar__item-img">
		</div>
		<div class="sidebar__item_right">
			<h4 class="sidebar__item-title">${product.title}</h4>
			<p class="sidebar__item-counter">x${product.count}</p>
		</div>
		<div class="sidebar__item-remove" data-product-id="${product.id}"></div>
	</li>
`;

const getEmptySidebarProductTemplate = () => `
	<li class="sidebar__item">
		Add to cart something first!
	</li>
`;

export const renderSidebarProducts = (products) => {
	const listElement = document.querySelector('.sidebar__list');

	if (products.length) {
		const sidebarProductTemplate = products.map(product => getSidebarProductTemplate(product));
		listElement.innerHTML = sidebarProductTemplate;
	} else {
		const emptySidebarProductTemplate = getEmptySidebarProductTemplate();
		listElement.innerHTML = emptySidebarProductTemplate;
	}
};

export const renderCart = (products, totalPrice) => {
	renderSidebarProducts(products);

	document.querySelector('.sidebar__price').innerHTML = totalPrice + '$';
};

export const renderNavigation = (currentPage) => {
	document.querySelector('.nav__item').innerHTML = currentPage + 1;
};
