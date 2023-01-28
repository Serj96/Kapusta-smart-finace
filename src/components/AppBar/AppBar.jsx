import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import logo from '../../images/logo.svg';
import { StyledHeader } from './AppBar.styled';
// import { selectLogIn } from 'Redux/selectors-nav';

export const AppBar = () => {
  // const isLogIn = useSelector(selectLogIn);

  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {/* {isLogIn && */}
      <AuthNav />
      {/* } */}
    </StyledHeader>
  );
};
