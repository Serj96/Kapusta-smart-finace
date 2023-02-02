import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import { ClearButton, SubmitButton } from 'components/Theme/Button/Button';
import DescriptionInput from './Inputs/DescriptionInput/DescriptionInput';
import AmountInput from './Inputs/AmountInput/AmountInput';
import CategoryInput from './Inputs/CategoryInput/CategoryInput';
import { useLocation, useNavigate } from 'react-router-dom';
import DateInput from './Inputs/DateInput/DateInput';
import { BackLink, BtnWrapper, FormStyle, InputsWrapper } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, addIncome } from 'Redux/transactionOperation';
import { getDateInput } from 'Redux/kapustaSlice';

const schema = yup
  .object({
    description: yup.string().required('This field is required'),
    amount: yup
      .number()
      .integer()
      .min(1)
      .max(1000000000)
      .required('This field is required'),
    category: yup.string().required('Select category'),
  })
  .required();

export const Form = () => {
  const dateInput = useSelector(getDateInput);

  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      description: '',
      category: '',
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { isSubmitSuccessful },
  } = methods;

  const onSubmit = data => {
    const formData = {
      date: dateInput,
      ...data,
    };

    const key = location.pathname;

    if (key === '/home/expenses') dispatch(addExpense(formData));

    if (key === '/home/income') dispatch(addIncome(formData));

    setValue('category', null);

    reset();

    if (isMobScreen && isSubmitSuccessful) return navigate('/home');
  };

  return (
    <>
      {isMobScreen && (
        <BackLink to={'/home'}>
          <FaArrowLeft width={'18px'} height={'12px'} />
        </BackLink>
      )}
      <FormProvider {...methods}>
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            {isTabScreen && <DateInput />}
            <DescriptionInput />
            <CategoryInput />
            <AmountInput />
          </InputsWrapper>
          <BtnWrapper>
            <SubmitButton type={'submit'}>Input</SubmitButton>
            <ClearButton reset={reset} />
          </BtnWrapper>
        </FormStyle>
      </FormProvider>
    </>
  );
};

export default Form;
