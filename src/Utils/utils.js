let arr = [
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
		id: 3,
		name: 'Pink Polo',
		type: 'Polo',
		price: 350,
		currency: 'INR',
		color: 'Pink',
		gender: 'Women',
		quantity: 6
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
	},
	{
		id: 5,
		name: 'Green Polo',
		type: 'Polo',
		price: 250,
		currency: 'INR',
		color: 'Green',
		gender: 'Men',
		quantity: 1
	}
];

function toLower(str) {
	return str && str.toLowerCase();
}

export function search(str) {
	let searchResult;
	let queryStr = str.trim().toLowerCase();
	if (str) {
		searchResult = arr.filter(({ type, name, color }) => {
			let itemType = toLower(type);
			let itemName = toLower(name);
			let itemColor = toLower(color);

			if (queryStr === itemType || queryStr === itemName || queryStr === itemColor) {
				return true;
			} else {
				let split = queryStr.split(' ').reverse().join(' ');
				if (split === itemName) {
					return true;
				}
			}
		});
		return searchResult;
	} else {
		return [];
	}
}

export const filterAttributes = {
	colour: {
		values: ['Red', 'Blue', 'Green']
	},
	gender: {
		values: ['Men', 'Women']
	},
	price: {
		values: ['0-250', '251-450', '450']
	},
	type: {
		values: ['Polo', 'Hoodie', 'Basic']
	}
};


