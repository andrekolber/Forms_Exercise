import React from 'react';
import './Todo.css';

const Todo = ({ todo, id, removeTodo }) => {
	const remove = () => removeTodo(id);
	return (
		<div className="Todo">
			<ul className="Todo-UL">
				<li role="todo">
					{todo}
					<button className="Todo-Btn" onClick={remove}>
						X
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Todo;
