import { catelogue } from './catelogue.mjs';

const filterData = {
	type: [],
	color: ['Red'],
	gender: [],
	price: ['']
};

function filterArray(targetArray, filters) {
	let filterKeys = Object.keys(filters);
	let result;

	function filterCatelogue(cat) {
		return filterKeys.every((keys) => {
			if (!filters[keys].length) return true;

			if (keys === 'price') {
				if (filters.price.indexOf(250) !== -1) {
					return cat.price > 0 && cat.price <= 250;
				} else if (filters.price.indexOf(251) !== -1) {
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
}

// console.log('filterArray:', filterArray(catelogue, filterData));

let productTypes = catelogue.map(({ type }) => type).filter((i, index, arr) => arr.indexOf(i) === index);
let productColor = catelogue.map(({ color }) => color).filter((i, index, arr) => arr.indexOf(i) === index);
console.log(productTypes);
console.log(productColor);
