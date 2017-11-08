import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/appRouter';
// Store from redux
import configureStore from './store/configureStore';
// Styles 
import 'normalize.css/normalize.css'; // normalizing styles for all browsers
import './styles/style.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// addExpense --> Water Bill
// addExpense --> Gas Bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 100 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200 }));
// setTextFilter --> Bill
store.dispatch(setTextFilter('water'));
// getVisibleExpenses --> print visible ones to screen
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'));