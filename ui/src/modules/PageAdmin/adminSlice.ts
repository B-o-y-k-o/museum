import { createSlice } from '@reduxjs/toolkit';

export interface AdminState {
    isAdmin: boolean
    showModalAuth: boolean
};

const initialState: AdminState = {
    isAdmin: false,
    showModalAuth: true,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    selectors: {
        isAdminUser: (state) => state.isAdmin,
        isShowModalAuth: (state) => state.showModalAuth,
     },
    reducers: {
        adminAuth: (state) => {
            state.isAdmin = true;
        },
        closeModalAuth: (state) => {
            state.showModalAuth = false
        },
    }
})

export const { adminAuth, closeModalAuth } = adminSlice.actions;
export default adminSlice.reducer;
