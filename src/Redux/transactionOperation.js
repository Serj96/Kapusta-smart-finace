import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userOperations from 'Redux/userOperations';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const addIncome = createAsyncThunk(
  'transaction/income/add',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transaction/income', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transaction/income',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/income');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addExpense = createAsyncThunk(
  'transaction/expense/add',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transaction/expense', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getExpense = createAsyncThunk(
  'transaction/expense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/expense');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(`/transaction/${transactionId}`);
      dispatch(getExpense());
      dispatch(getIncome());
      dispatch(userOperations.getUser());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  'transaction/income-categories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/income-categories');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getExpenseCategories = createAsyncThunk(
  'transaction/expense-categories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/expense-categories');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTransactionsByPeriod = createAsyncThunk(
  'transaction/period-data',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/transaction/period-data?date=2023-${date}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const transactionOperations = {
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  deleteTransaction,
  getIncomeCategories,
  getExpenseCategories,
  getTransactionsByPeriod,
};

export default transactionOperations;
