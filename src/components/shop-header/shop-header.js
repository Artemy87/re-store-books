import React from 'react';
import {NavLink} from "react-router-dom";

import './shop-header.css';


const ShopHeader = ({ numItems, total }) => {
	return (
		<header className='shop_header'>
			<NavLink to='/' className='logo text-dark'>ReStore</NavLink>
			<NavLink to='/cart' className='shopping-cart'>
				<i className='cart-icon bi bi-cart3' />
				{numItems} items (${total})
			</NavLink>
		</header>
	)
}

export default ShopHeader;