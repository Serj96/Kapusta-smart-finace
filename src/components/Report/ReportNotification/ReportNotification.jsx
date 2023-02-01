import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect } from 'react';
import { getSid, getUserBalance } from 'Redux/kapustaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeBalance, getUser } from 'Redux/userOperations';

import {
  ReportCurrentBalanceWrapper,
  ReportCurrentBalanceText,
  ReportCurrentAmountWrapper,
  ReportCurrentAmount,
  ReportCurrentConfirmWrapper,
} from './ReportBalance.styled';

const schema = yup
  .object({
    newBalance: yup
      .number()
      .min(1)
      .max(1000000000)
      .required('please enter your balance'),
  })
  .required();

export default function ReportNotification() {
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
    // eslint-disable-next-line
    formState: { errors },
  } = useForm({
    defaultValues: {
      newBalance: balance,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('сабміт');
    dispatch(changeBalance(data));
    reset();
  };

  return (
    <ReportCurrentBalanceWrapper onSubmit={handleSubmit(onSubmit)}>
      <ReportCurrentBalanceText>Balance:</ReportCurrentBalanceText>
      <ReportCurrentAmountWrapper>
        <ReportCurrentAmount
          {...register('newBalance')}
          name="newBalance"
          type="text"
          placeholder={`${balance}.00 UAH`}
        />
        {/* {errors?.amount && (
          <div style={{ color: '#ff4545' }}>
            this field is required and must be a number
          </div>
        )} */}
      </ReportCurrentAmountWrapper>
      <ReportCurrentConfirmWrapper type="submit">
        Confirm
      </ReportCurrentConfirmWrapper>
    </ReportCurrentBalanceWrapper>
  );
}
