import { useFormik } from 'formik';
import {
  ErrorMsg,
  LoginForm,
  ButtonWrapper,
  SubmitButton,
  LinkRegistr,
  LoginDiv,
  TopTextDiv,
  GoogleBtn,
} from './Registration.styled';
import googleIcon from '../../images/googleIcon.svg';
import kapustaSvg from '../../images/loginPageKAPUSTA.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/authOperaions';
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

export const Registration = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      dispath(register(values));
      navigate('/home');
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
        <GoogleBtn
          // https://team-project-kapusta/api/auth/google
          href="*"
        >
          <img src={googleIcon} className="GoogleEmblem" alt="google" />
          Google
        </GoogleBtn>
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
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Password"
        />
        {formik.errors.password ? (
          <ErrorMsg>{formik.errors.password}</ErrorMsg>
        ) : null}
        <ButtonWrapper>
          <SubmitButton type={'submit'}>Registration</SubmitButton>
          <LinkRegistr to="/home" styled={{ textDecoration: 'none' }}>
            Log In
          </LinkRegistr>
        </ButtonWrapper>
      </LoginForm>
    </LoginDiv>
  );
};
