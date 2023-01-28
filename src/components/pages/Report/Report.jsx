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
  ReportIoIosArrowRoundBackText,
  ReportIoIosArrowRoundBackWrapper,
  ReportHeaderWrapperTablet,
  ReportExpenseListWrapper,
  ReportCurrentConfirmWrapper,
  ReportCurrentConfirm,
} from './Report.styled';

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

export default function Report() {
  return (
    <Container>
      <ReportHeaderWrapperTablet>
        <ReportIoIosArrowRoundBackWrapper>
          <ReportIoIosArrowRoundBack size={36} />
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
            <ReportCurrentAmount>55 000.00 UAH</ReportCurrentAmount>
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
      <ReportExpenseListWrapper>
        <ReportExpenseWrapper>
          <ReportArrowLeft size={24} />
          <ReportExpenseText>Expenses</ReportExpenseText>
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
      </ReportExpenseListWrapper>
    </Container>
  );
}
