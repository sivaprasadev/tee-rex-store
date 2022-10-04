import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './Components/Landing';
import Products from './Pages/Products';

function App() {
	return (
		<React.Fragment>
			<header></header>
			<main>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='products' element={<Products />} />
				</Routes>
			</main>

			<footer></footer>
		</React.Fragment>
	);
}

export default App;
