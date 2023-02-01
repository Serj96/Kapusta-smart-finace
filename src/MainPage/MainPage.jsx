
import { MainSt, Top } from './MainPage.styled';
// import * as Styled from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {


  return (
    <>
      {/* <Styled.MainAuth>
        <Styled.TopAuth></Styled.TopAuth>
        <Container>{children}</Container>
      </Styled.MainAuth> */}
      <MainSt>
        <Top></Top>
        <Container>{children}</Container>
      </MainSt>
    </>
  );
};



export default MainPage;
