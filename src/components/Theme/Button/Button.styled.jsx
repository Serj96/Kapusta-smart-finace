import styled from '@emotion/styled';
import { myTheme } from '../Theme';
export const Button = styled.button`
  width: 50%;

  padding: 12px 29px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;

  color: #52555f;
  background: #f5f6fb;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;
