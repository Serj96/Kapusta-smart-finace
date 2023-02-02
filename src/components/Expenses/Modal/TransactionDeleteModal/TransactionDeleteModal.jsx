import React from 'react';
import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';

import { deleteTransaction } from 'Redux/transactionOperation';
import {
  TransactionCloseModalBtn,
  TransactionDeleteBtn,
  TransactionDeleteBtnWrapper,
  TransactionDeleteModalText,
  TransactionDeleteModalWrapper,
} from './TransactionDeleteModal.styled';

const TransactionDeleteModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  return (
    <TransactionDeleteModalWrapper>
      <TransactionDeleteModalText>Are you sure?</TransactionDeleteModalText>
      <TransactionDeleteBtnWrapper>
        <TransactionDeleteBtn
          onClick={() =>
            dispatch(deleteTransaction(id))
              .unwrap()
              .then(() => onClose())
          }
        >
          Yes
        </TransactionDeleteBtn>
        <TransactionDeleteBtn onClick={onClose}>No</TransactionDeleteBtn>
      </TransactionDeleteBtnWrapper>
      <TransactionCloseModalBtn onClick={onClose} type="button">
        <ImCross size={'12px'} color="#52555F" />
      </TransactionCloseModalBtn>
    </TransactionDeleteModalWrapper>
  );
};

export default TransactionDeleteModal;
