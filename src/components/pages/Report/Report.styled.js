import styled from '@emotion/styled';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import RectangleAlcohol from '../../icons/RectangleAlcohol';

export const ReportIoIosArrowRoundBack = styled(IoIosArrowRoundBack)`
  padding-top: 16px;
  fill: #ff751d;
`;

export const ReportArrowLeft = styled(RiArrowLeftSLine)`
  fill: #ff751d;
`;

export const ReportArrowRight = styled(RiArrowRightSLine)`
  fill: #ff751d;
`;

export const ReportCurrentPeriodWrapper = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

export const ReportDateWrapper = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

export const ReportCurrentPeriodText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 10px;
    margin-left: 8px;
    margin-right: 8px;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
  }
`;

export const ReportDateText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 0;

    color: #000000;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 0.9;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

export const ReportCurrentBalanceWrapper = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

export const ReportCurrentBalanceText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 10px;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
  }
`;

export const ReportCurrentAmountWrapper = styled.div`
  @media (max-width: 767.98px) {
    padding: 17px 50px;
    border: 2px solid gray;
    border-radius: 22px;
  }
`;

export const ReportCurrentAmount = styled.p`
  @media (max-width: 767.98px) {
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
  @media (max-width: 767.98px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    padding-left: 0;
    list-style: none;

    margin-left: auto;
    margin-right: auto;

    width: 280px;
    height: 85px;

    background: #ffffff;
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;
  }
`;

export const ReportListItemIndicatorExpenses = styled.li`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    &::after {
      position: absolute;
      content: '';
      left: 138px;
      width: 1px;
      height: 70px;
      background-color: #e0e5eb;
    }
  }
`;

export const ReportListItemIndicatorIncome = styled.li`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
`;

export const ReportListItemIndicatorText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 4px;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 0.9;
  }
`;

export const ReportListItemIndicatorExpensesAmount = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 0;

    color: #e53935;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 0.9;
    letter-spacing: 0.04em;
  }
`;

export const ReportListItemIndicatorIncomeAmount = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 0;

    color: #407946;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 0.9;
    letter-spacing: 0.04em;
  }
`;

export const ReportExpenseWrapper = styled.div`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export const ReportExpenseText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 0;

    color: #000000;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 0.9;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
`;

export const ReportExpenseList = styled.ul`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 32px;
    margin-top: 0;
    padding-left: 0;
    list-style: none;

    margin-left: auto;
    margin-right: auto;

    background: #ffffff;
  }
`;

export const ReportExpenseListItem = styled.li`
  @media (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    width: calc((100% - 22px) / 3);

    background-image: url('./../../../images/icons/rectangle.svg');
    /* background-image: url(); */
    background-size: 40px;
  }
`;

export const ReportExpenseListItemAmount = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 5px;
    margin-right: 0;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const ReportExpenseListItemText = styled.p`
  @media (max-width: 767.98px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
