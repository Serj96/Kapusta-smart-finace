import { Container } from 'components/Theme/BreakPoints';

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
  ReportExpenseWrapper,
  ReportExpenseText,
  ReportExpenseList,
  ReportExpenseListItem,
  ReportExpenseListItemAmount,
  ReportExpenseListItemText,
} from './Report.styled';

import Boock from 'components/icons/Boock';
import Kite from 'components/icons/Kite';
import Car from 'components/icons/Car';
import Clay from 'components/icons/Clay';
import Cocktail from 'components/icons/Cocktail';
import Couch from 'components/icons/Couch';
import HandsHoldingHeart from 'components/icons/HandsHoldingHeart';
import Products from 'components/icons/Products';
import Invoice from 'components/icons/Invoice';
import Tools from 'components/icons/Tools';
import Ufo from 'components/icons/Ufo';

export default function Report() {
  return (
    <Container>
      <ReportIoIosArrowRoundBack size={36} />
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
      </ReportCurrentBalanceWrapper>
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
      <ReportExpenseWrapper>
        <ReportArrowLeft size={24} />
        <ReportExpenseText>EXPENSES</ReportExpenseText>
        <ReportArrowRight size={24} />
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
    </Container>
  );
}
