import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AmountInput,
  BalanceFormWrapper,
  ConfirmBtn,
  Form,
  TitleBalance,
} from './Balance.styled';

const schema = yup
  .object({
    balance: yup
      .number()
      .min(1)
      .max(1000000000)
      .required('please enter your balance'),
  })
  .required();

const Balance = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const onSubmit = data => {
    console.log('balance:', data);
  };

  return (
    <>
      <BalanceFormWrapper>
        <TitleBalance>Balance:</TitleBalance>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AmountInput
            {...register('balance')}
            type="text"
            placeholder="00.00 UAH"
          />
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
