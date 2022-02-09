import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const Boxlist = () => {
	const INITIAL_STATE = [];

	const [ boxes, setBoxes ] = useState(INITIAL_STATE);

	const addBox = (newBox) => {
		setBoxes((boxes) => [ ...boxes, { ...newBox, id: uuid() } ]);
	};

	const deleteBox = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map(({ id, width, height, color }) => (
					<Box id={id} width={width} height={height} color={color} key={id} deleteBox={deleteBox} />
				))}
			</div>
		</div>
	);
};

export default Boxlist;
