import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk, loginThunk, logoutThunk, fetchCurrentUserThunk } from './authOperations';

const initialState = {   
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false, // = isLoading
    error: null,
};

const handlePending = (state) => {
    state.isRefreshing = true;
    state.error = null;
}

const handleSignUpFulfilled = (state, { payload }) => {
    state.user = payload.user;    
    state.token = payload.token;
    state.isLoggedIn = false; 
    state.isRefreshing = false;

}

const handleLoginFulfilled = (state, { payload }) => { 
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleLogoutFulfilled = (state) => { // скидання стейту до вихідного стану 
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.isRefreshing = false;
    state.error = null;
}

const handleFulfilledProfile = (state, { payload }) => {  
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleRejected = (state, { error, payload }) => {
    state.isRefreshing = false;
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