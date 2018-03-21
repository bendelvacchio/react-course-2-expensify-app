import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<p>
			<Link to={`/edit/${id}`}>{description}, </Link>
			{createdAt}, {amount}
		</p>
	</div>
);

export default ExpenseListItem;
