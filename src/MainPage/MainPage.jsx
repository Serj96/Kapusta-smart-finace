
import { MainSt, Top } from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {


  return (
    <>
      <MainSt>
        <Top></Top>
        <Container>{children}</Container>
      </MainSt>
    </>
  );
};



export default MainPage;
