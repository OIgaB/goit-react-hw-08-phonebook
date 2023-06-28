import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from "./authSlice";
// import persistStore from 'redux-persist/es/persistStore';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'; 
 // redux-persist - бібліотека, яка гарантує, що ініціалізація додатку буде відкладена до тих пір, поки localStorage не буде прочитаний

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['access_token'],  // в localStorage закидуємо лише токен
}

const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        // filter: filterReducer,
        auth: persistedReducer,
    },
    middleware(getDefaultMiddleware){  //middleware - прослойка, яка стоїть між відправкою action-а і його доставкою в reducer, і дозволяє щось змінити в цей проміжок
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //щоб не видавало помилку заігноримо декілька action-ів - функцій, щоб Redux на них не реагував
            }, // action - серіалізована сутність, тобто коли можна зробити JSON.stringify - там не повинно бути ф-цій
        });
    },
});

export const persistor = persistStore(store);