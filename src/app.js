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
// React-Dates
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// FirebaseDB
import './firebase/firebase';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));