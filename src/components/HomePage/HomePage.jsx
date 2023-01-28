import { useFormik } from 'formik';
import {
  FormTitle,
  FormSubTitle,
  ButtonLink,
  LoginForm,
  ButtonWrapper,
} from './HomePage.styled';
import { SubmitButton } from '../Theme/Button/Button';

const HomePage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      pasword: '',
    },

    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <FormTitle>You can log in with your Google Account:</FormTitle>
      <ButtonLink href="shorturl.at/pAB18">Google</ButtonLink>
      <FormSubTitle>
        Or log in using an email and password, after registering:
      </FormSubTitle>
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="your@email.com"
      />
      <label htmlFor="password">Password :</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Password"
      />
      <ButtonWrapper>
        <SubmitButton type={'submit'}>Log In</SubmitButton>
        <SubmitButton type={'submit'}>Registration</SubmitButton>
      </ButtonWrapper>
    </LoginForm>
  );
};

export default HomePage;
