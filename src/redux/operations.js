import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getContacts, postContact, excludeContact } from '../services/contacts-api';
import {  logIn, logOut, getProfile } from '../services/auth-api';

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, { rejectWithValue}) => { 
//         try {
//             const data = await getContacts();
            
//             const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
//             return sortedByName; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (newContact, { rejectWithValue}) => { 
//         try {
//             const data = await postContact(newContact);
//             // console.log(newContact);
//             return data; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, { rejectWithValue}) => { 
//         try {
//             const data = await excludeContact(contactId);
//             return data; 
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// Для авторизації

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