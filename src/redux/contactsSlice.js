import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, addContactThunk, deleteContactThunk, updateContactThunk } from './contactsOperations';

const initialState = {   
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledFech = (state, { payload }) => {  // payload - масив об'єктів
    state.isLoading = false;
    state.items = payload;
    state.error = null;
}

const handleFulfilledAdd = (state, { payload }) => {  
    state.isLoading = false;
    state.items.push(payload);
    state.error = null;
}

const handleFulfilledDelete = (state, { payload }) => {  
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        contact => contact.id === payload.id  // знаходимо серед контактів з api той, індекс якого = індексу одного переданого контакту
    );
    state.items.splice(index, 1); // 1й аргумент - індекс першого елемента для видалення; 2й - к-ть елементів, що видаляються
}

const handleFulfilledPatch = (state, { payload }) => {  
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        contact => contact.id === payload.id  // знаходимо серед контактів з api той, індекс якого = індексу одного переданого контакту
    );
    state.items.splice(index, 1, payload); // заміна (1й аргумент - 1й елемент для видалення; 2й - кількість елементів, що видаляються; 3й-... - нові елементи, які додаються в масив)
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
            .addCase(fetchContactsThunk.fulfilled, handleFulfilledFech)
            .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
            .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
            .addCase(updateContactThunk.fulfilled, handleFulfilledPatch)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const contactsReducer = contactsSlice.reducer;