import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, postContact, excludeContact, patchContact } from '../services/contacts-api';

// для доступу до контактів (експортую все до contactsSlice)

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => { 
        try {
            const data = await getContacts();
            
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
            const data = await postContact(newContact);
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
            const data = await excludeContact(contactId);
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
            const data = await patchContact(contactId);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);