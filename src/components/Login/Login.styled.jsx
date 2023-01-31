import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';
import { NavLink } from 'react-router-dom';

export const LoginDiv = styled.div`
  .textunderLogo {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #52555f;
    padding-right: 100px;
    margin: 0 auto;
  }
  .logo {
    width: 183px;
  }

  .logoDiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 86px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    .textunderLogo {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
   
    .logo {
      width: 306px;
    }
    margin-left: 170px;
    margin-right: 170px;

    @media screen and (min-width: 1280px) {
    .logo {
    width: 377px;
    }

   .loginDiv {
    padding-top: 117px;
    display: flex;
    align-items: center;
    }
   .logoDiv {
    padding-left: 107px;
    margin-right: 157px;
    }
  .loginDiv {
    padding: 0;
    margin: 0;
    padding-top: 117px;
  }
  }
`;

export const LoginForm = styled.form`
  border-radius: 30px;
  background-color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  color: #52555f;
  padding-left: 20px;
  padding-right: 20px;

  .buttonGoogleRegText {
    margin-top: 32px;
  }

  .emailLabel {
    display: flex;
    margin-top: 16px;
    margin-bottom: 12px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: #000000;
  }

  .passwordLabel {
    display: flex;
    padding-top: 20px;
    margin-bottom: 12px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: #000000;
  }

  input {
    width: 240px;
    height: 52px;
    padding: 17px;
    background: #f6f7fb;
    border: none;
    border-radius: 30px;
    margin-bottom: 5px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.04em;

      color: #a6abb9;
    }

    @media (min-width: 767px) and (max-width: 1279.98px) {
      width: 229px;
    }

    @media (min-width: 1280px) {
      width: 229px;
    }
  }
  @media screen and (min-width: 767px) {
    width: 426px;
    margin: 0 auto;

    padding-left: 84px;
    padding-right: 84px;
  }
`;

export const TopTextDiv = styled.div`
  padding-top: 40px;
  flex-direction: column;
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  .topGoogleRegTextspan {
    padding-left: 3px;
  }

  @media screen and (min-width: 768px) {
    align-items: baseline;
    justify-content: center;
    flex-direction: row;

    .topGoogleRegTextspan {
      display: inline-flex;
    }
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  width: 116px;
  height: 44px;
  background: #f5f6fb;
  border-radius: 16px;
  color: #52555f;

  margin: 0 auto;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }

  .GoogleEmblem {
    display: flex;
    width: 18px;
    align-items: baseline;
    justify-content: center;
  }
`;



export const WrapperEmail = styled.div`
  margin-bottom: 20px;
  @media (min-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const ErrorMsg = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  margin-top: 2px;
  padding-left: 8px;

  letter-spacing: 0.04em;

  color: #eb5757;
`;

export const SubmitButton = styled.button`
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

export const LinkRegistr = styled(NavLink)`
  width: 50%;

  padding: 12px 14px;

  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  
  border: none;
  color: #52555f;
  background: #F5F6FB;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));


  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;
