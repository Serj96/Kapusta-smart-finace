import React from 'react';

import {
  ExpItem,
  ExpDesription,
  ExpDate,
  ExpSum,
  ExpButton,
  DeleteIcon,
  Wrapper,
} from './ExpenseItem.styled';

const ExpenseItem = ({ description, date, Category, sum }) => {
  return (
    <>
      <ExpItem>
        <div>
          <ExpDesription>{description}</ExpDesription>
          <Wrapper>
            <ExpDate>{date}</ExpDate>
            <ExpDate>{Category}</ExpDate>
          </Wrapper>
        </div>
        <Wrapper>
          <ExpSum>{sum}</ExpSum>

          <ExpButton type="button">
            <DeleteIcon />
          </ExpButton>
        </Wrapper>
      </ExpItem>
    </>
  );
};

export default ExpenseItem;
