import { useMediaQuery } from 'react-responsive';
import { MdBarChart } from 'react-icons/md';

import Balance from 'components/Expenses/Balance/Balance';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';
// import DateInput from 'components/Expenses/Form/Inputs/DateInput';
import NavLink from 'components/Expenses/NavLink/NavLink';
import {
  BalanceWrapper,
  ReportsLink,
} from 'components/ExpensesPage/ExpensesPage.styled';
import React from 'react';

const Home = () => {
  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });

  return (
    <>
      {isMobScreen && (
        <>
          <BalanceWrapper>
            <Balance />
            <ReportsLink to={'/reports'}>
              <>
                <span>Reports</span>
                <MdBarChart size={'24px'} />
              </>
            </ReportsLink>
          </BalanceWrapper>
          {/* <DateInput /> */}
          <ExpenseList />
          <NavLink />
        </>
      )}
    </>
  );
};

export default Home;
