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
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setToken(state.kapusta.accessToken);
    try {
        const { data } = await axios.post('/auth/logout');
        setToken();
        return data;
    } catch (error) {
        console.log(error);


    }
})
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const sid = state.kapusta.sid;
    if (state.kapusta.refreshToken === null) return state;
    setToken(state.kapusta.refreshToken);
    try {
        const { data } = await axios.post('/auth/refresh', { sid })
        return data;
    } catch (error) {
        console.log(error);
    }
})