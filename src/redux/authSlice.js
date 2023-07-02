import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, getProfileThunk } from './authOperations';

const initialState = {   
    token: '',
    isLoading: false,
    error: '',
    profile: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = '';
}

const handleLoginFulfilled = (state, { payload }) => { 
    state.isLoading = false;
    state.token = payload.token;
}

const handleLogoutFulfilled = (state) => { // скидання стейту до вихідного стану 
    state.isLoading = false;
    state.token = '';
    state.profile = null;
    state.error = '';
}

const handleFulfilledProfile = (state, { payload }) => {  
    state.isLoading = false;
    state.profile = payload;
}

const handleRejected = (state, { error, payload }) => {
    state.isLoading = false;
    state.error = payload ?? error.message;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, handleLoginFulfilled)
            .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
            .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
    }
});

export const authReducer = authSlice.reducer;