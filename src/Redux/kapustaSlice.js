import { createSlice } from '@reduxjs/toolkit'
import { login, logOut, register } from "Redux/authOperaions";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
const initialState = {
    auth: {
        user: { email: null, id: null },
        userData: {
            balance: null,
            transaction: []
        },
        isLoggedIn: false
    },
    accessToken: null,
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
            state.loading = false;
            state.auth.user.email = action.payload.userData.email;
            state.auth.user.id = action.payload.userData.id;
            // state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.accessToken = action.payload.accessToken;
            state.auth.userData.balance = action.payload.userData.balance;
            state.auth.userData.transaction = action.payload.userData.transaction;
            state.auth.isLoggedIn = true;
            console.log(state.sid)
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
            state.auth.isLoggedIn = false;
            state.loading = false;
        },
        [logOut.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})
const persistConfig = {
    key: 'local-key',
    storage,
    whitelist: ['accessToken', 'sid']
}
export const kapustaReducer = persistReducer(persistConfig, kapustaSlice.reducer)
export const getrefreshToken = state => state.kapusta.refreshToken;
export const getIsLoggedIn = state => state.kapusta.auth.isLoggedIn;
export const getTransation = state => state.kapusta.auth.userData.transaction;
export const getAccesedToken = state => state.kapusta.accessToken;
export const getToken = state => state.kapusta.sid;