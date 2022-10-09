const filterArr = [
	{
		id: 1,
		name: 'Black Polo',
		type: 'Polo',
		price: 250,
		currency: 'INR',
		color: 'Black',
		gender: 'Men',
		quantity: 3
	},
	{
		id: 2,
		name: 'Blue Polo',
		type: 'Polo',
		price: 350,
		currency: 'INR',
		color: 'Blue',
		gender: 'Women',
		quantity: 3
	},
	{
		id: 4,
		name: 'Black Hoodie',
		type: 'Hoodie',
		price: 500,
		currency: 'INR',
		color: 'Black',
		gender: 'Men',
		quantity: 2
	}
];

let filterForm = [
	{
		type: {
			Polo: true,
			Hoodie: true
		},
		color: {
			Red: false,
			Green: false,
			Black: true,
			Blue: false
		}
	}
];

console.log(
	filterArr.filter((i) => {
		if (filterForm[0].type[i.type] && filterForm[0].color[i.color]) {
			return true;
		}
	})
);
