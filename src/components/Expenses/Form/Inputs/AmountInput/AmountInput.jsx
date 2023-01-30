import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaCalculator } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import { AmounInput, AmountWrapper, IconBtn } from './AmountInput.styled';

const AmountInput = () => {
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });
  let placeholder = '00.00 UAH';

  if (isTabScreen) placeholder = '0,00';

  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <AmountWrapper>
        <AmounInput
          {...register('amount')}
          type="text"
          placeholder={placeholder}
        />
        <IconBtn type="button">
          <FaCalculator size={'20px'} />
        </IconBtn>
      </AmountWrapper>
    </>
  );
};

export default AmountInput;
