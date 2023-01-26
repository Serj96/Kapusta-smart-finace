import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
const setToken = token => {
    if (token) {
        return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
    }
    axios.defaults.headers.common.authorization = '';
};
export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const { data: result } = await axios.post('/users/signup', data);
        setToken(result.token);
        return result;
    } catch (error) {

        return rejectWithValue(error);
    }
})
export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const { data: result } = await axios.post('/users/login', data);
        setToken(result.token);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})
export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await axios.post('/users/logout');
        setToken();
        return data;
    } catch (error) {
        console.log(error);

    }
})