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

export default function Report() {
  return (
    <div>
      <div>
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
        <div>
          <ReportExpenseWrapper>
            <ReportArrowLeft size={24} />
            <ReportExpenseText>EXPENSES</ReportExpenseText>
            <ReportArrowRight size={24} />
          </ReportExpenseWrapper>
          <ReportExpenseList>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
            <ReportExpenseListItem>
              <ReportExpenseListItemAmount>
                3 000.00
              </ReportExpenseListItemAmount>
              <svg></svg>
              <ReportExpenseListItemText>Products</ReportExpenseListItemText>
            </ReportExpenseListItem>
          </ReportExpenseList>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
