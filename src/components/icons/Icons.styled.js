import styled from '@emotion/styled';
import RectangleAlcohol from './RectangleAlcohol';

export const ReportExpenseListItemSvg = styled.svg`
  @media (max-width: 767.98px) {
    margin-bottom: 5px;
    fill: #071f41;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* background-image: url('./RectangleAlcohol');
    background-image: url(RectangleAlcohol); */

    &:hover,
    &:focus {
      fill: #ff751d;
    }
  }
`;
