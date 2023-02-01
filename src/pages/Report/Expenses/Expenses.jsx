import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataByPeriod } from 'Redux/kapustaSlice';
import Boock from 'components/ReportIcons/Boock';
import Kite from 'components/ReportIcons/Kite';
import Car from 'components/ReportIcons/Car';
import Clay from 'components/ReportIcons/Clay';
import Cocktail from 'components/ReportIcons/Cocktail';
import Couch from 'components/ReportIcons/Couch';
import HandsHoldingHeart from 'components/ReportIcons/HandsHoldingHeart';
import Products from 'components/ReportIcons/Products';
import Invoice from 'components/ReportIcons/Invoice';
import Tools from 'components/ReportIcons/Tools';
import Ufo from 'components/ReportIcons/Ufo';
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

export default function Expense() {
  const navigate = useNavigate();
  const userPeriodTotal = useSelector(getDataByPeriod);

  const onChangeExpensesPageHandler = () => {
    navigate('/home/reports', { replace: true });
  };

  const onChangeIncomePageHandler = () => {
    navigate('income', { replace: true });
  };

  const userPeriodDataTotalExpenses = userPeriodTotal.map(item =>
    Object.entries(item.expenses.expensesData)
  );

  const TotalExpensesArray = userPeriodDataTotalExpenses.map(item => item);

  return (
    <>
      {TotalExpensesArray.length > 0 && TotalExpensesArray[0].length > 0 && (
        <ReportExpenseListWrapper>
          <ReportExpenseWrapper>
            <ReportExpenseButtonArrowLeft
              disabled
              className="arrow-left"
              onClick={onChangeExpensesPageHandler}
            >
              <ReportArrowLeft size={24} />
            </ReportExpenseButtonArrowLeft>
            <ReportExpenseText>Expenses</ReportExpenseText>
            <ReportExpenseButtonArrowRight
              className="arrow-right"
              onClick={onChangeIncomePageHandler}
            >
              <ReportArrowRight size={24} />
            </ReportExpenseButtonArrowRight>
          </ReportExpenseWrapper>

          <ReportExpenseList>
            {TotalExpensesArray.map(item =>
              item.map(elem => (
                <ReportExpenseListItem key={elem[0]}>
                  <ReportExpenseListItemAmount>
                    {elem[1].total}
                  </ReportExpenseListItemAmount>
                  {elem[0] === 'Алкоголь' && <Cocktail />}
                  {elem[0] === 'Продукты' && <Products />}
                  {elem[0] === 'Здоровье' && <HandsHoldingHeart />}
                  {elem[0] === 'Развлечения' && <Kite />}
                  {elem[0] === 'Транспорт' && <Car />}
                  {elem[0] === 'Всё для дома' && <Couch />}
                  {elem[0] === 'Техника' && <Tools />}
                  {elem[0] === 'Коммуналка и связь' && <Invoice />}
                  {elem[0] === 'Спорт и хобби' && <Clay />}
                  {elem[0] === 'Образование' && <Boock />}
                  {elem[0] === 'Прочее' && <Ufo />}
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
