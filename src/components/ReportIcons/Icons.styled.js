import styled from '@emotion/styled';

export const ReportExpenseListItemSvg = styled.svg`
  fill: #071f41;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #ff751d;
  }
`;

export const ReportBackgroundSvg = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f6fb;
  border-radius: 40px;
  margin-bottom: 12px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ffdac0;
  }

  @media (max-width: 767.98px) {
    width: 57px;
    height: 41px;
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    width: 60px;
    height: 45px;
  }

  @media (min-width: 1280px) {
    width: 63px;
    height: 47px;
  }
`;

export const ReportBackgroundIncomeSvg = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  background-color: #f5f6fb;
  border-radius: 40px;

  &:hover,
  &:focus {
    background-color: #ffdac0;
  }

  @media (max-width: 767.98px) {
    width: 57px;
    height: 41px;
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    width: 60px;
    height: 45px;
  }

  @media (min-width: 1280px) {
    width: 63px;
    height: 47px;
  }
`;
