import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
  return (
    <div>
      <h1>{description}</h1>
      <p><strong>{amount}</strong> - {createdAt}</p>
      <button
        onClick={() => { dispatch(removeExpense({ id })) }}
      >Remove</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseListItem)