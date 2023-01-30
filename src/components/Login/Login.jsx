import { useFormik } from 'formik';
import {
  FormTitle,
  FormSubTitle,
    ButtonLink,
  WrapperEmail,
  ErrorMsg,
  LoginForm,
  ButtonWrapper,
    LinkRegistr,
} from './Login.styled';
import { SubmitButton } from '../Theme/Button/Button';
import googleIcon from '../image/googleIcon.svg';



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
    const formik = useFormik({
      initialValues: {
        email: '',
        pasword: '',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <FormTitle>You can log in with your Google Account:</FormTitle>
      <ButtonLink href="shorturl.at/pAB18">
        <img src={googleIcon} alt="googleIcon" />
        <span>Google</span>
      </ButtonLink>
      <FormSubTitle>
        Or log in using an email and password, after registering:
      </FormSubTitle>
      <WrapperEmail>
        <label htmlFor="email">Email :</label>
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
      </WrapperEmail>
      <label htmlFor="password">Password :</label>
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
        <SubmitButton type={'submit'}>Log In</SubmitButton>
        
          <LinkRegistr to="/" styled={{ textDecoration: "none" }}>Registration</LinkRegistr>
        
      </ButtonWrapper>
    </LoginForm>
  );
};
