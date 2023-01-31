import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Window = styled.div`
  position: fixed;
  top: 250px;
  left: 50%;

  max-height: 163px;
  max-width: 280px;

  border-radius: 30px;

  width: 100%;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    max-width: 288px;
    top: 160px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 288px;
    top: 130px;
    left: 39%;
  }

  &:before {
    content: '';
    position: absolute;

    width: 0;
    height: 0;

    top: -9%;
    left: 17%;

    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #1d346a;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  line-height: 1.43;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 29px;
    padding-right: 29px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;

  line-height: 1.33;

  padding-bottom: 49px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: 768px) {
    padding-left: 29px;
    padding-right: 29px;
  }
`;
