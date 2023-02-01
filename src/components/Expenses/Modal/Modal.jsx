import { useEffect } from 'react';

import { Overlay, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useCallback } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </Overlay>
    </>,
    modalRoot
  );
};
