import styled from '@emotion/styled';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NameFirstLetter = styled.div`
  line-height: 1.17;
  font-size: 12px;
  font-weight: 700;
  padding: 9px 12px;
  color: #52555f;
  background-color: #f5f6fa;
  border-radius: 50%;
`;

export const Mail = styled.p`
  display: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  line-height: 1.17;
  color: #52555f;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const ExitMobile = styled.img`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Decor = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 36px;
    width: 1px;

    background-color: #e0e5eb;
  }
`;

export const ExitTablet = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    font-size: 12px;
    line-height: 1.17;
    color: #52555f;
  }
`;
