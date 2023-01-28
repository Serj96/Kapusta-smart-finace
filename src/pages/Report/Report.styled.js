import styled from '@emotion/styled';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ReportArrowLeft = styled(RiArrowLeftSLine)`
  fill: #ff751d;
`;

export const ReportArrowRight = styled(RiArrowRightSLine)`
  fill: #ff751d;
`;

export const ReportExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0;
  margin-bottom: 20px;
`;

export const ReportExpenseText = styled.p`
  color: #000000;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  @media (max-width: 767.98px) {
    margin: 0 20px 0 20px;
  }

  @media (min-width: 768px) {
    margin: 0 15px 0 15px;
  }
`;

export const ReportExpenseList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;

  margin: 0 auto 32px auto;
  padding-left: 0;

  background: #ffffff;

  @media (min-width: 768px) {
    margin-bottom: 0;

    width: 623px;
    height: 268px;
  }
`;

export const ReportExpenseListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;

  @media (max-width: 767.98px) {
    width: calc((100% - 22px) / 3);
  }

  @media (min-width: 768px) {
    width: calc((100% - 30px) / 6);
  }
`;

export const ReportExpenseListItemAmount = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  margin-right: 0;

  color: #52555f;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ReportExpenseListItemText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;

  color: #52555f;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 0.9;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const ReportExpenseListWrapper = styled.div`
  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 0;

    width: 704px;
    height: 328px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;

    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }

  @media (min-width: 1280px) {
    width: 1034px;
    height: 328px;
  }
`;
