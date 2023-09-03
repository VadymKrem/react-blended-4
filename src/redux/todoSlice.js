import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {},
    deleteTodo(state, action) {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
