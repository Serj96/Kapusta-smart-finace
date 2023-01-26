import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
const setToken = token => {
    if (token) {
        return axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.common.authorization = '';
};
export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const { data: result } = await axios.post('auth/register', data);
        return result;
    } catch (error) {

        return rejectWithValue(error);
    }
})
export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const { data: result } = await axios.post('/auth/login', data);
        setToken(result.accessToken);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await axios.post('/auth/logout');
        setToken();
        return data;
    } catch (error) {
        console.log(error);


    }
})
export const fetchRefresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const sid = state.sid;
    setToken(state.accessToken);
    try {
        const { data } = await axios.post('/auth/refresh', { sid })
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
})