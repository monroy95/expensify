import React from 'react'
import { connect } from 'react-redux';

// Component
import ExpenseListItem from './ExpenseListItem';

// Selector
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div className="container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (<div className="list-item list-item--empty"><span>No Expenses</span></div>) : (props.expenses.map((expense, index) =><ExpenseListItem key={index} {...expense} />))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => (
  {
    expenses: selectExpenses(state.expenses, state.filters),
  }
);

export { ExpenseList as ExpenseListComponent };

export default connect(mapStateToProps)(ExpenseList);
