import React, { useState } from 'react';
import { convertExpenseList } from '../convert/convertCategory';
import { Modal } from '../Modal/Modal';
import TransactionDeleteModal from '../Modal/TransactionDeleteModal/TransactionDeleteModal';

import {
  ExpItem,
  ExpDesription,
  ExpDate,
  ExpSum,
  ExpButton,
  DeleteIcon,
  Wrapper,
} from './ExpenseItem.styled';

const ExpenseItem = ({ _id, description, date, category, amount }) => {
  const [swohModalDelete, setShowModalDelete] = useState(false);

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
      <ExpItem>
        <div>
          <ExpDesription>{description}</ExpDesription>
          <Wrapper>
            <ExpDate>{date}</ExpDate>
            <ExpDate>{convertExpenseList[category]}</ExpDate>
          </Wrapper>
        </div>
        <Wrapper>
          <ExpSum>{formatSum(amount)}</ExpSum>

          <ExpButton type="button" onClick={onModal}>
            <DeleteIcon />
          </ExpButton>
        </Wrapper>
      </ExpItem>
      {swohModalDelete && (
        <Modal onClose={onModal}>
          <TransactionDeleteModal id={_id} onClose={onModal} />
        </Modal>
      )}
    </>
  );
};

export default ExpenseItem;
