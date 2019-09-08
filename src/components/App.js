import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const App = ({ children }) => (
	<div className={'App'}>
		<Navbar
			color={'light'}
			light
		>
			<NavbarBrand href={'/'}>{'Star Wars Client'}</NavbarBrand>
		</Navbar>

		<Container className={'pt-5'}>
			{children}
		</Container>
	</div>
);

export default App;
