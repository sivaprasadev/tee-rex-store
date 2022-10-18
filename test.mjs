import { catelogue } from './catelogue.mjs';

const filterData = {
	type: ['Polo', 'Hoodie', 'Basic'],
	color: ['Red'],
	gender: ['Men', 'Women'],
	price: [250]
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

// console.log(keys);

const sampleData = {
	type: ['Polo', 'Hoodie'],
	color: ['Red', 'Blue'],
	gender: ['Men'],
	price: ['250']
};

const filterArr = {
	color: [false, false, false],
	gender: [false, false],
	price: [false, false, false],
	type: [false, false, false]
};

function a(arr) {
	let result = arr.some((i) => true);
	return result;
}

// console.log(a([false, false, false]));

console.log(
	filterArr.color.some((i) => i === true) ||
		filterArr.gender.some((i) => i === true) ||
		filterArr.price.some((i) => i === true) ||
		filterArr.type.some((i) => i === true)
);
