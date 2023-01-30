import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import { ExpList } from './ExpenseList.styled';

const qwe = [
  {
    id: 1,
    description: 'Undeground',
    date: '21.11.2019',
    Category: 'Transport',
    sum: '- 30.00 UAH.',
  },
  {
    id: 2,
    description: 'Bananas',
    date: '21.11.2019',
    Category: 'Products',
    sum: '- 50.00 UAH.',
  },
];

const ExpenseList = () => {
  return (
    <>
      <ExpList>
        {qwe?.map(item => (
          <ExpenseItem key={item.id} {...item} />
        ))}
      </ExpList>
    </>
  );
};

export default ExpenseList;
