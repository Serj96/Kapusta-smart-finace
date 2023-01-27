import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';

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

  margin: 0 auto;
  margin-top: 32px;
  @media (min-width: 767px) and (max-width: 1279.98px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const ButtonLink = styled.a`
  display: block;
  width: 122px;
  height: 40px;
  left: 99px;
  top: 339px;

  background: #f6f7fb;
  border-radius: 26px;

  margin: 0 auto;
  &:hover {
    color: ${myTheme.backgroundColors.primary};
    background-color: ${myTheme.colors.hover};
  }
`;

export const LoginForm = styled.div`
  height: 496px;
  width: 280px;
  background-color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 30px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px 20px;

  label {
    margin-top: 16px;

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
      left: 70%;
    }

    @media (min-width: 1280px) {
      position: relative;
      transform: translate(-50%, -50%);
      top: 2%;
      left: 70%;
    }
  }

  input {
    display: block;
    width: 100%;
    height: 52px;

    background: #f6f7fb;
    border-radius: 30px;
    border: none;

    margin: 0 auto;

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.04em;
      padding-left: 19px;

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
    border: none;
  }

  @media (min-width: 1280px) {
    width: 426px;
    height: 552px;
    padding: 56px 84px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 70%;
    border: none;
  }
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
