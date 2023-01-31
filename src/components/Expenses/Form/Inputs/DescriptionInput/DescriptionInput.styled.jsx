import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const DescrInput = styled.input`
  width: 280px;
  height: 44px;
  padding: 20px;
  background-color: transparent;
  border: 2px solid ${myTheme.backgroundColors.primary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:focus-visible {
    outline: none;
  }

  ::placeholder {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;

    color: #c7ccdc;
  }

  @media screen and (min-width: 768px) {
    width: 184px;
    border: 2px solid ${myTheme.backgroundColors.secondary};
    border-radius: 16px 0 0 0;
  }

  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;
