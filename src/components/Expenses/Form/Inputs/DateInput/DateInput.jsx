import { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DateBtn } from './DateInput.styled';

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <DateBtn className="example-custom-input" onClick={onClick} ref={ref}>
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
    <Controller
      control={control}
      name="date"
      render={({ field }) => (
        <ReactDatePicker
          onChange={date => field.onChange(date)}
          selected={startDate}
          // onChange={date => setStartDate(date)}
          customInput={<ExampleCustomInput />}
        />
      )}
    ></Controller>
  );

  // return (
  //   <>

  //      <FaRegCalendarAlt size={'20px'} width="20px" height={'20px'} />
  //     <Controller
  //       control={control}
  //       name="date"
  //       render={({ field }) => (
  //         <ReactDatePicker
  //           placeholderText="Select date"
  //           onChange={date => field.onChange(date)}
  //           selected={field.value}
  //         />
  //       )}
  //     />
  //   </>
  // );
};

export default DateInput;
