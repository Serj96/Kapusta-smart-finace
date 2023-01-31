import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const BalanceFormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
  }
`;

export const TitleBalance = styled.h2`
  text-align: center;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767.98px) {
    margin-bottom: 40px;
  }
`;

export const AmountInput = styled.input`
  padding: 15px;
  width: 140px;
  height: 44px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${myTheme.colors.secondary};
  border: 2px solid ${myTheme.backgroundColors.primary};
  border-radius: 22px 0px 0px 22px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
    padding: 12px 20px;
    width: 125px;
    border: 2px solid ${myTheme.backgroundColors.primary};
    border-radius: 16px;
  }
`;

export const ConfirmBtn = styled.button`
  padding: 15px;
  width: 142px;
  height: 44px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-align: start;
  text-transform: uppercase;
  color: rgba(82, 85, 95, 0.7);
  border: 2px solid ${myTheme.backgroundColors.primary};
  border-radius: 0px 22px 22px 0px;
  cursor: pointer;
  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
    width: 125px;
    text-align: center;
    border: 2px solid ${myTheme.backgroundColors.primary};
    border-radius: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${myTheme.colors.hover};
    color: ${myTheme.backgroundColors.primary};
    border-color: ${myTheme.colors.hover};
  }
`;
