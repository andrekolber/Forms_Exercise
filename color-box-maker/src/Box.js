import React from 'react';
import './Box.css';

const Box = ({ id, width, height, color, deleteBox }) => {
	const remove = () => deleteBox(id);
	return (
		<div
			className="Box"
			style={{
				backgroundColor : color,
				width           : width,
				height          : height,
			}}
			role="box"
		>
			<button className="Box-Btn" onClick={remove}>
				X
			</button>
		</div>
	);
};

export default Box;
