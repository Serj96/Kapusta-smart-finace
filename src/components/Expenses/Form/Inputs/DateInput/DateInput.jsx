import { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DateBtn } from './DateInput.styled';

import format from 'date-fns/format';
import {
  ErrorMessage,
  ErrorPositionWrapper,
} from '../DescriptionInput/DescriptionInput.styled';

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <DateBtn onClick={onClick} ref={ref} type="button">
    <FaRegCalendarAlt size={'20px'} />
    {value}
  </DateBtn>
));

export const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <ErrorPositionWrapper>
        <Controller
          control={control}
          name="date"
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <ReactDatePicker
              onChange={date => {
                setStartDate(date);
                return field.onChange(format(date, 'yyyy-MM-dd'));
              }}
              selected={startDate}
              dateFormat="yy.MM.dd"
              customInput={<ExampleCustomInput />}
            />
          )}
        />
        {errors?.date && (
          <ErrorMessage>{errors?.date?.message || 'Error!'}</ErrorMessage>
        )}
      </ErrorPositionWrapper>
    </>
  );
};

export default DateInput;
