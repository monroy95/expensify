import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 100,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Choco Bar',
    note: '',
    amount: 200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Clothing',
    note: '',
    amount: 456,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

export default expenses;