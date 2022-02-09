import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import BoxList from './BoxList';
import Boxlist from './BoxList';

const addBox = (boxList, height = '2px', width = '2px', color = 'red') => {
	const heightInput = boxList.getByLabelText('Box Height:');
	const widthInput = boxList.getByLabelText('Box Width:');
	const colorInput = boxList.getByLabelText('Box Color:');

	fireEvent.change(colorInput, { target: { value: color } });
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });

	const button = boxList.getByText('Create Box');
	fireEvent.click(button);
};

it('renders without crashing', () => {
	render(<BoxList />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
	const boxList = render(<BoxList />);

	// no boxes yet
	expect(boxList.queryByText('X')).not.toBeInTheDocument();

	addBox(boxList);

	// expect box to exist
	const removeBtn = boxList.getByText('X');
	const box = boxList.getByRole('box');
	expect(removeBtn).toBeInTheDocument();
	expect(box).toHaveStyle(`
        width: 2px;
        height: 2px;
        background-color: red;
        `);

	// expect form to be empty
	expect(boxList.getAllByDisplayValue('')).toHaveLength(3);
});

it('can remove a box', () => {
	const boxList = render(<BoxList />);
	addBox(boxList);

	const removeBtn = boxList.getByText('X');

	// click the remove button and the box should dissapear
	fireEvent.click(removeBtn);
	expect(removeBtn).not.toBeInTheDocument();
});
