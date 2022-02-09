import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

const addTodo = (todoList, todo = 'Walk the Dog') => {
	const todoInput = todoList.getByLabelText('New Todo:');

	fireEvent.change(todoInput, { target: { value: todo } });

	const button = todoList.getByText('Add');
	fireEvent.click(button);
};

it('renders without crashing', () => {
	render(<TodoList />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', () => {
	const todoList = render(<TodoList />);

	// no todos yet
	expect(todoList.queryByText('X')).not.toBeInTheDocument();

	addTodo(todoList);

	// expect todo to exist
	const removeBtn = todoList.queryByText('X');
	const todo = todoList.getByRole('todo');
	expect(removeBtn).toBeInTheDocument();
	expect(todo).toBeInTheDocument();

	// expect form to be empty
	expect(todoList.getAllByDisplayValue('')).toHaveLength(1);
});

it('can remove a todo', () => {
	const todoList = render(<TodoList />);
	addTodo(todoList);

	const removeBtn = todoList.getByText('X');

	// click the remove button and the todo should dissapear
	fireEvent.click(removeBtn);
	expect(removeBtn).not.toBeInTheDocument();
});
