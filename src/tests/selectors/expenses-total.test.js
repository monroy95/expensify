import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const zeroExpenses = []
  const result = expensesTotal(zeroExpenses);
  expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const singleExpense = [expenses[0]];
  const result = expensesTotal(singleExpense);
  expect(result).toBe(singleExpense[0].amount);
});

test('Should correctly add un multiples expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(756)
})