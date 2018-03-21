import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense, removeExpense, editExpense } from './actions/expenses';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	// console.log(visibleExpenses);
});

const expense1 = store.dispatch(
	addExpense({
		description: 'Water Bill',
		amount: 5000,
		createdAt: 1000
	})
);

const expense2 = store.dispatch(
	addExpense({
		description: 'Gas Bill',
		amount: 2000,
		createdAt: 1100
	})
);

const expense3 = store.dispatch(
	addExpense({
		description: 'Rent',
		amount: 109500,
		createdAt: 1500
	})
);
