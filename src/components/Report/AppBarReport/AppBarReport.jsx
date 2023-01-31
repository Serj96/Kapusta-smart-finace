import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getTransactionsByPeriod } from 'Redux/transactionOperation';
import { Container } from 'components/Theme/BreakPoints';
// import { getUserIncomes, getUserExpenses } from 'Redux/kapustaSlice';
import { months } from './Month';

import { ReportBalance } from '../Balance/ReportBalance';

import {
  ReportIoIosArrowRoundBack,
  ReportArrowLeft,
  ReportArrowRight,
  ReportCurrentPeriodWrapper,
  ReportExpenseButtonArrowLeft,
  ReportExpenseButtonArrowRight,
  ReportDateWrapper,
  ReportCurrentPeriodText,
  ReportDateText,
  ReportListIndicator,
  ReportListItemIndicatorExpenses,
  ReportListItemIndicatorIncome,
  ReportListItemIndicatorText,
  ReportListItemIndicatorExpensesAmount,
  ReportListItemIndicatorIncomeAmount,
  ReportIoIosArrowRoundBackText,
  ReportIoIosArrowRoundBackWrapper,
  ReportHeaderWrapperTablet,
} from './AppBarReport.styled';

const currentDateMonth = new Date().getMonth();
let monthvalue = months[currentDateMonth];

export default function AppBarReport() {
  const [currentMonthName, setCurrentMonthName] = useState(monthvalue);
  const [currentMonthNumber, setCurrentMonthNumber] =
    useState(currentDateMonth);

  console.log('Теперішній місяць номер згідно з Date', currentDateMonth);
  console.log('Теперішній місяць назва згідно з Date', monthvalue);
  console.log(
    'Теперішній місяць номер у стейті згідно з індексом',
    currentMonthNumber
  );
  console.log(
    'Теперішній місяць назва у стейті згідно з індексом',
    currentMonthName
  );
  console.log('=======================================================');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onBackHomePageHandler = () => {
    navigate('/home', { replace: true });
  };

  const onChangeMonthIncreaseHandler = () => {
    setCurrentMonthName(months[currentMonthNumber + 1]);
    setCurrentMonthNumber(currentMonthNumber + 1);

    onFetchCurrentPeriodHandler(currentMonthNumber);
  };

  const onChangeMonthDecreaseHandler = () => {
    setCurrentMonthName(months[currentMonthNumber - 1]);
    setCurrentMonthNumber(currentMonthNumber - 1);

    onFetchCurrentPeriodHandler(currentMonthNumber);
  };

  const onFetchCurrentPeriodHandler = currentMonthNumber => {
    switch (currentMonthNumber) {
      case 0:
        dispatch(getTransactionsByPeriod('01'));
        break;

      case 1:
        dispatch(getTransactionsByPeriod('02'));
        break;

      case 2:
        dispatch(getTransactionsByPeriod('03'));
        break;

      case 3:
        dispatch(getTransactionsByPeriod('04'));
        break;

      case 4:
        dispatch(getTransactionsByPeriod('05'));
        break;

      case 5:
        dispatch(getTransactionsByPeriod('06'));
        break;

      case 6:
        dispatch(getTransactionsByPeriod('07'));
        break;

      case 7:
        dispatch(getTransactionsByPeriod('08'));
        break;

      case 8:
        dispatch(getTransactionsByPeriod('09'));
        break;

      case 9:
        dispatch(getTransactionsByPeriod('10'));
        break;

      case 10:
        dispatch(getTransactionsByPeriod('11'));
        break;

      case 11:
        dispatch(getTransactionsByPeriod('12'));
        break;

      default:
        return;
    }
  };

  const userPeriodTotal = useSelector(
    state => state.kapusta.auth.userData.periodData
  );

  useEffect(() => {
    dispatch(getTransactionsByPeriod('01'));
    setCurrentMonthNumber(currentMonthNumber);
    // eslint-disable-next-line
  }, [dispatch]);

  const userPeriodExpenses = userPeriodTotal.map(
    item => item?.expenses.expenseTotal
  );

  const userPeriodIncomes = userPeriodTotal.map(
    item => item?.incomes.incomeTotal
  );

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
            <ReportExpenseButtonArrowLeft
              disabled={currentMonthNumber === 0}
              onClick={onChangeMonthDecreaseHandler}
            >
              <ReportArrowLeft size={24} />
            </ReportExpenseButtonArrowLeft>
            <ReportDateText>{currentMonthName} 2023</ReportDateText>
            <ReportExpenseButtonArrowRight
              disabled={currentMonthNumber === 11}
              onClick={onChangeMonthIncreaseHandler}
            >
              <ReportArrowRight size={24} />
            </ReportExpenseButtonArrowRight>
          </ReportDateWrapper>
        </ReportCurrentPeriodWrapper>
        <ReportBalance />
      </ReportHeaderWrapperTablet>

      <ReportListIndicator>
        <ReportListItemIndicatorExpenses>
          <ReportListItemIndicatorText>Expenses:</ReportListItemIndicatorText>
          <ReportListItemIndicatorExpensesAmount>
            {[...userPeriodExpenses]} UAH.
          </ReportListItemIndicatorExpensesAmount>
        </ReportListItemIndicatorExpenses>
        <ReportListItemIndicatorIncome>
          <ReportListItemIndicatorText>Income:</ReportListItemIndicatorText>
          <ReportListItemIndicatorIncomeAmount>
            {[...userPeriodIncomes]} UAH.
          </ReportListItemIndicatorIncomeAmount>
        </ReportListItemIndicatorIncome>
      </ReportListIndicator>
      <Outlet />
    </Container>
  );
}
