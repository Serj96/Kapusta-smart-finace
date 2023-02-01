import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataByPeriod } from 'Redux/kapustaSlice';
import Salary from 'components/ReportIcons/Salary';
import OutherIncomes from 'components/ReportIcons/OutherIncomes';
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

  const onChangeExpensesPageHandler = () => {
    navigate('/home/reports', { replace: true });
  };

  const onChangeIncomePageHandler = () => {
    navigate('income', { replace: true });
  };

  const userPeriodDataTotalIncomes = userPeriodTotal.map(item =>
    Object.entries(item.incomes.incomesData)
  );

  const TotalIncomesArray = userPeriodDataTotalIncomes.map(item => item);

  return (
    <>
      {TotalIncomesArray.length > 0 && TotalIncomesArray[0].length > 0 && (
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

          <ReportExpenseList>
            {TotalIncomesArray.map(item =>
              item.map(elem => (
                <ReportExpenseListItem key={elem[0]}>
                  <ReportExpenseListItemAmount>
                    {elem[1].total}
                  </ReportExpenseListItemAmount>
                  {elem[0] === 'З/П' && <Salary />}
                  {elem[0] === 'Доп. доход' && <OutherIncomes />}
                  <ReportExpenseListItemText>
                    {elem[0]}
                  </ReportExpenseListItemText>
                </ReportExpenseListItem>
              ))
            )}
          </ReportExpenseList>
        </ReportExpenseListWrapper>
      )}
    </>
  );
}
