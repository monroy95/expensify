import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Components
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import addExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Error404 from '../components/Error404';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={addExpensePage} exact />
        <Route path="/edit" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;