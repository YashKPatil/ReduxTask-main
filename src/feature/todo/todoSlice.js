import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    const savedState = localStorage.getItem('todos');
    return savedState ? JSON.parse(savedState) : { todos: [] };
};

const saveToLocalStorage = (state) => {
    localStorage.setItem('todos', JSON.stringify(state));
};

const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };

const initialState = loadFromLocalStorage();

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
                priority: action.payload.priority
            };
            state.todos.push(todo);
            state.todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            saveToLocalStorage(state);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index].text = action.payload.text;
                state.todos[index].priority = action.payload.priority;
            }
            state.todos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            saveToLocalStorage(state);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveToLocalStorage(state);
        },
        loadTodos: (state) => {
            return loadFromLocalStorage();
        }
    }
});

export const { addTodo, updateTodo, removeTodo, loadTodos } = todoSlice.actions;
export default todoSlice.reducer;
