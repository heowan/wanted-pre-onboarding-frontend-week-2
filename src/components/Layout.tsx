import React from 'react';
import Header from './Header';

function Layout(props: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<main>{props.children}</main>
		</div>
	);
}

export default Layout;
