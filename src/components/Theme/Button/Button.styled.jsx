import styled from '@emotion/styled';
import { myTheme } from '../Theme';
export const Button = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 34px;
  color: ${myTheme.colors.primary};
  border: 2px solid #f6f7fc;
  border-radius: 16px;
  background-color: inherit;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }

  @media screen and (max-width: 767.98px) {
    border: 2px solid transparent;
    box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  }
`;
