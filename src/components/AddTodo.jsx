import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../feature/todo/todoSlice";
import { fetchAIInsight } from "../feature/ai/aiSlice"; // Import AI API

function AddTodo({ editTodo, setEditTodo }) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("Medium");

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text);
            setPriority(editTodo.priority);
        }
    }, [editTodo]);

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (input.trim() === "") return;

        if (editTodo) {
            dispatch(updateTodo({ id: editTodo.id, text: input, priority }));
            setEditTodo(null);
        } else {
            dispatch(addTodo({ text: input, priority }));
            dispatch(fetchAIInsight(input)); // Fetch AI insight for new task
        }

        setInput("");
        setPriority("Medium");
    };

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg shadow-md">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                required
            />
            
            <div className="flex justify-between">
                {["High", "Medium", "Low"].map((level) => (
                    <label
                        key={level}
                        className={`cursor-pointer px-5 py-2 rounded-md border-2 font-medium transition-all duration-200 
                            ${priority === level 
                                ? level === "High" ? "bg-red-600 text-white border-red-700" 
                                : level === "Medium" ? "bg-yellow-500 text-white border-yellow-600" 
                                : "bg-green-500 text-white border-green-600" 
                                : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                            }`}
                    >
                        <input
                            type="radio"
                            name="priority"
                            value={level}
                            checked={priority === level}
                            onChange={() => setPriority(level)}
                            className="hidden"
                        />
                        {level}
                    </label>
                ))}
            </div>

            <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-md transition-all duration-200">
                {editTodo ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default AddTodo;
