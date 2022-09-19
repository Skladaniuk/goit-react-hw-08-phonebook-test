import { configureStore } from '@reduxjs/toolkit';
import {contactSlice} from './contactSlice'
import storage from 'redux-persist/lib/storage';
import { contactApi } from './contactApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {authSlice} from './auth/auth-slice'


const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList:['token']
}


export const store = configureStore({
  reducer: {
    filter:contactSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth:persistReducer(authPersistConfig, authSlice.reducer )

  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
    contactApi.middleware,
  ],

  
})


export const persistor = persistStore(store)