import React from 'react';
import { MdBarChart } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import NavLink from 'components/Expenses/NavLink/NavLink';
import Balance from 'components/Expenses/Balance/Balance';
import ExpenseTable from 'components/Expenses/ExpenseTable/ExpenseTable';
import Summary from 'components/Expenses/Summary/Summary';
import Form from '../Expenses/Form/Form';
import {
  BalanceWrapper,
  ExpensePageWrapper,
  MainPageWrapper,
  Page,
  ReportsLink,
  TableSummaryWrapper,
} from './ExpensesPage.styled';

const ExpensesPage = () => {
  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isBeforeDescScreen = useMediaQuery({ query: '(max-width: 1279.98px)' });
  const isAfterDescScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      {isMobScreen && <Form />}
      {isTabScreen && (
        <>
          <Page>
            <MainPageWrapper>
              <BalanceWrapper>
                <Balance />
                <ReportsLink to={'/home/reports'}>
                  <>
                    <span>Reports</span>
                    <MdBarChart size={'24px'} />
                  </>
                </ReportsLink>
              </BalanceWrapper>
              <div>
                <NavLink />
                <ExpensePageWrapper>
                  <div>
                    <div>
                      <Form />
                      <TableSummaryWrapper>
                        <ExpenseTable />
                        {isAfterDescScreen && <Summary />}
                      </TableSummaryWrapper>
                    </div>
                  </div>
                </ExpensePageWrapper>
              </div>
              {isBeforeDescScreen && <Summary />}
            </MainPageWrapper>
          </Page>
        </>
      )}
    </>
  );
};

export default ExpensesPage;
