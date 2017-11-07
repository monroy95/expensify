import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/appRouter';
// Styles 
import 'normalize.css/normalize.css'; // normalizing styles for all browsers
import './styles/style.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));