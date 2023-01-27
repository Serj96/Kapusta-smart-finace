import styled from '@emotion/styled';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ReportIoIosArrowRoundBack = styled(IoIosArrowRoundBack)`
  /* width: 18px;
  height: 12px; */
`;
export const ReportArrowLeft = styled(RiArrowLeftSLine)``;

export const ReportArrowRight = styled(RiArrowRightSLine)``;

export const ReportCurrentPeriodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const ReportDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

export const ReportCurrentPeriodText = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const ReportDateText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ReportCurrentBalanceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const ReportCurrentBalanceText = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ReportCurrentAmountWrapper = styled.div`
  padding: 15px 30px;
  border: 2px solid gray;
  border-radius: 22px;
`;

export const ReportCurrentAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ReportListIndicator = styled.ul`
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
`;

export const ReportListItemIndicatorExpenses = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReportListItemIndicatorIncome = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReportListItemIndicatorText = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`;

export const ReportListItemIndicatorExpensesAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ReportListItemIndicatorIncomeAmount = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const ReportExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

export const ReportExpenseText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ReportExpenseList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding-left: 0;
  list-style: none;

  margin-left: auto;
  margin-right: auto;

  background: #ffffff;
`;

export const ReportExpenseListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReportExpenseListItemAmount = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  margin-right: 20px;
`;

export const ReportExpenseListItemSvg = styled.img`
  /* fill: blue;
  color: orange;
  background-color: green; */
  margin-bottom: 5px;
`;

export const ReportExpenseListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 20px;
`;
