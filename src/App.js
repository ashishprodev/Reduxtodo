import React from 'react';
import './Styles/App.css'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import CompleteItems from './components/CompleteItems';


const App = () => {
	return (
		<div>
			<h1>Lets make to do App</h1>
			<AddTodo />
			<TodoList />
			<CompleteItems/>
		</div>
	);
};

export default App;
