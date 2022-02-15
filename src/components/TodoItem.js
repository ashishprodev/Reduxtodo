import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

	return (
		<li className={completed}>
			<div >
				<span className='dd'>
					<input
						type='checkbox'
						checked={completed}
						onClick={handleCheckboxClick}
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
