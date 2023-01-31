// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/feature/auth-selectors';
// import PropTypes from 'prop-types';
import * as Styled from './MainPage.styled';
import Container from '../Container/Container';

export const MainPage = ({ children }) => {
  

  return (
<>
        <Styled.MainAuth>
          <Styled.TopAuth></Styled.TopAuth>
          <Container>{children}</Container>
        </Styled.MainAuth>
      
    </>
  );
};



export default MainPage;
