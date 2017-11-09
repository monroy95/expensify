import React from 'react';
import { connect } from 'react-redux';

// Component
import ExpenseForm from './ExpenseForm';
// action
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage  = (props) => {
  return(
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/'); // Came back for the history
        }}
      />
      <button
        onClick={() => { 
            props.dispatch(removeExpense({ id: props.expense.id })) 
            props.history.push('/'); // Came back for the history
          }
        }
      >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);
