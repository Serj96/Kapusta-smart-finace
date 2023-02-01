
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { myTheme } from "components/Theme/Theme";
export const NotFoundLink = styled(Link)`
  padding: 12px 15px;
margin-top:66px;
   display: flex;
   justify-content: center;
   align-items: center;
    color: white;
    background-color: grey;
  border: 2px solid #f6f7fc;
  border-radius: 16px;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color:${myTheme.colors.hover};
  }
`;
export const ParentContainer = styled.div` width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;`;
export const ContainerNotFound = styled.div` width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -125px 0 0 -125px;`

export const Img = styled.img`  img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        border: none;
    }`