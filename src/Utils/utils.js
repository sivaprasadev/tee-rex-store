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
		data: { prices: [250, 251, 1000], content: { 0: '0-250', 1: '251-500', 2: '500-1000' } }
	},
	type: {
		values: ['Polo', 'Hoodie', 'Basic']
	}
};
