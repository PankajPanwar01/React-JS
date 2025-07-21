import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { Trash2Icon, EditIcon, CheckIcon, XIcon } from "lucide-react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(
        updateTodo({
          id, // Same ID retain karenge
          newText: editText, // Sirf text update karenge
        })
      );
      setEditingId(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-900 shadow-md hover:shadow-lg transition px-4 py-3 rounded-xl border border-zinc-700"
            >
              {editingId === todo.id ? (
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 bg-zinc-800 text-white px-3 py-2 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="p-2 bg-green-600 hover:bg-green-700 rounded-full text-white transition mr-2"
                    title="Save"
                  >
                    <CheckIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition"
                    title="Cancel"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-white text-lg font-medium">
                    {todo.text}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditClick(todo)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
                      title="Edit"
                    >
                      <EditIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition"
                      title="Delete"
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
