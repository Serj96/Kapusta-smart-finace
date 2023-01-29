import React from 'react';
import { SummarryItem, SummaryTitle, SummaryWrapper } from './Summary.styled';

const summary = [
  { month: 'november', money: ' 20000' },
  { month: 'october', money: '30000' },
  { month: 'june', money: '40000' },
];

const Summary = () => {
  return (
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <ul>
        {summary.map(({ month, money }) => (
          <SummarryItem key={month}>
            <span>{month}</span>
            <span>{money}</span>
          </SummarryItem>
        ))}
      </ul>
    </SummaryWrapper>
  );
};

export default Summary;
