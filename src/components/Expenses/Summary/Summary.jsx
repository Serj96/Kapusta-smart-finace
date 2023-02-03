import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSummaryExpenses, getSummaryIncome } from 'Redux/kapustaSlice';
import { convertMonth } from '../convert/convertMonth';
import { SummarryItem, SummaryTitle, SummaryWrapper } from './Summary.styled';

const Summary = () => {
  const { pathname } = useLocation();
  const expensesSummary = useSelector(getSummaryExpenses);
  const incomeSummary = useSelector(getSummaryIncome);

  const exp = Object.entries(expensesSummary);
  const inc = Object.entries(incomeSummary);

  return (
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <ul>
        {pathname === '/home/expenses' &&
          exp
            ?.filter(item => item[1] !== 'N/A')
            .map(([key, value], index) => (
              <SummarryItem key={index}>
                <span>{convertMonth(key)}</span>
                <span>{value}</span>
              </SummarryItem>
            ))}
        {pathname === '/home/income' &&
          inc
            ?.filter(item => item[1] !== 'N/A')
            .map(([key, value], index) => (
              <SummarryItem key={index}>
                <span>{convertMonth(key)}</span>
                <span>{value}</span>
              </SummarryItem>
            ))}
      </ul>
    </SummaryWrapper>
  );
};

export default Summary;
