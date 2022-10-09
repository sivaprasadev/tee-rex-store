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
