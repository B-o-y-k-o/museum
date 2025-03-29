import { configureStore } from '@reduxjs/toolkit';
import { adminSlice } from './modules/PageAdmin/adminSlice';

export const store = configureStore({
    reducer: {
        admin: adminSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
