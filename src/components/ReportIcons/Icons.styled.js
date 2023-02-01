import styled from '@emotion/styled';
// import { ReportExpenseListItemBackground } from 'pages/Report/Report.styled';

export const ReportExpenseListItemSvg = styled.svg`
  margin-bottom: 8px;
  fill: #071f41;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus ReportExpenseListItemBackground {
    background-color: #ffdac0;
  }
`;

export const RectangleBackground = styled.div`
  @media (max-width: 767.98px) {
    width: 59px;
    height: 46px;
    background-color: green;
    border-radius: 20px;
  }
`;
