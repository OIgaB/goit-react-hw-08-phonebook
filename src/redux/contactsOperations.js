import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { getContacts, postContact, excludeContact, patchContact } from '../services/contacts-api';

// для доступу до контактів (експортую все до contactsSlice)

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => { 
        try {
            const { data } = await axios.get('/contacts'); 
            
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
            return sortedByName; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => { 
        try {
            const { data } = await axios.post('/contacts', newContact);
            // console.log(newContact);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => { 
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`); 
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateContactThunk = createAsyncThunk(
    'contacts/updateContact',
    async (contactId, { rejectWithValue }) => { 
        try {
            const { data } = await axios.patch(`/contacts/${contactId}`);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);