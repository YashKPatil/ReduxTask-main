import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, loadTodos } from '../feature/todo/todoSlice';
import { fetchAIInsight } from '../feature/ai/aiSlice';
import AddTodo from './AddTodo';

const priorityColors = {
    High: 'bg-red-600 border-red-700',
    Medium: 'bg-yellow-500 border-yellow-600',
    Low: 'bg-green-500 border-green-600'
};

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos?.todos || []);
    const aiInsights = useSelector(state => state.ai.insights || {});

    const [editTodo, setEditTodo] = useState(null);

    // Load todos from localStorage on mount
    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    // Fetch AI insights if not already available in localStorage
    useEffect(() => {
        todos.forEach(todo => {
            if (!aiInsights[todo.text]) {
                dispatch(fetchAIInsight(todo.text));
            }
        });
    }, [dispatch, todos, aiInsights]);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Task Manager</h2>
            
            <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
            
            <ul className="mt-6 space-y-6">
                {todos.filter(todo => editTodo?.id !== todo.id).map((todo) => (
                    <div key={todo.id} className="relative">
                        {/* Todo Item */}
                        <li 
                            className={`p-3 border-l-8 rounded-lg text-white flex flex-col md:flex-row justify-between items-center shadow-md transition-all duration-300 ${priorityColors[todo.priority]}`}
                            style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" }} 
                        >    
                            <div>
                                <span className="text-lg font-medium break-words w-3/4 overflow-hidden mx-2"> 
                                    {todo.text} - <strong>{todo.priority}</strong>
                                </span>
                            </div>

                            <div className="flex-shrink-0 space-x-2">
                                <button 
                                    onClick={() => setEditTodo(todo)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 my-1 rounded transition-all duration-200 shadow-md">
                                    ✏️ Edit
                                </button>
                                <button 
                                    onClick={() => dispatch(removeTodo(todo.id))} 
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded transition-all duration-200 shadow-md">
                                    ❌ Delete
                                </button>
                            </div>
                        </li>

                        {/* AI Insights Box */}
                        <div className="mt-2 p-3 bg-gray-100 border-l-4 border-blue-500 rounded-lg shadow-md transition-opacity duration-300 ease-in-out">
                            <p className="text-sm text-gray-700">
                                <strong className="text-blue-600">🤖 AI Insight:</strong><br />
                                {aiInsights[todo.text] 
                                    ? aiInsights[todo.text].replace(/\*/g, "").replace(/\*\*/g, "")  
                                    : <span className="text-gray-500 italic"> Fetching AI suggestion... </span>
                                }
                            </p>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
