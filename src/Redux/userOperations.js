import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const setToken = token => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.common.authorization = '';
};

const getUser = createAsyncThunk(
  'user',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const changeBalance = createAsyncThunk(
  'user/balance',
  async (credentials, { rejectWithValue, getState }) => {
    const state = getState();
    setToken(state.kapusta.accessToken);
    try {
      const { data } = await axios.patch('/user/balance', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userOperations = {
  getUser,
  changeBalance,
};
export default userOperations;
