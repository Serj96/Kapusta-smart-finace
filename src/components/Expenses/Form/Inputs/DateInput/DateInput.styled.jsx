import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const DateBtn = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${myTheme.colors.primary};
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 44px;
  }
`;

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767.98px) {
    margin-bottom: 52px;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 100px;
`;
