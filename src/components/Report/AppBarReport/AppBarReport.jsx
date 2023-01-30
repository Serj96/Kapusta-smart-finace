import { Container } from 'components/Theme/BreakPoints';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserIncomes, getUserExpenses } from 'Redux/kapustaSlice';

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
  const userIncomes = useSelector(getUserIncomes);
  const userExpenses = useSelector(getUserExpenses);
  // const transactionPeriodData = useSelector(getTransactionsByPeriod);
  const balanse = useSelector(state => state.kapusta.auth.userData.balance);
  const userIncomesTotalAmount = userIncomes
    .map(item => item.amount)
    .reduce((previousValue, amount) => {
      return previousValue + amount;
    }, 0);

  const userExpensesTotalAmount = userExpenses
    .map(item => item.amount)
    .reduce((previousValue, amount) => {
      return previousValue + amount;
    }, 0);

  console.log(userIncomesTotalAmount);
  console.log(userExpensesTotalAmount);

  const onBackHomePageHandler = () => {
    navigate('/home', { replace: true });
    console.log('Натиснули стрілку і перейшли на сторінку Home');
  };

  return (
    <Container>
      <ReportHeaderWrapperTablet>
        <ReportIoIosArrowRoundBackWrapper>
          <ReportIoIosArrowRoundBack
            size={36}
            onClick={onBackHomePageHandler}
          />
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
            <ReportCurrentAmount>{balanse} UAH</ReportCurrentAmount>
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
            {userExpensesTotalAmount} UAH.
          </ReportListItemIndicatorExpensesAmount>
        </ReportListItemIndicatorExpenses>
        <ReportListItemIndicatorIncome>
          <ReportListItemIndicatorText>Income:</ReportListItemIndicatorText>
          <ReportListItemIndicatorIncomeAmount>
            {userIncomesTotalAmount} UAH.
          </ReportListItemIndicatorIncomeAmount>
        </ReportListItemIndicatorIncome>
      </ReportListIndicator>
      <Outlet />
    </Container>
  );
}
