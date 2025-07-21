// Redux Toolkit ke necessary functions import kar rahe hain
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state define kar rahe hain (shuruat mein ek sample todo ke saath)
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]  // Pehla todo example ke taur par
};

// Todo slice create kar rahe hain
export const todoSlice = createSlice({
    name: 'todo',  // Slice ka naam (Redux DevTools mein dikhega)
    initialState,   // Upar define kiya gaya initial state
    reducers: {     // Yahan sab actions define honge
        
        // Naya todo add karne ka reducer
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),  // Unique ID generate karne ke liye nanoid use kar rahe
                text: action.payload  // Todo ka text action payload se aa raha hai
            }
            state.todos.push(todo);  // Todos array mein naya todo add kar do
        },

        // Todo delete karne ka reducer
        removeTodo: (state, action) => {
            // Filter method se sirf wahi todos rakhne jo match nahi karte
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload  // Payload mein ID aa rahi hogi
            );
        },

        // Todo update karne ka reducer
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                // Check karo ki kya current todo ki ID payload ki ID se match karti hai
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.newText }  // Match hone par text update karo
                    : todo  // Nahin toh original todo hi return karo
            );
        }
    }
});

// Actions ko export kar rahe hain taaki components mein use kar sakein
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Reducer ko export kar rahe hain taaki store mein add kar sakein
export default todoSlice.reducer;