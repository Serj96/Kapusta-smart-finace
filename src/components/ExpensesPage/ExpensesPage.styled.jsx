import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { myTheme } from 'components/Theme/Theme';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainPageWrapper = styled.div`
  width: 704px;

  @media screen and (min-width: 1280px) {
    width: 1098px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const ExpensePageWrapper = styled.div`
  padding: 32px 32px 60px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border: solid 1px transparent;
  border-radius: 0px 30px 30px 30px;
  width: 1098px;

  @media screen and (max-width: 1279.98px) {
    padding: 24px 40px 42px;
    margin-bottom: 40px;
    width: 704px;
  }
`;

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  padding: 40px 0;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 8px;
  }
`;

export const ReportsLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 298px;
  }

  &:hover,
  &:focus {
    color: ${myTheme.colors.hover};
  }
`;

export const TableSummaryWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
  }
`;
