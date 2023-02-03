import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  DescrInput,
  ErrorMessage,
  ErrorPositionWrapper,
} from './DescriptionInput.styled';

const DescriptionInput = () => {
  const {
    register,
    // eslint-disable-next-line
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <ErrorPositionWrapper>
        <label>
          <DescrInput
            {...register('description')}
            type="text"
            placeholder="Product description"
          />
        </label>

        {errors?.description && (
          <ErrorMessage>
            {errors?.description?.message || 'Error!'}
          </ErrorMessage>
        )}
      </ErrorPositionWrapper>
    </>
  );
};

export default DescriptionInput;
