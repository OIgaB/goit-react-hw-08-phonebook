import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, addContactThunk, deleteContactThunk, updateContactThunk } from './contactsOperations';

const initialState = {   
    items: [
        {id: 'id-1', name: 'Mykhailo Kotsiubynsky', number: '459-12-56'},
        {id: 'id-2', name: 'Hryhorii Skovoroda', number: '443-89-12'},
        {id: 'id-3', name: 'Pavlo Tychyna ', number: '645-17-79'},
        {id: 'id-4', name: 'Saint Nicholas', number: '227-91-26'},
    ],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledGot = (state, { payload }) => {  // payload - масив об'єктів
    state.isLoading = false;
    state.items = payload;
}

const handleFulfilledAdded = (state, { payload }) => {  
    state.isLoading = false;
    state.items.push(payload);
}

const handleFulfilledDeleted = (state, { payload }) => {  
    state.isLoading = false;
    const index = state.items.findIndex(
        contact => contact.id === payload.id  // знаходимо серед контактів з api той, індекс якого = індексу одного переданого контакту
    );
    state.items.splice(index, 1); // 1й аргумент - індекс першого елемента для видалення; 2й - к-ть елементів, що видаляються
}

const handleFulfilledPatch = (state, { payload }) => {  
    state.isLoading = false;
    const index = state.items.findIndex(
        contact => contact.id === payload.id  // знаходимо серед контактів з api той, індекс якого = індексу одного переданого контакту
    );
    // якась дія
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, handleFulfilledGot)
            .addCase(addContactThunk.fulfilled, handleFulfilledAdded)
            .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleted)
            .addCase(updateContactThunk.fulfilled, handleFulfilledPatch)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const contactsReducer = contactsSlice.reducer;