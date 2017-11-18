import React from 'react';
import { connect } from 'react-redux';

// Component
import ExpenseForm from './ExpenseForm';
// action
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSubmit(expense) {
    // props.dispatch(editExpense(props.expense.id, expense))
    this.props.startEditExpense(this.props.expense.id, expense)
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
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Expense:</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
            className="btn btn--warning"
            onClick={this.onRemove}
          >Remove Expense
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state, props) =>
  ({ expense: state.expenses.find(expense => expense.id === props.match.params.id) });

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});

export { EditExpensePage as EditExpensePageComponent };
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
