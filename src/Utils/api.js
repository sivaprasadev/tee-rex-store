let catalogueEndpoint =
	'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

export const fetchData = async () => {
	try {
		const response = await fetch(catalogueEndpoint);
		if (response.status === 200) {
			const data = await response.json();
			return data;
		} else {
			throw new Error('Unable to make http request');
		}
	} catch (err) {
		return err.message;
	}
};
