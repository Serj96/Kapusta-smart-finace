import { useFormik } from 'formik';
import {
  ErrorMsg,
  LoginForm,
  ButtonWrapper,
  SubmitButton,
  LinkRegistr,
  LoginDiv,
  TopTextDiv,
} from './Login.styled';
import kapustaSvg from '../../images/loginPageKAPUSTA.svg';
import { useDispatch } from 'react-redux';
import { login } from 'Redux/authOperaions';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'This is a required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'This is a required field';
  }

  if (!values.password) {
    errors.password = 'This is a required field';
  }
  return errors;
};

export const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(login(values));
    },
  });
  return (
    <LoginDiv>
      <div className="logoDiv">
        <img className="logo" src={kapustaSvg} alt="kapusta"></img>
        <p className="textunderLogo">Smart Finance</p>
      </div>
      <LoginForm onSubmit={formik.handleSubmit}>
        <TopTextDiv>
          <p className="topGoogleRegText">You can log in with your Google</p>
          <span className="topGoogleRegTextspan"> Account:</span>
        </TopTextDiv>
        <p className="buttonGoogleRegText">
          Or log in using an email and password, after registering:
        </p>
        <label className="emailLabel" htmlFor="email">
          Email :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="your@email.com"
        />
        {formik.errors.email ? (
          <ErrorMsg>{formik.errors.email}</ErrorMsg>
        ) : null}
        <label className="passwordLabel" htmlFor="password">
          Password :
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Password"
        />
        {formik.errors.password ? (
          <ErrorMsg>{formik.errors.password}</ErrorMsg>
        ) : null}
        <ButtonWrapper>
          <SubmitButton type={'submit'}>Log In</SubmitButton>
          <LinkRegistr to="/home/register">Registration</LinkRegistr>
        </ButtonWrapper>
      </LoginForm>
    </LoginDiv>
  );
};
