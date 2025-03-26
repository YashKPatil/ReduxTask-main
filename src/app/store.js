import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoSlice";
import authReducer from "../feature/auth/authSlice";
import aiReducer from "../feature/ai/aiSlice"

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        auth: authReducer,
        ai: aiReducer,
    }
});