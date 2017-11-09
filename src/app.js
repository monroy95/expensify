import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
store.dispatch(addExpense({ description: 'Water Bill', amount: 2100 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 9900 }));

// getVisibleExpenses --> print visible ones to screen
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));