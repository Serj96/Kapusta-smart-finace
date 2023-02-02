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
      balance: null,
      transactions: [],
      incomes: { incomes: [], monthsStats: [] },
      expenses: { expenses: [], monthsStats: [] },
      category: { income: [], expense: [] },
      periodData: [],
      iconsData: { id: null, data: [] },
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
  reducers: {
    setIconData: (state, action) => {
      state.auth.userData.iconsData = action.payload;
    },
  },
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
        state.isLoggedIn = true;
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
        state.auth.userData.iconsData = { id: null, data: [] };
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

        state.auth.userData.expenses.monthsStats = action.payload.monthsStats;
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
        state.auth.userData.periodData = [action.payload];
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
export const { setIconData } = kapustaSlice.actions;
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

export const getExpensesCategory = state =>
  state.kapusta.auth.userData.category.expense;

export const getIncomeCategory = state =>
  state.kapusta.auth.userData.category.income;

export const getSummaryExpenses = state =>
  state.kapusta.auth.userData.expenses.monthsStats;

export const getSummaryIncome = state =>
  state.kapusta.auth.userData.incomes.monthsStats;

export const getUserBalance = state => state.kapusta.auth.userData.balance;
export const getDataByPeriod = state => state.kapusta.auth.userData.periodData;
export const getIconsData = state => state.kapusta.auth.userData.iconsData;
