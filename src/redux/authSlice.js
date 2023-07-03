import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk, loginThunk, logoutThunk, fetchCurrentUserThunk } from './authOperations';

const initialState = {   
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleSignUpFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.token = payload.token;
}

const handleLoginFulfilled = (state, { payload }) => { 
    state.isLoading = false;
    state.token = payload.token;
}

const handleLogoutFulfilled = (state) => { // скидання стейту до вихідного стану 
    state.isLoading = false;
    state.token = null;
    state.user = null;
    state.error = null;
}

const handleFulfilledProfile = (state, { payload }) => {  
    state.isLoading = false;
    state.user = payload;
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
            .addCase(signUpThunk.fulfilled, handleSignUpFulfilled)
            .addCase(loginThunk.fulfilled, handleLoginFulfilled)
            .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
            .addCase(fetchCurrentUserThunk.fulfilled, handleFulfilledProfile)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
    }
});

export const authReducer = authSlice.reducer;