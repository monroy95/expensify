import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, total }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">Viewing <span>{ expensesCount }</span> totalling <span>{ numeral(total / 100).format('$0,0.00')  }</span> </h1> 
        <div className="page-header__actions">
          <Link to="/create" className="btn">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    total: expensesTotal(visibleExpenses)
  }
}



export default connect(mapStateToProps)(ExpensesSummary)