import { configureStore } from '@reduxjs/toolkit';
import {contactSlice} from './contactSlice'

import { contactApi } from './contactApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';



export const store = configureStore({
  reducer: {
    filter:contactSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,

  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],

  
})



setupListeners(store.dispatch)