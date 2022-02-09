import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
	const INITIAL_STATE = [];
	const [ todos, setTodos ] = useState(INITIAL_STATE);

	const addTodo = (newTodo) => {
		setTodos((todos) => [ ...todos, { id: uuid(), ...newTodo } ]);
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	};
	return (
		<div>
			<h3 className="h3">Todo List</h3>
			<NewTodoForm addTodo={addTodo} />
			{todos.map(({ id, todo }) => <Todo todo={todo} id={id} key={id} removeTodo={removeTodo} />)}
		</div>
	);
};

export default TodoList;
