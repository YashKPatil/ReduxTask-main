// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './feature/auth/authSlice';
import Todos from './components/Todos';

function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            {!isLoggedIn && (
                <div className="p-4 text-center">
                    <h2 className="text-xl font-bold">Please Log In to Access Your Tasks</h2>
                    <button onClick={() => dispatch(login())} className="bg-blue-500 text-white p-2 rounded mt-4">
                        Login
                    </button>
                </div>
            )}
            {isLoggedIn && (
                <>
                    <button 
                        onClick={() => dispatch(logout())} 
                        className="bg-red-500 text-white p-2 rounded absolute top-4 right-4">
                        Logout
                    </button>
                    <Todos />
                </>
            )}
        </div>
    );
}

export default App;