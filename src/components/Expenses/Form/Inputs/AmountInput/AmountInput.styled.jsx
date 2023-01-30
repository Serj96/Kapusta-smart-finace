import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767.98px) {
    margin-top: 32px;
    margin-bottom: 80px;
  }
`;

export const AmounInput = styled.input`
  padding: 12px 18px;
  width: 125px;
  height: 44px;
  background-color: transparent;
  border: 2px solid ${myTheme.backgroundColors.primary};
  border-radius: 22px 0px 0px 22px;

  &::placeholder {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    text-align: right;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: ${myTheme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 70px;
    height: 44px;
    border: 2px solid #f5f6fb;
    border-right: none;
    border-radius: 0;

    ::placeholder {
      font-size: 12px;
      line-height: 1.17;
      text-align: center;
      letter-spacing: 0.02em;

      color: #c7ccdc;
    }
  }
`;

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  width: 60px;
  height: 44px;
  background-color: transparent;
  border: 2px solid ${myTheme.backgroundColors.primary};
  border-radius: 22px 0px 0px 22px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 42px;
    padding: 0;
    border: 2px solid #f5f6fb;
    border-right: none;
  }
`;
