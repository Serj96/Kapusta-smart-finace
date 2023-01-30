import styled from '@emotion/styled';

export const SummaryWrapper = styled.div`
  width: 230px;
  background-color: #f5f6fb;
  border: 2px solid #ffffff;
  border-radius: 16px 16px 16px 0;
  overflow-y: scroll;

  @media screen and (max-width: 1279.98px) {
    height: 278px;
  }
`;

export const SummaryTitle = styled.h3`
  padding: 12px 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-bottom: 2px solid #ffffff;

  color: #000000;
`;

export const SummarryItem = styled.li`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  border-bottom: 2px solid #ffffff;
`;
