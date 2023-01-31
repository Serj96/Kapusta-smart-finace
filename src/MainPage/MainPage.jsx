// import { useSelector } from 'react-redux';
import * as Styled from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {
  

  return (
    <>
      {/* <Styled.MainAuth>
          <Styled.TopAuth></Styled.TopAuth>
          <Container>{children}</Container>
        </Styled.MainAuth> */}
      <Styled.MainSt>
        <Styled.Top></Styled.Top>
        <Container>{children}</Container>
      </Styled.MainSt>
    </>
  );
};



export default MainPage;
