const getExpensesTotal = (expenses = []) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((last, value) => last + value, 0);
};

export default getExpensesTotal;
