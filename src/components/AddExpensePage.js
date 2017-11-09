import React from 'react';
import { connect } from 'react-redux';

// component
import ExpenseForm from './ExpenseForm';
// action
import { addExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense:</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/'); // Came back for the history
      }}
    />
  </div>
);

export default connect()(AddExpensePage)