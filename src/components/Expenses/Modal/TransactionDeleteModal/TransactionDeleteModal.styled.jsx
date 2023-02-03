import styled from '@emotion/styled';

export const TransactionDeleteModalWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 380px;
  height: 194px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;

  @media screen and (max-width: 767.98px) {
    width: 280px;
  }
`;

export const TransactionDeleteModalText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  color: #52555f;
`;

export const TransactionCloseModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const TransactionDeleteBtnWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 767.98px) {
    flex-direction: column;
  }
`;

export const TransactionDeleteBtn = styled.button`
  padding: 12px 34px;
  width: 125px;
  height: 44px;
  border: 2px solid #f5f6fb;
  border-radius: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;

  color: ${props => (props.color === 'submit' ? '#fff' : '#52555F')};
  background-color: ${props =>
    props.color === 'submit' ? '#FF751D' : 'transparent'};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: transparent;
    color: ${props => (props.color === 'submit' ? '#fff' : '#52555F')};
    background-color: ${props =>
      props.color === 'submit' ? '#df5500' : '#ebebeb'};
  }
`;
