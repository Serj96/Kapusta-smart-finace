import styled from '@emotion/styled';

export const ReportExpenseListItemSvg = styled.svg`
  @media (max-width: 767.98px) {
    margin-bottom: 5px;
    fill: #071f41;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      fill: #ff751d;
    }
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    margin-top: 0;
    margin-bottom: 5px;
    margin-right: 0;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    margin-bottom: 5px;
    margin-right: 0;

    color: #52555f;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 0.9;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;

export const RectangleBackground = styled.div`
  @media (max-width: 767.98px) {
    width: 59px;
    height: 46px;
    background-color: green;
    border-radius: 20px;
  }
`;
