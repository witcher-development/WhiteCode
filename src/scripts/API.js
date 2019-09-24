const data = [
	{
		id: 1,
		title: 'Стул 1',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 200,
		available: true
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
		price: 200,
		available: true
	},
	{
		id: 5,
		title: 'Стул 5',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 100,
		available: true
	},
	{
		id: 6,
		title: 'Стул 6',
		image: 'https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg',
		descr: 'Супер стул',
		price: 300,
		available: true
	},
];

export default (page) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(data.slice((page - 1) * 3, page * 3));
		}, 1000);
	})
};
