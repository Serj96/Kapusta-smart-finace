import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const ReportCurrentBalanceWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    position: absolute;
    margin-bottom: 0;
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    left: 275px;
  }

  @media (min-width: 1280px) {
    left: 475px;
  }
`;

export const ReportCurrentBalanceText = styled.p`
  margin-top: 0;

  color: #52555f;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;

  @media (max-width: 767.98px) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const ReportCurrentAmountWrapper = styled.div`
  border: 2px solid #ffffff;
  border-radius: 22px;

  @media (max-width: 767.98px) {
    padding: 12px 30px;
  }

  @media (min-width: 768px) {
    padding: 13px 20px;
  }

  @media (min-width: 1280px) {
    margin-right: 16px;
    cursor: pointer;
  }
`;

export const ReportCurrentAmount = styled.input`
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  border: none;
  outline: none;
  background-color: transparent;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &::placeholder {
    text-align: center;
    color: #000000;
    background-color: transparent;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  @media (max-width: 767.98px) {
    width: 120px;
  }

  @media (min-width: 768px) {
    width: 90px;
  }

  @media (min-width: 1280px) {
    cursor: pointer;
  }
`;

export const ReportCurrentConfirmWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  @media (max-width: 1279.98px) {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    margin-bottom: 0;

    color: gray;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    padding: 17px 32px;
    border: 2px solid #ffffff;
    border-radius: 22px;
  }

  &:hover,
  &:focus {
    background-color: ${myTheme.colors.hover};
    color: ${myTheme.backgroundColors.primary};
    border-color: ${myTheme.colors.hover};
    box-shadow: shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  }
`;
