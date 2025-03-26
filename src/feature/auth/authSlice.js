import { createSlice } from '@reduxjs/toolkit';

const loadAuthState = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};

const saveAuthState = (isLoggedIn) => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: loadAuthState() || false }, // Ensure it starts as false
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            saveAuthState(true);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            saveAuthState(false);
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;