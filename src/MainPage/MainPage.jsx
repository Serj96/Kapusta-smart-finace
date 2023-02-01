// import { useSelector } from 'react-redux';
// import {} from '../Redux/authOperaions'
import * as Styled from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {
  // const isLoggedIn = useSelector();

  return (
    <>
      <Styled.MainSt>
        <Styled.Top></Styled.Top>
        <Container>{children}</Container>
      </Styled.MainSt>
      {/* {isLoggedIn && (
        <Styled.MainAuth>
          <Styled.TopAuth></Styled.TopAuth>
          <Container>{children}</Container>
        </Styled.MainAuth>
      )}
      {!isLoggedIn && (
        <Styled.MainSt>
          <Styled.Top></Styled.Top>
          <Container>{children}</Container>
        </Styled.MainSt>
      )} */}
    </>
  );
};



export default MainPage;
