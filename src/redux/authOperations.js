import { createAsyncThunk } from "@reduxjs/toolkit";
import { logIn, logOut, getProfile } from '../services/auth-api';


// Для авторизації  (все експортую до authSlice)

export const getProfileThunk = createAsyncThunk(
    'users/current',
    () => getProfile()
);

export const loginThunk = createAsyncThunk(
    'users/login',
    async (body, { rejectWithValue, dispatch }) => { // в body приходить {email, password} з LoginPage - завдяки dispatch
        try{
            const data = await logIn(body);
            dispatch(getProfileThunk());
            return data;
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'users/logout',
    async (_, { rejectWithValue }) => { // в body приходить {email, password} з LoginPage - завдяки dispatch
        try{
            await logOut();
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)