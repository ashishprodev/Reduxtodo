import {  createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date().getTime(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		getTodos:(state,action)=>{
			return state.map((todo)=>todo.id===action.payload.text)
		}
	}
});

export const { addTodo, toggleComplete, deleteTodo,getTodos } = todoSlice.actions;

export default todoSlice.reducer;
