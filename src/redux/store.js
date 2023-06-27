import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from "./authSlice";
import persistStore from 'redux-persist/es/persistStore';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['access_token'],  // в localStorage закидуємо лише токен
}

const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedReducer,
    },
    // middleware: (defaultMiddleware) => {
    //     defaultMiddleware().concat(...  .middleware)
    // }
});

export const persistor = persistStore(store);