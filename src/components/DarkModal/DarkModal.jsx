import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window, Title, Text } from './DarkModal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // закрити при натисненні на модалку
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // закрити по бекдропу
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalClose();
    }
  };

  return createPortal(
    isModalOpen && (
      <Backdrop onClick={handleBackdropClick}>
        <Window onClick={handleModalClose}>
          <Title>
            Hello! To get started, enter the current balance of your account!
          </Title>
          <Text>You can't spend money until you have it :)</Text>
        </Window>
      </Backdrop>
    ),
    modalRoot
  );
}
