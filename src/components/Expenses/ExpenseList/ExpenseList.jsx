import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSid, getUserExpenses, getUserIncomes } from 'Redux/kapustaSlice';
import { getExpense, getIncome } from 'Redux/transactionOperation';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import IncomeItem from '../ExpenseItem/IncomeItem';

import { ExpList } from './ExpenseList.styled';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expensesList = useSelector(getUserExpenses);
  const incomeList = useSelector(getUserIncomes);
  const sid = useSelector(getSid);

  useEffect(() => {
    if (sid) {
      dispatch(getExpense());
      dispatch(getIncome());
    }
  }, [dispatch, sid]);

  return (
    <>
      <ExpList>
        {expensesList?.map(item => (
          <ExpenseItem key={item._id} {...item} />
        ))}
        {incomeList?.map(item => (
          <IncomeItem key={item._id} {...item} />
        ))}
      </ExpList>
    </>
  );
};

export default ExpenseList;
