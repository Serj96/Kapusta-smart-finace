import styled from '@emotion/styled';
import down from '../images/mainImg/down.png';
import rightTop from '../images/mainImg/rightTop.svg';
import group from '../images/kapusta_background.png';
import two from '../images/mainImg/two.svg';

export const MainSt = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 820px;
  background: url(${rightTop}) top 104px right -35px no-repeat,
    url(${down}) bottom 5px left 35px no-repeat;
  position: relative;
  padding-bottom: 160px;

  @media screen and (min-width: 768px) {
    /* margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px; */
    min-height: 1024px;

    background: url(${group}) top 30px left 5px repeat-x,
      url(${two}) bottom 175px left 163px no-repeat;
  }

  /* @media (min-width: 768px) and (max-width: 1279.98px) {
    align-self: center;
  } */

  @media screen and (min-width: 1280px) {
    /* margin: 0 auto;
    padding-left: 26px;
    padding-right: 26px;
    min-height: 1024px; */
    /* padding-bottom: 0; */
    background: url(${group}) top 30px left 5px repeat-x,
      url(${two}) bottom 90px left 260px no-repeat;
  }
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 313px;
  border-bottom-left-radius: 100px;
  background: #f5f6fb;

  @media screen and (min-width: 768px) {
    background-color: #f5f6fb;
    /* margin: 0 auto; */
    height: 530px;
    box-shadow: none;
  }

  @media screen and (min-width: 1280px) {
    background-color: #f5f6fb;
    /* margin: 0 auto; */
    height: 580px;
    box-shadow: none;
  }
`;
