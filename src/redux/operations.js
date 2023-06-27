import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, postContact, excludeContact } from '../services/contacts-api';
import { getProfile, login } from '../services/auth-api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue}) => { 
        try {
            const data = await getContacts();
            
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
            return sortedByName; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue}) => { 
        try {
            const data = await postContact(newContact);
            // console.log(newContact);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue}) => { 
        try {
            const data = await excludeContact(contactId);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Для авторизації

export const getProfileThunk = createAsyncThunk(
    'auth/profile',
    () => getProfile()
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue, dispatch}) => {
        try{
            const data = await login(body);
            dispatch(getProfileThunk());
            return data;
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)