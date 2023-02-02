import styled from '@emotion/styled';
import KapustaDesc_top from './image/KapustaDesc_top.svg';
import KapustaDesc_bottom from './image/KapustaDesc_bottom.svg';


// import { myTheme } from './Theme/Theme';
export const Container = styled.div`
  box-sizing: content-box;
  padding: 0 20px;
  position: absolute;


  @media (min-width: 767px) {
    padding: 0 171px;
  }
`;

export const KapustaBcgImgTop = styled.div`
  background-image: url(${KapustaDesc_top});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 28px;
  position: absolute;
  border-bottom-left-radius: 80px;
  background-color: #f5f6fb;
  width: 100%;
  height: 36%;

  @media (min-width: 767px) and (max-width: 1279.98px) {
    height: 78%;
  }

  @media (min-width: 1280px) {
    height: 49%;
  }
`;

export const KapustaBcgImgBottom = styled.div`
  background-image: url(${KapustaDesc_bottom});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 28px;
  position: absolute;
  
  width: 100%;
  height: 36%;

  @media (min-width: 767px) and (max-width: 1279.98px) {
    height: 78%;
  }

  @media (min-width: 1280px) {
    height: 49%;
  }
`;
