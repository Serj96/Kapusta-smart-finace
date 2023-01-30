import styled from '@emotion/styled';

/* for custom scrollbar for webkit browser*/

// ::-webkit-scrollbar {
//     width: 6px;
// }
// ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// }
// ::-webkit-scrollbar-thumb {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// }

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

  overflow-y: scroll;
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

export const Td = styled.td`
  padding: 12px;
  text-align: left;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;

  color: #52555f;
  border-bottom: 2px solid #f5f6fb;
`;
