import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userOperations from 'Redux/userOperations';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const setToken = token => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.common.authorization = '';
};

export const addIncome = createAsyncThunk(
  'transaction/income/add',
  async (credentials, { rejectWithValue, getState, dispatch }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
    try {
      const { data } = await axios.post('/transaction/income', credentials);
      dispatch(getIncome());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transaction/income',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
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
  async (credentials, { rejectWithValue, getState, dispatch }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
    try {
      const { data } = await axios.post('/transaction/expense', credentials);
      dispatch(getExpense());

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getExpense = createAsyncThunk(
  'transaction/expense',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
    try {
      const { data } = await axios.get('/transaction/expense');

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (transactionId, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
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
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
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
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
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
  async (date, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
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
