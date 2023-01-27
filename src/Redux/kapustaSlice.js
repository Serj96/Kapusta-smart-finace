import { createSlice } from '@reduxjs/toolkit'
import { login, logOut, refresh, register } from "Redux/authOperaions";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const initialState = {
    auth: {
        user: { email: null, id: null },
        userData: {
            balance: null,
            transactions: []
        },
    },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    sid: null,
    error: null,
    loading: false,

}
export const kapustaSlice = createSlice({
    name: 'kapusta',
    initialState,
    extraReducers: {
        [register.pending]: (state) => {
            state.error = null;
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [register.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [login.pending]: (state) => {
            state.error = null;
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.loading = false;
            state.auth.user.email = action.payload.userData.email;
            state.auth.user.id = action.payload.userData.id;
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.accessToken = action.payload.accessToken;
            state.auth.userData.balance = action.payload.userData.balance;
            state.auth.userData.transactions = action.payload.userData.transactions;
        },
        [login.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [logOut.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logOut.fulfilled]: (state) => {
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
        [refresh.pending]: (state) => {
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
    }
})
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: ['accessToken', 'refreshToken', 'sid']
}
export const kapustaReducer = persistReducer(persistConfig, kapustaSlice.reducer)
export const getIsLoggedIn = state => state.kapusta.isLoggedIn;
export const getTransation = state => state.kapusta.auth.userData.transaction;
export const getSid = state => state.kapusta.sid;
export const getUser = state => state.kapusta.auth.user.email;
