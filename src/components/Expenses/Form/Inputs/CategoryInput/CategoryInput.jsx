import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Select from 'react-select';
import {
  getExpensesCategory,
  getIncomeCategory,
  getSid,
} from 'Redux/kapustaSlice';
import {
  getExpenseCategories,
  getIncomeCategories,
} from 'Redux/transactionOperation';
import {
  ErrorMessage,
  ErrorPositionWrapper,
} from '../DescriptionInput/DescriptionInput.styled';
import { colourStyles } from './CategoryInput.styled';

export default function CategoryInput() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const expensCategory = useSelector(getExpensesCategory);
  const incomeCategory = useSelector(getIncomeCategory);
  const sid = useSelector(getSid);

  useEffect(() => {
    if (sid && pathname === '/home/expenses') dispatch(getExpenseCategories());

    if (sid && pathname === '/home/income') dispatch(getIncomeCategories());
  }, [dispatch, pathname, sid]);

  const {
    control,
    // eslint-disable-next-line
    formState: { errors },
  } = useFormContext();

  const categories = () => {
    if (pathname === '/home/expenses')
      return expensCategory?.map(i => <options>{i}</options>);

    if (pathname === '/home/income')
      return incomeCategory?.map(i => <options>{i}</options>);
  };

  return (
    <>
      <ErrorPositionWrapper>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value, ref } }) => (
            <Select
              styles={colourStyles}
              placeholder="Product category"
              getOptionLabel={i => i.props.children}
              getOptionValue={i => i.props.children}
              inputRef={ref}
              onChange={i => onChange(i.props.children)}
              options={categories()}
            />
          )}
        />
        {errors?.category && (
          <ErrorMessage>{errors?.category?.message || 'Error!'}</ErrorMessage>
        )}
      </ErrorPositionWrapper>
    </>
  );
}
