import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserExpenses } from 'Redux/kapustaSlice';

import {
  ReportArrowLeft,
  ReportArrowRight,
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
  const userExpense = useSelector(getUserExpenses);
  userExpense.map(item => console.log(item));

  const navigate = useNavigate();

  const onChangeExpensesPageHandler = () => {
    navigate('/expenses', { replace: true });
    console.log('Натиснули на ліву стрілку і перейшли на сторінку Expenses');
  };

  const onChangeIncomePageHandler = () => {
    navigate('income', { replace: true });
    console.log('Натиснули на праву стрілку і перейшли на сторінку Income');
  };

  return (
    <>
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportArrowLeft onClick={onChangeExpensesPageHandler} size={24} />
          <ReportExpenseText>Expenses</ReportExpenseText>
          <ReportArrowRight onClick={onChangeIncomePageHandler} size={24} />
        </ReportExpenseWrapper>

        <ReportExpenseList>
          {userExpense.map((expense, index) => (
            <ReportExpenseListItem key={index}>
              <ReportExpenseListItemAmount>
                {expense.amount}
              </ReportExpenseListItemAmount>
              {expense.category === 'Alcohol' && <Cocktail />}
              {expense.category === 'Products' && <Products />}
              {expense.category === 'Health' && <HandsHoldingHeart />}
              {expense.category === 'Entertainment' && <Kite />}
              {expense.category === 'Transport' && <Car />}
              {expense.category === 'Housing' && <Couch />}
              {expense.category === 'Technique' && <Tools />}
              {expense.category === 'Communal, communication' && <Invoice />}
              {expense.category === 'Sports, hobbies' && <Clay />}
              {expense.category === 'Education' && <Boock />}
              {expense.category === 'Other' && <Ufo />}
              <ReportExpenseListItemText>
                {expense.category}
              </ReportExpenseListItemText>
            </ReportExpenseListItem>
          ))}
        </ReportExpenseList>
      </ReportExpenseListWrapper>
    </>
  );
}
