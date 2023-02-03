import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataByPeriod } from 'Redux/kapustaSlice';
import Salary from 'components/ReportIcons/Salary';
import OutherIncomes from 'components/ReportIcons/OutherIncomes';
import { setIconData } from 'Redux/kapustaSlice';
import ReportIncomeNotification from 'components/Report/ReportNotification/ReportIncomeNotification';
import {
  ReportArrowLeft,
  ReportArrowRight,
  ReportExpenseButtonArrowLeft,
  ReportExpenseButtonArrowRight,
  ReportExpenseWrapper,
  ReportExpenseText,
  ReportExpenseList,
  ReportExpenseListItem,
  ReportExpenseListItemAmount,
  ReportExpenseListItemText,
  ReportExpenseListWrapper,
} from '../Report.styled';

export default function Income() {
  const navigate = useNavigate();
  const userPeriodTotal = useSelector(getDataByPeriod);
  const dispatch = useDispatch();
  const onChangeExpensesPageHandler = () => {
    dispatch(setIconData({ id: null, data: [] }));
    navigate('/home/reports', { replace: true });
  };

  const onChangeIncomePageHandler = () => {
    dispatch(setIconData({ id: null, data: [] }));
    navigate('income', { replace: true });
  };

  const userPeriodDataTotalIncomes = userPeriodTotal.map(item =>
    Object.entries(item.incomes.incomesData)
  );

  const TotalIncomesArray = userPeriodDataTotalIncomes.map(item => item);
  const onClickIcon = e => {
    if (e.target.nodeName !== 'svg' && e.target.nodeName !== 'path') return;
    const dataToSet = userPeriodTotal.map(item => item);
    dispatch(setIconData({ id: e.target.id, data: dataToSet }));
  };
  return (
    <>
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportExpenseButtonArrowLeft
            className="arrow-left"
            onClick={onChangeExpensesPageHandler}
          >
            <ReportArrowLeft size={24} />
          </ReportExpenseButtonArrowLeft>
          <ReportExpenseText>Income</ReportExpenseText>
          <ReportExpenseButtonArrowRight
            disabled
            className="arrow-right"
            onClick={onChangeIncomePageHandler}
          >
            <ReportArrowRight size={24} />
          </ReportExpenseButtonArrowRight>
        </ReportExpenseWrapper>
        {TotalIncomesArray.length > 0 && TotalIncomesArray[0].length > 0 ? (
          <ReportExpenseList onClick={onClickIcon}>
            {TotalIncomesArray.map(item =>
              item.map(elem => (
                <ReportExpenseListItem key={elem[0]}>
                  <ReportExpenseListItemAmount>
                    {elem[1].total}.00
                  </ReportExpenseListItemAmount>
                  {elem[0] === 'З/П' && <Salary />}
                  {elem[0] === 'Доп. доход' && <OutherIncomes />}
                  <ReportExpenseListItemText>
                    {elem[0] === 'З/П' && 'Salary'}
                    {elem[0] === 'Доп. доход' && 'Add. income'}
                  </ReportExpenseListItemText>
                </ReportExpenseListItem>
              ))
            )}
          </ReportExpenseList>
        ) : (
          <ReportIncomeNotification />
        )}
      </ReportExpenseListWrapper>
    </>
  );
}
