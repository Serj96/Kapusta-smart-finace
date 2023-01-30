import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  margin: 16px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3px 6px;
  width: 24px;
  height: 24px;
  color: ${myTheme.colors.hover};
`;

export const FormStyle = styled.form`
  /* display: flex;
  align-items: center;
  flex-direction: column;
*/
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
