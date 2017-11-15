import React from 'react';
import { connect } from 'react-redux';

// Component
import ExpenseForm from './ExpenseForm';
// action
import { editExpense, removeExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSubmit(expense) {
    // props.dispatch(editExpense(props.expense.id, expense))
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/'); // Came back for the history
  }

  onRemove() {
    // props.dispatch(removeExpense({ id: props.expense.id }))
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/'); // Came back for the history
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >Remove</button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
