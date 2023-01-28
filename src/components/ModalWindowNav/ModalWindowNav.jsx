import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Modal,
  Wrapper,
  Text,
  ButtonWrapper,
  CloseSvg,
  Backdrop,
} from './ModalWindowNav.styled';
import { SubmitButton } from 'components/Theme/Button/Button';
import close from '../../images/close.svg';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const ModalWindow = ({ children, closeModal, dispatch }) => {
  // Щоб не скролилось
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  // закрити по кнопці
  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };
  // закрити по бекдропу
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <Modal>
        <CloseSvg onClick={closeModal}>
          <img src={close} alt="close" />
        </CloseSvg>

        <Wrapper>
          <Text>{children}</Text>
          <ButtonWrapper>
            <SubmitButton
              type="button"
              dispatch={dispatch}
              closeModal={closeModal}
            >
              Yes
            </SubmitButton>
            <SubmitButton type="button" closeModal={closeModal}>
              No
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
