import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

import './header.css';

const Header = () => {
	const location = useLocation();

	const linkNames = [
		{ name: 'people', url: '/people/' },
		{ name: 'planets', url: '/planets/' },
		{ name: 'starships', url: '/starships/' },
	];

	const renderLinks = () => {
		return linkNames.map(({ name, url }) => {
			let regexp = new RegExp(`/${name}/`);
			let isActiveStyle = '';
			const activeUrl = location.pathname.match(regexp);

			if (activeUrl) isActiveStyle = 'active';

			return (
				<Nav.Link as={Link} key={name} to={url} className={isActiveStyle}>
					{name}
				</Nav.Link>
			);
		});
	};

	return (
		<Navbar collapseOnSelect expand='lg' className='header navbar-dark'>
			<Navbar.Brand as={Link} to='/' className='logo'>
				StarDB
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls='responsive-navbar-nav'
				className='navbar-dark'
			/>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav activeKey={location.pathname}>{renderLinks()}</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
