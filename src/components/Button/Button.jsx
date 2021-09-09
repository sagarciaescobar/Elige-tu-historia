import React from "react";

import './Button.css';

export default function Button(props) {
	const id = props.id;
	return (
		<div className="elecciones">
			<button id={id} onClick={props.onClick}>
				Opcion {props.id.toUpperCase()}
			</button>
			<p>{id === 'a' ? props.opcion.a : props.opcion.b}</p>
		</div>
	);
}
