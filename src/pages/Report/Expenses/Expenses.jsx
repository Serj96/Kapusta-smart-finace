import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

export default function Expense() {
  const navigate = useNavigate();

  const onChangeExpensesPageHandler = () => {
    navigate('/home/reports', { replace: true });
  };

  const onChangeIncomePageHandler = () => {
    navigate('income', { replace: true });
  };

  const userPeriodTotal = useSelector(
    state => state.kapusta.auth.userData.periodData
  );

  const userPeriodDataTotalExpenses = userPeriodTotal.map(item =>
    Object.entries(item.expenses.incomesData)
  );

  const TotalExpensesArray = userPeriodDataTotalExpenses.map(item => item);

  return (
    <>
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportExpenseButtonArrowLeft
            disabled={true}
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
                {elem[0] === 'Alcohol' && <Cocktail />}
                {elem[0] === 'Продукты' && <Products />}
                {elem[0] === 'Health' && <HandsHoldingHeart />}
                {elem[0] === 'Entertainment' && <Kite />}
                {elem[0] === 'Транспорт' && <Car />}
                {elem[0] === 'Всё для дома' && <Couch />}
                {elem[0] === 'Technique' && <Tools />}
                {elem[0] === 'Communal, communication' && <Invoice />}
                {elem[0] === 'Sports, hobbies' && <Clay />}
                {elem[0] === 'Учеба' && <Boock />}
                {elem[0] === 'Other' && <Ufo />}
                <ReportExpenseListItemText>{elem[0]}</ReportExpenseListItemText>
              </ReportExpenseListItem>
            ))
          )}
        </ReportExpenseList>
      </ReportExpenseListWrapper>
    </>
  );
}
