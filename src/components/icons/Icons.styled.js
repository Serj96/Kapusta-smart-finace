import styled from '@emotion/styled';

export const ReportExpenseListItemSvg = styled.svg`
  margin-bottom: 5px;
  fill: #071f41;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #ff751d;
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
