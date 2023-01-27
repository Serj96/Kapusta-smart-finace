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
  ReportExpenseListItemSvg,
} from './Report.styled';

import kite from './../../../images/icons/kite.svg';
import book from './../../../images/icons/book.svg';
import car from './../../../images/icons/car.svg';
import clay from './../../../images/icons/clay.svg';
import cocktail from './../../../images/icons/cocktail.svg';
import couch from './../../../images/icons/couch.svg';
import handsHoldingHeart from './../../../images/icons/hands-holding-heart.svg';
import group from './../../../images/icons/group.svg';
import invoice from './../../../images/icons/invoice.svg';
import tools from './../../../images/icons/tools.svg';
import ufo from './../../../images/icons/ufo.svg';

export default function Report() {
  return (
    <>
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
          <ReportExpenseListItemSvg src={kite} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={book} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={car} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={clay} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={cocktail} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={couch} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={handsHoldingHeart} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={group} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={invoice} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={tools} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
        <ReportExpenseListItem>
          <ReportExpenseListItemAmount>3 000.00</ReportExpenseListItemAmount>
          <ReportExpenseListItemSvg src={ufo} />
          <ReportExpenseListItemText>Products</ReportExpenseListItemText>
        </ReportExpenseListItem>
      </ReportExpenseList>
    </>
  );
}
