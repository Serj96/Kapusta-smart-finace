import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSid, getUserExpenses, getUserIncomes } from 'Redux/kapustaSlice';
import {
  deleteTransaction,
  getExpense,
  getIncome,
} from 'Redux/transactionOperation';

import { DeleteIcon, ExpButton } from '../ExpenseItem/ExpenseItem.styled';
import {
  Table,
  TableC,
  TableH,
  TableWrapper,
  Td,
  Th,
} from './ExpenseTable.styled';

const ExpenseTable = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const ExpensesList = useSelector(getUserExpenses);
  const IncomeList = useSelector(getUserIncomes);
  const sid = useSelector(getSid);

  useEffect(() => {
    if (sid && pathname === '/home/expenses') dispatch(getExpense());

    if (sid && pathname === '/home/income') dispatch(getIncome());
  }, [dispatch, pathname, sid]);

  const formatSum = sum => {
    const format = sum.toString().includes('-');
    if (format === false) {
      return '-' + sum;
    }
    return sum;
  };

  // formatSum(30);

  return (
    <>
      <TableWrapper>
        <TableH>
          <Table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <Th>DAte</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>Sum</Th>
              </tr>
            </thead>
          </Table>
        </TableH>
        <TableC>
          <Table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {pathname === '/home/expenses' &&
                ExpensesList?.map(
                  ({ _id, date, description, category, amount }) => (
                    <tr key={_id}>
                      <Td>{date}</Td>
                      <Td>{description}</Td>
                      <Td>{category}</Td>
                      <Td path={pathname}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          {formatSum(amount)}
                          <ExpButton
                            type="button"
                            onClick={() => dispatch(deleteTransaction(_id))}
                          >
                            <DeleteIcon />
                          </ExpButton>
                        </div>
                      </Td>
                    </tr>
                  )
                )}
              {pathname === '/home/income' &&
                IncomeList?.map(
                  ({ _id, date, description, category, amount }) => (
                    <tr key={_id}>
                      <Td>{date}</Td>
                      <Td>{description}</Td>
                      <Td>{category}</Td>
                      <Td path={pathname}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          {amount}
                          <ExpButton
                            type="button"
                            onClick={() => dispatch(deleteTransaction(_id))}
                          >
                            <DeleteIcon />
                          </ExpButton>
                        </div>
                      </Td>
                    </tr>
                  )
                )}
            </tbody>
          </Table>
        </TableC>
      </TableWrapper>
    </>
  );
};

export default ExpenseTable;
