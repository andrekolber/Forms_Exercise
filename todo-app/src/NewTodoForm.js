import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		todo : '',
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name] : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.todo === '') {
			alert('Please enter a Todo!');
			return;
		}
		addTodo({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<label htmlFor="todo">New Todo: </label>
			<input
				id="todo"
				type="text"
				name="todo"
				placeholder="Add New Todo"
				value={formData.todo}
				onChange={handleChange}
			/>
			<button className="NewTodoForm-Btn">Add</button>
		</form>
	);
};

export default NewTodoForm;
