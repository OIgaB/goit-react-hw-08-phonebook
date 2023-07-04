import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { logIn, logOut, getProfile } from '../services/auth-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} // При оновленні сторінки axios будується з нуля. Щоб одразу з авторизаційним ключем, Bearer треба прописувати тут, а не у аргументі setToken
// Тепер усі запити (common) будуть іти з токеном.


const dellToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
  // або delete axios.defaults.headers.common['Authorization']
} // delete - це ключове слово, яким можемо видаляти ключ з об'єкта (common)

// console.log(axios.defaults); //{..., headers: {common: {…}, delete: {…}, get: {…}, head: {…}, post: {…}, …} }
//common: {Accept: "application/json, text/plain, */*", Authorization: "Bearer токен"}



// Для авторизації  (все експортую до authSlice)

export const signUpThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {   // в credentials приходять дані з RegisterPage
        //деструктуризувавши thunkAPI, можна отримати dispatch, getState (повертає увесь Redux-стан), extra, requestId, signal, rejectWithValue 
        try {
            const { data } = await axios.post('/users/signup', credentials);
            if('token' in data) setToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }   
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => { // в credentials приходить {email, password} з LoginPage - завдяки dispatch
        try{
            const { data } = await axios.post('/users/login', credentials)  // на цьому етапі створюється токен
                if('token' in data) setToken(data.token) 
                return data; // {token: ..., user: {name: ..., email: ...}}
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try{
            await axios.post('/users/logout');
            dellToken();
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchCurrentUserThunk = createAsyncThunk( // або refreshUser  // імпорт в Арр
    'auth/current',
    async (_, thunkAPI) => { // в credentials приходить {email, password} з LoginPage - завдяки dispatch
        const state = thunkAPI.getState(); // отримали увесь стейт
        const persistedToken = state.auth.token;

        if (persistedToken === null) { // якщо токена нема
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try{
            setToken(persistedToken); // токен зі стейта
            const { data } = await axios.get('/users/current');
            return data; // {name: ..., email: ...} 
        } catch (error){
            return thunkAPI.rejectWithValue(error.response.data.message); 
        }
    }
);