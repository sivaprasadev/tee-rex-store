function toLower(str) {
	return str && str.toLowerCase();
}

export function search(str, arr) {
	let searchResult;
	let queryStr = str.trim().toLowerCase();
	if (str) {
		searchResult = arr.filter(({ type, name, color }) => {
			let itemType = toLower(type);
			let itemName = toLower(name);
			let itemColor = toLower(color);

			if (itemType.includes(queryStr) || itemName.includes(queryStr) || itemColor.includes(queryStr)) {
				return true;
			} else {
				let split = queryStr.split(' ').reverse().join(' ');
				if (split.includes(itemName)) {
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

