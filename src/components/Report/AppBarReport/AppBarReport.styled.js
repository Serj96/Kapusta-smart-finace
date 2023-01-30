import styled from '@emotion/styled';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ReportIoIosArrowRoundBackWrapper = styled.div`
  padding-top: 16px;

  @media (min-width: 768px) {
    display: flex;
    padding-top: 0;
  }
`;

export const ReportIoIosArrowRoundBack = styled(IoIosArrowRoundBack)`
  fill: #ff751d;
`;

export const ReportIoIosArrowRoundBackText = styled.p`
  @media (max-width: 767.98px) {
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

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 15px;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
  }
`;

export const ReportArrowLeft = styled(RiArrowLeftSLine)`
  fill: #ff751d;
`;

export const ReportArrowRight = styled(RiArrowRightSLine)`
  fill: #ff751d;
`;

export const ReportCurrentPeriodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767.98px) {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    margin-bottom: 0;
  }
`;

export const ReportExpenseButtonArrowLeft = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  &:disabled {
    background-color: transparent;
  }
`;

export const ReportExpenseButtonArrowRight = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  &:disabled {
    background-color: transparent;
  }
`;

export const ReportDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

export const ReportCurrentPeriodText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;

  color: #52555f;

  @media (max-width: 767.98px) {
    margin: 0 10px 8px 8px;
  }

  @media (min-width: 768px) {
    margin: 0 5px 8px 8px;
  }
`;

export const ReportDateText = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;

export const ReportCurrentBalanceWrapper = styled.div`
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
  border: 2px solid gray;
  border-radius: 22px;

  @media (max-width: 767.98px) {
    padding: 17px 50px;
  }

  @media (min-width: 768px) {
    padding: 12px 20px;
  }

  @media (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const ReportCurrentConfirmWrapper = styled.div`
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
    padding: 12px 20px;
    border: 2px solid gray;
    border-radius: 22px;
  }
`;

export const ReportCurrentAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  color: #000000;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const ReportCurrentConfirm = styled.p`
  @media (max-width: 767.98px) {
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

    color: #000000;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

export const ReportListIndicator = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  list-style: none;

  margin: 0 auto 32px auto;

  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  @media (max-width: 767.98px) {
    width: 280px;
    height: 85px;
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 50px;
  }
`;

export const ReportListItemIndicatorExpenses = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    position: absolute;
    content: '';
    left: 138px;
    width: 1px;
    height: 70px;
    background-color: #e0e5eb;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 15px 20px 15px 130px;

    &::after {
      left: 356px;
      height: 36px;
    }
  }
`;

export const ReportListItemIndicatorIncome = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 15px 130px 15px 20px;
  }
`;

export const ReportListItemIndicatorText = styled.p`
  margin-top: 0;

  color: #52555f;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;

  @media (max-width: 767.98px) {
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

export const ReportListItemIndicatorExpensesAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  color: #e53935;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;
  letter-spacing: 0.04em;
`;

export const ReportListItemIndicatorIncomeAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  color: #407946;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;
  letter-spacing: 0.04em;
`;

export const ReportHeaderWrapperTablet = styled.div`
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    margin-bottom: 32px;
  }
`;
