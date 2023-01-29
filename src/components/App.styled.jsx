import styled from '@emotion/styled';
import { myTheme } from './Theme/Theme';
export const Container = styled.div`
  background-color: ${myTheme.backgroundColors.third};
  padding: 0 20px;

  @media (min-width: 767px) and (max-width: 1279.98px) {
    padding: 0 171px;
  }

  @media (min-width: 1280px) {
    padding: 0 171px;
  }
`;
