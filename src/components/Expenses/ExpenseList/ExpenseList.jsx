import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSid, getUserExpenses, getUserIncomes } from 'Redux/kapustaSlice';
import { getExpense, getIncome } from 'Redux/transactionOperation';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import { ExpList } from './ExpenseList.styled';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expensesList = useSelector(getUserExpenses);
  const incomeList = useSelector(getUserIncomes);
  const sid = useSelector(getSid);

  const transactionList = [...expensesList, ...incomeList];

  useEffect(() => {
    if (sid) {
      dispatch(getExpense());
      dispatch(getIncome());
    }
  }, [dispatch, sid]);

  return (
    <>
      <ExpList>
        {transactionList?.map(item => (
          <ExpenseItem key={item._id} {...item} />
        ))}
      </ExpList>
    </>
  );
};

export default ExpenseList;
