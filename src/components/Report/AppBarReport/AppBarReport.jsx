import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { format, subMonths, addMonths } from 'date-fns';
import { getDataByPeriod } from 'Redux/kapustaSlice';
import { getTransactionsByPeriod } from 'Redux/transactionOperation';
import { setIconData } from 'Redux/kapustaSlice';
// import { Container } from 'components/Theme/BreakPoints';
import StatsReport from 'components/StatsReport/StatsReport';
import ReportBalance from '../Balance/ReportBalance';
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

export default function AppBarReport() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userPeriodTotal = useSelector(getDataByPeriod);
  const [selectedSeriod, setSelectedSeriod] = useState(() => new Date());

  const onBackHomePageHandler = () => {
    dispatch(setIconData({ id: null, data: [] }))
    navigate('/home', { replace: true });
  };

  const onChangeMonthIncreaseHandler = () => {
    const nextDate = addMonths(selectedSeriod, 1);
    setSelectedSeriod(nextDate);
    dispatch(setIconData({ id: null, data: [] }))
  };

  const onChangeMonthDecreaseHandler = () => {
    const previousDate = subMonths(selectedSeriod, 1);
    setSelectedSeriod(previousDate);
    dispatch(setIconData({ id: null, data: [] }))
  };

  const userPeriodExpenses = userPeriodTotal.map(
    item => item?.expenses.expenseTotal
  );

  const userPeriodIncomes = userPeriodTotal.map(
    item => item?.incomes.incomeTotal
  );

  useEffect(() => {
    dispatch(getTransactionsByPeriod(format(selectedSeriod, 'yyyy-MM')));
  }, [dispatch, selectedSeriod]);

  return (
    <div
      style={{
        paddingBottom: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
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
              onClick={onChangeMonthDecreaseHandler}
            >
              <ReportArrowLeft size={24} />
            </ReportExpenseButtonArrowLeft>
            <ReportDateText>
              {format(selectedSeriod, 'MMMM yyyy')}
            </ReportDateText>
            <ReportExpenseButtonArrowRight
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
            - {[...userPeriodExpenses]} UAH.
          </ReportListItemIndicatorExpensesAmount>
        </ReportListItemIndicatorExpenses>
        <ReportListItemIndicatorIncome>
          <ReportListItemIndicatorText>Income:</ReportListItemIndicatorText>
          <ReportListItemIndicatorIncomeAmount>
            + {[...userPeriodIncomes]} UAH.
          </ReportListItemIndicatorIncomeAmount>
        </ReportListItemIndicatorIncome>
      </ReportListIndicator>
      <Outlet />
      <StatsReport />
    </div>
  );
}
