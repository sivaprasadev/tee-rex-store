import React from 'react';
import MainHeader from './Layout/MainHeader';
import Grid from './Layout/Grid/Grid';
import Sale from './Assets/Img/landing-page-bg-modal3.jpg';
import './Assets/Styles/styles.css';

function App() {
	return (
		<React.Fragment>
			<header>{/* <MainHeader /> */}</header>
			<main>
				<div className='grid-container'>
					<div className='one'></div>
					<div className='two'>
						<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
							<div>
								<img src={Sale} style={{ height: 500 }} />
							</div>
							<div>
								<button>Shop Now</button>
							</div>
						</div>
					</div>
					<div className='three'></div>
					<div>{/* <button>Shop Now</button> */}</div>
				</div>
			</main>

			<footer></footer>

			{/* <Grid /> */}
		</React.Fragment>
	);
}

export default App;
