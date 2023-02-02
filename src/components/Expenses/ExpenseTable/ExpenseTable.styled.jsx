import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    width: 746px;
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TableH = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid #f5f6fb;
  border-radius: 16px 16px 0 0;
  background-color: #f5f6fb;
`;

export const TableC = styled.div`
  height: 344px;
  overflow-x: auto;
  margin-top: 0px;
  border: 2px solid #f5f6fb;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f6fb;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #ff751d;
  }
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;

const color = ({ path }) => {
  switch (path) {
    case '/home/expenses':
      return '#E7192E';

    case '/home/income':
      return '#407946';
    default:
      return '#52555f';
  }
};

export const Td = styled.td`
  padding: 12px;
  text-align: left;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  /* color: #52555f; */
  border-bottom: 2px solid #f5f6fb;

  color: ${color};

  &:last-child {
    font-weight: 700;
  }
`;
