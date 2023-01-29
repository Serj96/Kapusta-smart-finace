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
  cursor: pointer;
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;

export const Out = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 34px;
  color: ${myTheme.backgroundColors.primary};
  background-color: ${myTheme.colors.hover};
  border: 2px solid #f6f7fc;
  border-radius: 16px;
  cursor: pointer;
`;
