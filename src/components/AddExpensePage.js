import React from 'react';
import { connect } from 'react-redux';

// component
import ExpenseForm from './ExpenseForm';
// action
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense:</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ onSubmit: (expese) => dispatch(addExpense(expense)) })

export default connect(undefined, mapDispatchToProps)(AddExpensePage)