import {
  convertExpenseList,
  convertIncomesList,
} from 'components/Expenses/convert/convertCategory';
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
    formState: { errors },
  } = useFormContext();

  const categories = () => {
    if (pathname === '/home/expenses')
      return expensCategory?.map(i => ({
        label: convertExpenseList[i],
        value: i,
      }));

    if (pathname === '/home/income')
      return incomeCategory?.map(i => ({
        label: convertIncomesList[i],
        value: i,
      }));
  };

  return (
    <>
      <ErrorPositionWrapper>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value, ref } }) => {
            return (
              <Select
                ref={ref}
                styles={colourStyles}
                placeholder={'Product category'}
                options={categories()}
                value={value ? categories().find(c => c.value === value) : null}
                onChange={val => onChange(val.value)}
              />
            );
          }}
        />
        {errors?.category && (
          <ErrorMessage>{errors?.category?.message || 'Error!'}</ErrorMessage>
        )}
      </ErrorPositionWrapper>
    </>
  );
}
