import { useSelector } from 'react-redux';
import { Login } from '../components/Login/Login';

const LoginPage = () => {
  const token = useSelector(getSid)
  return (
    <>
      {<Login />}
    </>
  );
};

export default LoginPage;
