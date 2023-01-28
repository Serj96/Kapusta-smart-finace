import { useNavigate } from 'react-router-dom';

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

export default function Expenses() {
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
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>5 000.00</ReportExpenseListItemAmount>
            <Boock />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Kite />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Car />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Clay />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Cocktail />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Couch />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <HandsHoldingHeart />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Products />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Invoice />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Tools />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
          <ReportExpenseListItem>
            <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
            <Ufo />
            <ReportExpenseListItemText>Products</ReportExpenseListItemText>
          </ReportExpenseListItem>
        </ReportExpenseList>
      </ReportExpenseListWrapper>
    </>
  );
}
