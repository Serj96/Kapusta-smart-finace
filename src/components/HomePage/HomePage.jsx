import { useFormik } from 'formik';
import {
  WrapperHomePage,
  WrapperImg,
  FormTitle,
  FormSubTitle,
  ButtonLink,
  ErrorMsg,
  LoginForm,
  ButtonWrapper,
} from './HomePage.styled';
import { SubmitButton } from '../Theme/Button/Button';
import Kapusta_mob from '../image/Kapusta_mob.png';
import Kapusta_tablet from '../image/Kapusta_tablet.png';
import Kapusta_desctop from '../image/Kapusta_desctop.png';
import googleIcon from '../image/googleIcon.svg'
import { Link } from 'react-router-dom';

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

const HomePage = () => {
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
    <WrapperHomePage
      style={{
        marginTop: '150px',
      }}
    >
      <WrapperImg>
        <img
          srcSet={`${Kapusta_mob} 320w, ${Kapusta_tablet} 680w, ${Kapusta_desctop}   1279w, `}
          src={Kapusta_mob}
          alt="Logo"
        />
      </WrapperImg>
      <div>
        <LoginForm onSubmit={formik.handleSubmit}>
          <FormTitle>You can log in with your Google Account:</FormTitle>
          <ButtonLink href="shorturl.at/pAB18">
            <img src={googleIcon} alt="googleIcon" />
            <span>Google</span>
          </ButtonLink>
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
          {formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}

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
            <Link to="/">Registration</Link>
          </ButtonWrapper>
        </LoginForm>
      </div>
    </WrapperHomePage>
  );
};

export default HomePage;
