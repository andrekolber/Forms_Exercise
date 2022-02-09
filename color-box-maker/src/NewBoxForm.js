import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		width  : '',
		height : '',
		color  : '',
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

		if (formData.color === '' || formData.width === '' || formData.height === '') {
			alert('Please Enter Box Info!');
			return;
		}

		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewBoxForm" onSubmit={handleSubmit}>
			<h3>Create a New Box!</h3>
			<label htmlFor="width">Box Width: </label>
			<input
				id="width"
				type="text"
				name="width"
				placeholder="Box Width"
				value={formData.width}
				onChange={handleChange}
			/>

			<label htmlFor="height"> Box Height: </label>
			<input
				id="height"
				type="text"
				name="height"
				placeholder="Box Height"
				value={formData.height}
				onChange={handleChange}
			/>

			<label htmlFor="backgroundColor"> Box Color: </label>
			<input
				id="backgroundColor"
				type="text"
				name="color"
				placeholder="Box Color"
				value={formData.color}
				onChange={handleChange}
			/>

			<button className="NewBoxForm-Btn">Create Box</button>
		</form>
	);
};

export default NewBoxForm;
