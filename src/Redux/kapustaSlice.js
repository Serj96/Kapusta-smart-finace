import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refresh, register } from 'Redux/authOperaions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  addExpense,
  addIncome,
  deleteTransaction,
  getExpense,
  getExpenseCategories,
  getIncome,
  getIncomeCategories,
  getTransactionsByPeriod,
} from './transactionOperation';
import { changeBalance, getUser } from './userOperations';
const initialState = {
  auth: {
    user: { email: null, id: null },
    userData: {
      balance: 100738,
      transactions: [],
      incomes: {
        incomes: [
          {
            description: 'My',
            amount: 100,
            date: '2023-01-28',
            category: 'Salary',
          },
          {
            description: 'Wife',
            amount: 200,
            date: '2023-01-29',
            category: 'Advance',
          },
          {
            description: 'Son',
            amount: 307,
            date: '2023-01-25',
            category: 'Win',
          },
          {
            description: 'My',
            amount: 400,
            date: '2023-01-22',
            category: 'Premium',
          },
          {
            description: 'Grenny',
            amount: 500,
            date: '2023-01-21',
            category: 'Pension',
          },
          {
            description: 'Cryptocurrency',
            amount: 500,
            date: '2023-01-21',
            category: 'Outher',
          },
        ],
        monthsStats: [],
      },
      expenses: {
        expenses: [
          {
            description: 'Rom',
            amount: 10,
            date: '2023-01-01',
            category: 'Alcohol',
          },
          {
            description: 'Banana',
            amount: 20,
            date: '2022-04-04',
            category: 'Products',
          },
          {
            description: 'Tablet',
            amount: 30,
            date: '2022-04-03',
            category: 'Health',
          },
          {
            description: 'Cinema',
            amount: 40,
            date: '2023-01-17',
            category: 'Entertainment',
          },
          {
            description: 'Taxi',
            amount: 50,
            date: '2022-12-18',
            category: 'Transport',
          },
          {
            description: 'Cleaning',
            amount: 50,
            date: '2024-04-18',
            category: 'Housing',
          },
          {
            description: 'Car repair',
            amount: 55,
            date: '2022-11-09',
            category: 'Technique',
          },
          {
            description: 'Payment of utility services',
            amount: 50,
            date: '2023-01-07',
            category: 'Communal, communication',
          },
          {
            description: 'Fitness',
            amount: 50,
            date: '2022-03-16',
            category: 'Sports, hobbies',
          },
          {
            description: 'IT-courses',
            amount: 50,
            date: '2022-06-12',
            category: 'Education',
          },
          {
            description: 'Сharity',
            amount: 50,
            date: '2023-01-23',
            category: 'Other',
          },
        ],
        monthsStats: [],
      },
      category: {
        income: [
          'Alcohol',
          'Products',
          'Health',
          'Entertainment',
          'Transport',
          'Housing',
          'Technique',
          'Communal, communication',
          'Sports, hobbies',
          'Education',
          'Other',
        ],
        expense: ['Outher', 'Pension', 'Premium', 'Win', 'Advance', 'Salary'],
      },
      periodData: [],
    },
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  sid: null,
  error: null,
  loading: false,
};
export const kapustaSlice = createSlice({
  name: 'kapusta',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.auth.userData.balance = action.payload.userData.balance;
      state.auth.userData.transactions = action.payload.userData.transactions;
      state.auth.email = action.payload.email;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [logOut.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => {
      state.auth.user = { email: null, id: null };
      state.sid = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [refresh.pending]: state => {
      state.error = null;
      state.loading = true;
    },
    [refresh.fulfilled]: (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.newSid;
    },
    [refresh.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getIncome.pending]: state => {
      state.error = null;
      state.loading = true;
    },
    [getIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.incomes.incomes = action.payload.incomes;
      state.auth.userData.incomes.monthsStats = action.payload.monthsStats;
    },
    [getIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addIncome.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [addIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.balance = action.payload.newBalance;
      state.auth.userData.incomes.incomes = [
        ...state.auth.userData.incomes.incomes,
        action.payload.transaction,
      ];
      state.auth.userData.incomes.monthsStats = action.payload.monthsStats;
    },
    [addIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getExpense.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.expenses.expenses = action.payload.expenses;
    },
    [getExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addExpense.pending]: state => {
      state.error = null;
      state.loading = true;
    },
    [addExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.balance = action.payload.newBalance;
      state.auth.userData.expenses.expenses = [
        ...state.auth.userData.expenses.expenses,
        action.payload.transaction,
      ];
    },
    [addExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTransaction.pending]: (state, action) => {
      state.error = null;
      state.loading = true;
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.balance = action.payload.newBalance;
    },
    [deleteTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getIncomeCategories.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getIncomeCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.auth.userData.category.income = action.payload;
      state.error = null;
    },
    [getIncomeCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getExpenseCategories.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getExpenseCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.auth.userData.category.expense = action.payload;
      state.error = null;
    },
    [getExpenseCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getTransactionsByPeriod.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getTransactionsByPeriod.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.periodData = action.payload;
    },
    [getTransactionsByPeriod.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [changeBalance.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [changeBalance.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.userData.balance = action.payload.newBalance;
    },
    [changeBalance.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.auth.user.email = action.payload.email;
      state.auth.userData.balance = action.payload.balance;
      state.auth.userData.transactions = action.payload.transactions;
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const persistConfig = {
  key: 'local-key',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};
export const kapustaReducer = persistReducer(
  persistConfig,
  kapustaSlice.reducer
);
export const getIsLoggedIn = state => state.kapusta.isLoggedIn;
export const getTransation = state => state.kapusta.auth.userData.transactions;
export const getSid = state => state.kapusta.sid;
export const getUserIncomes = state =>
  state.kapusta.auth.userData.incomes.incomes;
export const getUserExpenses = state =>
  state.kapusta.auth.userData.expenses.expenses;
export const getState = state => state.kapusta;
