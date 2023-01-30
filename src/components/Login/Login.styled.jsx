import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';
import { NavLink } from 'react-router-dom';

export const LoginForm = styled.form`
  height: 416px;
  width: 240px;
  background-color: #ffffff;
  padding: 40px 20px;

  border-radius: 30px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  label {
    margin-top: 16px;

    font-size: 16px;
    font-weight: 500;
    
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.04em;

    margin-bottom: 12px;

    @media (min-width: 767px) and (max-width: 1279.98px) {
    }

    @media (min-width: 1280px) {
    }
  }

  input {
    display: block;
    width: 220px;
    height: 52px;

    background: #f6f7fb;
    border-radius: 30px;
    border: none;
    padding-left: 20px;

    margin-top: 12px;

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
  @media (min-width: 767px) and (max-width: 1279.98px) {
    width: 258px;
    height: 440px;
    padding: 56px 84px;
  }

  @media (min-width: 1280px) {
    width: 258px;
    height: 440px;
    padding: 56px 84px;
  }
`;

export const FormTitle = styled.h3`
  padding: 0 20px;
  
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;

  margin-bottom: 16px;
  margin-top: 0px;
  color: #52555f;
  @media (min-width: 767px) and (max-width: 1279.98px) {
    margin-bottom: 20px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    padding: 0;
  }
`;

export const ButtonLink = styled.a`
  gap: 10px;
  justify-content: center;

  height: 40px;
  padding: 0 auto;

  text-decoration: none;

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
  }

  margin: 0 auto;
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;

export const FormSubTitle = styled.h3`
  padding-right: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  color: #52555f;

  margin-top: 32px;
`;

export const WrapperEmail = styled.div`
  margin-bottom: 20px;
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
