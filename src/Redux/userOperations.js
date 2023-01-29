import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const getUser = createAsyncThunk(
  'user',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeBalance = createAsyncThunk(
  'user/balance',
  async (credentials, { rejectWithValue }) => {
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
