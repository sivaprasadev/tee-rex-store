import React from 'react';
import '../Assets/Styles/Search.css';

const Search = ({ onChange, value }) => {
	return (
		<input
			value={value}
			type='text'
			name='search-box'
			placeholder='Search...'
			className='search--box'
			onChange={onChange}
		/>
	);
};

export default Search;
