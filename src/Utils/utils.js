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

export const filterArray = (targetArray, filters) => {
	let filterKeys = Object.keys(filters);
	let result;

	function filterCatelogue(cat) {
		return filterKeys.every((keys) => {
			if (!filters[keys].length) return true;

			if (keys === 'price') {
				if (filters.price.indexOf('250') !== -1) {
					return cat.price > 0 && cat.price <= 250;
				} else if (filters.price.indexOf('251') !== -1) {
					return cat.price > 250 && cat.price <= 500;
				} else {
					return cat.price > 500 && cat.price <= 1000;
				}
			}

			return filters[keys].includes(cat[keys]);
		});
	}

	result = targetArray.filter(filterCatelogue);
	return result;
};

export const btnStatus = (arr) => {
	let keys = Object.keys(arr);
	let result;

	for (let i = 0; i < keys.length; i++) {
		if (arr[keys[i]].some((i) => i)) {
			result = true;
			return result;
		} else {
			result = false;
		}
	}

	return false;
};

export const filterAttributes = {
	colour: {
		values: ['Red', 'Blue', 'Green']
	},
	gender: {
		values: ['Men', 'Women']
	},
	price: [
		{ value: 0, title: 'Select' },
		{ value: 250, title: '0-250' },
		{ value: 251, title: '251-500' },
		{ value: 1000, title: '501-1000' }
	],
	type: {
		values: ['Polo', 'Hoodie', 'Basic']
	}
};
