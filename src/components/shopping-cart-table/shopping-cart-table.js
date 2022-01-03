import React from "react";

import './shopping-cart-table.css';
import { findAllByDisplayValue } from "@testing-library/react";


const ShoppingCartTable = () => {
	return (
		<>
			<header className='shopping_header'>Your Order</header>
			<div className='shopping_cart_table'>
				<div className='shopping_cart_table_headers'>
					<div className='shopping_cart_table_headers_1'>#</div>
					<div>Item</div>
					<div>Count</div>
					<div>Price</div>
					<div className='shopping_cart_table_headers_action'>Action</div>
				</div>
				<div className='shopping_cart_table_content'>
					<div className='shopping_cart_table_content_1'>1</div>
					<div>Site Reliability Engineering</div>
					<div>2</div>
					<div>$40</div>
					<div className='shopping_cart_buttons'>
						<button className='btn btn-outline-danger'>
							<i className='bi bi-trash' />
						</button>
						<button className='btn btn-outline-success'>
							<i className='bi bi-plus-circle' />
						</button>
						<button className='btn btn-outline-danger btn-s'>
							<i className='i bi-dash-circle' />
						</button>
					</div>
				</div>
			</div>
			<div className='total'>
				Total: $200
			</div>
		</>

		// <div className='shopping_cart_table'>
		// 	<table className='table'>
		// 		<thead>
		// 			<th>#</th>
		// 			<th>Item</th>
		// 			<th>Count</th>
		// 			<th>Price</th>
		// 			<th>Action</th>
		// 		</thead>
		// 		<tbody>
		// 			<tr>
		// 				<td>1</td>
		// 				<td>Site Reliability Engineering</td>
		// 				<td>2</td>
		// 				<td>$40</td>
		// 				<td className='shopping_cart_buttons'>
		// 					<button className='btn btn-outline-danger'>
		// 						<i className='bi bi-trash' />
		// 					</button>
		// 					<button className='btn btn-outline-success'>
		// 						<i className='bi bi-plus-circle' />
		// 					</button>
		// 					<button className='btn btn-outline-danger btn-s'>
		// 						<i className='i bi-dash-circle' />
		// 					</button>
		// 				</td>
		// 			</tr>
		// 		</tbody>
		// 	</table>
		// 	<div className='total'>
		// 		Total: $200
		// 	</div>
		// </div>
	)
}

export default ShoppingCartTable;