import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { PlusIcon } from "lucide-react"; 

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Todo can't be empty!");
      return;
    }
    dispatch(addTodo(input.trim()));
    setInput("");
    setError("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 max-w-xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full bg-gray-900 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-3 px-5 transition duration-200"
            placeholder="📝  Write your next todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm mt-1 ml-1">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto h-[52px] flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-95"
        >
          <PlusIcon className="w-5 h-5" />
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
