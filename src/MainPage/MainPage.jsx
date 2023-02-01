
import * as Styled from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {


  return (
    <>
      <Styled.MainSt>
        <Styled.Top></Styled.Top>
        <Container>{children}</Container>
      </Styled.MainSt>
    </>
  );
};



export default MainPage;
