// import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

// const CategoryInput = () => {
// const {
//   register,
//   control,
//   formState: { errors },
// } = useFormContext();

//   return (
//     <>
//       <Controller
//         control={control}
//         name="category"
//         render={({ field }) => (
//           <Select
//             options={options}
//             onChange={date => field.onChange(date)}
//             selected={field.value}
//           />
//         )}
//       />
//     </>
//   );
// };

// export default CategoryInput;

import React, { useState } from 'react';

import Select from 'react-select';
import { register } from 'Redux/authOperaions';
import { colorStyles } from './CategoryInput.styled';
// import { colourOptions } from '../data';
// import Select from 'react-select';

const options = [
  { category: 'Transport' },
  { category: 'Products' },
  { category: 'Health' },
  { category: 'Alcohol' },
  { category: 'Entertainment' },
];

export default function CategoryInput() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, value, ref } }) => (
          <Select
            styles={colorStyles}
            placeholder="Product category"
            getOptionLabel={i => i.props.children.category}
            getOptionValue={i => i.props.children.category}
            inputRef={ref}
            onChange={i => onChange(i.props.children.category)}
            options={options.map(i => (
              <options>{i}</options>
            ))}
          />
        )}
      />
    </>
  );
}
