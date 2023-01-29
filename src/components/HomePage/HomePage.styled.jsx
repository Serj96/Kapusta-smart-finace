import styled from '@emotion/styled';

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

