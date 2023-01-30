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
      balance: 309944,
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
        monthsStats: [
          {
            Січень: 5,
            Лютий: 100,
            Березень: 400,
            Квітень: 'N/A',
            Травень: 1,
            Червень: 500,
            Липень: 3,
            Серпень: 'N/A',
            Вересень: 'N/A',
            Жовтень: 77,
            Листопад: 777,
            Грудень: 123,
          },
        ],
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
        monthsStats: [
          {
            Січень: 5,
            Лютий: 100,
            Березень: 40,
            Квітень: 888,
            Травень: 1,
            Червень: 675,
            Липень: 3,
            Серпень: 'N/A',
            Вересень: 'N/A',
            Жовтень: 77,
            Листопад: 'N/A',
            Грудень: 123,
          },
        ],
      },
      category: { income: [], expense: [] },
      periodData: [
        {
          incomes: {
            total: 12060,
            incomesData: {
              'З/П': {
                total: 12000,
                Аванс: 5000,
                Основная: 7000,
              },
              Аванс: {
                total: 1450,
                Аванс: 450,
                Основная: 1000,
              },
              Премія: {
                total: 700,
                Аванс: 400,
                Основная: 300,
              },
            },
          },
          expenses: {
            total: 7210,
            incomesData: {
              Транспорт: {
                total: 4000,
                СТО: 3500,
                Мойка: 500,
              },
              'Всё для дома': {
                total: 1200,
                Вазон: 150,
                'Шкаф-купе': 1050,
              },
              Продукты: {
                total: 100,
                Вазон: 170,
                Кефір: 50,
              },
              Учеба: {
                total: 700,
                курси: 809,
                вебінар: 2092,
              },
            },
          },
        },
      ],
    },
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  sid: null,
  error: null,
  loading: false,
};
const kapustaSlice = createSlice({
  name: 'kapusta',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.accessToken = action.payload.accessToken;
        state.auth.userData.balance = action.payload.userData.balance;
        state.auth.userData.transactions = action.payload.userData.transactions;
        state.auth.user.email = action.payload.userData.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.auth.user = { email: null, id: null };
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.auth.userData.expenses.expenses = [];
        state.auth.userData.incomes.incomes = [];
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refresh.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.loading = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getIncome.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getIncome.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.userData.expenses.expenses = [];
        state.auth.userData.incomes.incomes = action.payload.incomes;
        state.auth.userData.incomes.monthsStats = action.payload.monthsStats;
      })
      .addCase(getIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addIncome.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.loading = false;
        state.auth.userData.balance = action.payload.newBalance;
        state.auth.userData.incomes.incomes = [
          ...state.auth.userData.incomes.incomes,
          action.payload.transaction,
        ];
        state.auth.userData.incomes.monthsStats = action.payload.monthsStats;
      })
      .addCase(addIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getExpense.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpense.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.userData.expenses.expenses = action.payload.expenses;
        state.auth.userData.incomes.incomes = [];
      })
      .addCase(getExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addExpense.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.auth.userData.balance = action.payload.newBalance;
        state.auth.userData.expenses.expenses = [
          ...state.auth.userData.expenses.expenses,
          action.payload.transaction,
        ];
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.auth.userData.balance = action.payload.newBalance;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getIncomeCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIncomeCategories.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.userData.category.income = action.payload;
        state.error = null;
      })
      .addCase(getIncomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getExpenseCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpenseCategories.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.userData.category.expense = action.payload;
        state.error = null;
      })
      .addCase(getExpenseCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTransactionsByPeriod.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsByPeriod.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.userData.periodData = action.payload;
      })
      .addCase(getTransactionsByPeriod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeBalance.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.auth.userData.balance = action.payload.newBalance;
      })
      .addCase(changeBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.refresh = false;
        state.loading = false;
        state.auth.user.email = action.payload.email;
        state.auth.userData.balance = action.payload.balance;
        state.auth.userData.transactions = action.payload.transactions;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'local-key',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'isLoggedIn'],
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
export const getLoading = state => state.kapusta.loading;
export const getAccessToken = state => state.kapusta.accessToken;
export const getRefresh = state => state.kapusta.refresh;
export const getError = state => state.kapusta.error;
export const getUserMail = state => state.kapusta.auth.user.email;
