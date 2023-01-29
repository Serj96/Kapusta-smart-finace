import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

export const WrapperHomePage = styled.div`
  @media (min-width: 767px) and (max-width: 1279.98px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const WrapperImg = styled.div`
  margin-bottom: 50px;
  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

export const FormTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 40px;
  margin-bottom: 16px;
  color: #52555f;
`;

export const FormSubTitle = styled.h3`
  display: block;
  width: 75%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  color: #52555f;

  margin-left: 10px;
  margin-top: 32px;
  @media (min-width: 767px) and (max-width: 1279.98px) {
    margin-left: 73px;
    width: 50%;
  }

  @media (min-width: 1280px) {
    margin-left: 73px;
    width: 50%;
  }
`;

export const ButtonLink = styled.a`
  display: block;
  gap: 10px;
  justify-content: center;

  width: 122px;
  height: 40px;
  padding: 0 auto;

  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #000000;
  background: #f6f7fb;
  border-radius: 26px;

  span {
    

    @media (min-width: 767px) and (max-width: 1279.98px) {
    }

    @media (min-width: 1280px) {
    }
  }

  margin: 0 auto;
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;

export const LoginForm = styled.form`
  height: 496px;
  width: 280px;
  background-color: #ffffff;

  border-radius: 30px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px 20px;

  label {
    margin-top: 16px;
    margin-left: 10px;
    display: block;

    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.04em;

    margin-bottom: 12px;

    @media (min-width: 767px) and (max-width: 1279.98px) {
      position: relative;
      transform: translate(-50%, -50%);
      top: 2%;
      left: 64%;
    }

    @media (min-width: 1280px) {
      position: relative;
      transform: translate(-50%, -50%);
      top: 2%;
      left: 64%;
    }
  }

  input {
    display: block;
    width: 240px;
    height: 52px;

    background: #f6f7fb;
    border-radius: 30px;
    border: none;
    padding-left: 20px;

    margin: 0 auto;

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.04em;

      color: #a6abb9;
    }

    @media (min-width: 767px) and (max-width: 1279.98px) {
      width: 259px;
    }

    @media (min-width: 1280px) {
      width: 259px;
    }
  }
  @media (min-width: 767px) and (max-width: 1279.98px) {
    width: 426px;
    height: 552px;
    padding: 56px 84px;
  }

  @media (min-width: 1280px) {
    width: 426px;
    height: 552px;
    padding: 56px 84px;
    
  }
`;

export const ErrorMsg = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  margin-top: 2px;
  padding-left: 8px;

  letter-spacing: 0.04em;

  color: #eb5757;

  @media (min-width: 767px) and (max-width: 1279.98px) {
    margin-top: 2px;
    padding-left: 70px;
  }

  @media (min-width: 1280px) {
    margin-top: 2px;
    padding-left: 70px;
  }
`;

export const LinkRegistr = styled.div`
  display: flex;
  border: 2px solid #f6f7fc;
  justify-content: center;
  /* text-decoration: none; */
  border-radius: 16px;
  background-color: inherit;
  cursor: pointer;
  text-transform: uppercase;
  
  width: 122px;
  height: 40px;
  padding: 0 auto;

  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #000000;
  background: #f6f7fb;
  border-radius: 26px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;

  @media (min-width: 767px) and (max-width: 1279.98px) {
    margin-top: 57px;
  }
`;
