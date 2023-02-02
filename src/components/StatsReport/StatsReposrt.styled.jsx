import styled from '@emotion/styled';

export const StatsWrapper = styled.div`
  width: 280px;
  min-height: 500px;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    width: 704px;
    display: flex;
    justify-content: center;
    padding: 32px 0 60px 0;
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border: solid 1px transparent;
    border-radius: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
  }
`;
