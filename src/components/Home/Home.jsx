import { useMediaQuery } from 'react-responsive';
import { MdBarChart } from 'react-icons/md';

import Balance from 'components/Expenses/Balance/Balance';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';
import NavLink from 'components/Expenses/NavLink/NavLink';
import {
  BalanceWrapper,
  ReportsLink,
} from 'components/ExpensesPage/ExpensesPage.styled';
import React from 'react';

import DateInput from 'components/Expenses/Form/Inputs/DateInput/DateInput';

import { Container } from 'components/Theme/BreakPoints';


const Home = () => {
  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });

  return (
    <>
      {isMobScreen && (
        <>
          <Container>
            <BalanceWrapper>
              <Balance />
              <ReportsLink to={'/home/reports'}>
                <>
                  <span>Reports</span>
                  <MdBarChart size={'24px'} />
                </>
              </ReportsLink>
            </BalanceWrapper>
            <DateInput />
            <ExpenseList />
            <NavLink />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
