import { Container } from 'components/Theme/BreakPoints';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  ReportIoIosArrowRoundBack,
  ReportArrowLeft,
  ReportArrowRight,
  ReportCurrentPeriodWrapper,
  ReportDateWrapper,
  ReportCurrentPeriodText,
  ReportDateText,
  ReportCurrentBalanceWrapper,
  ReportCurrentBalanceText,
  ReportCurrentAmountWrapper,
  ReportCurrentAmount,
  ReportListIndicator,
  ReportListItemIndicatorExpenses,
  ReportListItemIndicatorIncome,
  ReportListItemIndicatorText,
  ReportListItemIndicatorExpensesAmount,
  ReportListItemIndicatorIncomeAmount,
  ReportIoIosArrowRoundBackText,
  ReportIoIosArrowRoundBackWrapper,
  ReportHeaderWrapperTablet,
  ReportCurrentConfirmWrapper,
  ReportCurrentConfirm,
} from './AppBarReport.styled';

export default function AppBarReport() {
  const navigate = useNavigate();

  const onBackHomePageHandler = () => {
    navigate('/home', { replace: true });
    console.log('Натиснули стрілку і перейшли на сторінку Home');
  };

  return (
    <Container>
      <ReportHeaderWrapperTablet>
        <ReportIoIosArrowRoundBackWrapper onClick={onBackHomePageHandler}>
          <ReportIoIosArrowRoundBack size={36} />
          <ReportIoIosArrowRoundBackText>
            Main page
          </ReportIoIosArrowRoundBackText>
        </ReportIoIosArrowRoundBackWrapper>

        <ReportCurrentPeriodWrapper>
          <ReportCurrentPeriodText>Current period:</ReportCurrentPeriodText>
          <ReportDateWrapper>
            <ReportArrowLeft size={24} />
            <ReportDateText>November 2019</ReportDateText>
            <ReportArrowRight size={24} />
          </ReportDateWrapper>
        </ReportCurrentPeriodWrapper>

        <ReportCurrentBalanceWrapper>
          <ReportCurrentBalanceText>Balance:</ReportCurrentBalanceText>
          <ReportCurrentAmountWrapper>
            <ReportCurrentAmount>55 000.00 UAH</ReportCurrentAmount>
          </ReportCurrentAmountWrapper>
          <ReportCurrentConfirmWrapper>
            <ReportCurrentConfirm>Confirm</ReportCurrentConfirm>
          </ReportCurrentConfirmWrapper>
        </ReportCurrentBalanceWrapper>
      </ReportHeaderWrapperTablet>

      <ReportListIndicator>
        <ReportListItemIndicatorExpenses>
          <ReportListItemIndicatorText>Expenses:</ReportListItemIndicatorText>
          <ReportListItemIndicatorExpensesAmount>
            - 18 000.00 UAH.
          </ReportListItemIndicatorExpensesAmount>
        </ReportListItemIndicatorExpenses>
        <ReportListItemIndicatorIncome>
          <ReportListItemIndicatorText>Income:</ReportListItemIndicatorText>
          <ReportListItemIndicatorIncomeAmount>
            + 45 000.00 UAH.
          </ReportListItemIndicatorIncomeAmount>
        </ReportListItemIndicatorIncome>
      </ReportListIndicator>
      <Outlet />
    </Container>
  );
}
