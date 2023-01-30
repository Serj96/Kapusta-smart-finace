import React from 'react';
import { useFormContext } from 'react-hook-form';
import { DescrInput } from './DescriptionInput.styled';

const DescriptionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <label>
        <DescrInput
          {...register('description')}
          type="text"
          placeholder="Product description"
        />
      </label>
    </>
  );
};

export default DescriptionInput;
