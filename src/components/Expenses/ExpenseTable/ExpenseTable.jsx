import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSid, getUserExpenses, getUserIncomes } from 'Redux/kapustaSlice';
import { getExpense, getIncome } from 'Redux/transactionOperation';
import {
  convertExpenseList,
  convertIncomesList,
} from '../convert/convertCategory';

import { DeleteIcon, ExpButton } from '../ExpenseItem/ExpenseItem.styled';
import { Modal } from '../Modal/Modal';
import TransactionDeleteModal from '../Modal/TransactionDeleteModal/TransactionDeleteModal';
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
  const expensesList = useSelector(getUserExpenses);
  const incomeList = useSelector(getUserIncomes);
  const sid = useSelector(getSid);

  const [swohModalDelete, setShowModalDelete] = useState(false);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    if (sid && pathname === '/home/expenses') dispatch(getExpense());

    if (sid && pathname === '/home/income') dispatch(getIncome());
  }, [dispatch, pathname, sid]);

  const onModal = () => {
    setShowModalDelete(true);
    if (swohModalDelete) return setShowModalDelete(false);
  };

  const formatSum = sum => {
    const format = sum.toString().includes('-');
    if (format === false) {
      return '-' + sum;
    }
    return sum;
  };

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
                expensesList?.map(
                  ({ _id, date, description, category, amount }) => (
                    <tr key={_id}>
                      <Td>{date}</Td>
                      <Td>{description}</Td>
                      <Td>{convertExpenseList[category]}</Td>
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
                            onClick={() => {
                              setItemId(_id);
                              onModal();
                            }}
                          >
                            <DeleteIcon />
                          </ExpButton>
                        </div>
                      </Td>
                    </tr>
                  )
                )}
              {pathname === '/home/income' &&
                incomeList?.map(
                  ({ _id, date, description, category, amount }) => (
                    <tr key={_id}>
                      <Td>{date}</Td>
                      <Td>{description}</Td>
                      <Td>{convertIncomesList[category]}</Td>
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
                            onClick={() => {
                              setItemId(_id);
                              onModal();
                            }}
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
      {swohModalDelete && (
        <Modal onClose={onModal}>
          <TransactionDeleteModal id={itemId} onClose={onModal} />
        </Modal>
      )}
    </>
  );
};

export default ExpenseTable;
