import React, { useState } from 'react';
import { convertIncomesList } from '../convert/convertCategory';
import { Modal } from '../Modal/Modal';
import TransactionDeleteModal from '../Modal/TransactionDeleteModal/TransactionDeleteModal';

import {
  ExpItem,
  ExpDesription,
  ExpDate,
  ExpButton,
  DeleteIcon,
  Wrapper,
  IncSum,
} from './ExpenseItem.styled';

const IncomeItem = ({ _id, description, date, category, amount }) => {
  const [swohModalDelete, setShowModalDelete] = useState(false);

  const onModal = () => {
    setShowModalDelete(true);
    if (swohModalDelete) return setShowModalDelete(false);
  };

  return (
    <>
      <ExpItem>
        <div>
          <ExpDesription>{description}</ExpDesription>
          <Wrapper>
            <ExpDate>{date}</ExpDate>
            <ExpDate>{convertIncomesList[category]}</ExpDate>
          </Wrapper>
        </div>
        <Wrapper>
          <IncSum>{amount}</IncSum>

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

export default IncomeItem;
