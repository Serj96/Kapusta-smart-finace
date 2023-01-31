import React from 'react';
import { useForm } from 'react-hook-form';
import DarkModal from 'components/DarkModal/DarkModal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AmountInput,
  BalanceFormWrapper,
  ConfirmBtn,
  Form,
  TitleBalance,
} from './Balance.styled';
import { useEffect } from 'react';
import { getSid, getUserBalance } from 'Redux/kapustaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeBalance, getUser } from 'Redux/userOperations';

const schema = yup
  .object({
    newBalance: yup
      .number()
      .min(1)
      .max(1000000000)
      .required('please enter your balance'),
  })
  .required();

const Balance = () => {
  const dispatch = useDispatch();
  const sid = useSelector(getSid);
  const balance = useSelector(getUserBalance);

  useEffect(() => {
    if (sid) dispatch(getUser());
  }, [dispatch, sid]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newBalance: balance,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(changeBalance(data));
    reset();
  };

  return (
    <>
      <BalanceFormWrapper>
        <TitleBalance>Balance:</TitleBalance>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AmountInput
            {...register('newBalance')}
            name="newBalance"
            type="text"
            placeholder={`${balance}.00 UAH`}
          />
          <DarkModal />
          {errors?.amount && (
            <div style={{ color: '#ff4545' }}>
              this field is required and must be a number
            </div>
          )}
          <ConfirmBtn type="submit">Confirm</ConfirmBtn>
        </Form>
      </BalanceFormWrapper>
    </>
  );
};

export default Balance;
