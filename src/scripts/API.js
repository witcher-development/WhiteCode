const data = [
	{
		id: 1,
		title: 'Стул 1',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 200,
		available: false
	},
	{
		id: 2,
		title: 'Стул 2',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 100,
		available: true
	},
	{
		id: 3,
		title: 'Стул 3',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 300,
		available: true
	},
	{
		id: 4,
		title: 'Стул 4',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 441,
		available: true
	},
	{
		id: 5,
		title: 'Стул 5',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 150,
		available: false
	},
	{
		id: 6,
		title: 'Стул 6',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 217,
		available: false
	},
	{
		id: 7,
		title: 'Стул 7',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 150,
		available: true
	},
];

export default (page) => {
	return new Promise(resolve => {
		setTimeout(() => {

			const response = {
				pageCount: 3,
				products: data.slice((page - 1) * 3, page * 3),
			};

			resolve(response);
		}, 1000);
	})
};
