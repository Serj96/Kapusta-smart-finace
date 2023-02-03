import React, { useState } from 'react';
import { useEffect } from 'react';
import { Window, Title, Text } from './DarkModal.styled';

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // закрити при натисненні на модалку
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.querySelector('body').addEventListener('click', handleModalClose);

    return () =>
      document
        .querySelector('body')
        .removeEventListener('click', handleModalClose);
  }, []);

  return (
    isModalOpen && (
      <Window onClick={handleModalClose}>
        <Title>
          Hello! To get started, enter the current balance of your account!
        </Title>
        <Text>You can't spend money until you have it :)</Text>
      </Window>
    )
  );
}
