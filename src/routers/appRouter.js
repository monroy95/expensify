import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// Components
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import addExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Error404 from '../components/Error404';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact />
        <PrivateRoute path="/create" component={addExpensePage} exact />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;