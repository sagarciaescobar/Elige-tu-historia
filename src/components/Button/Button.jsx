import React from "react";

import './Button.css';

export default function Button(props) {
	return (
		<div className="elecciones">
			<button id={props.id} onClick={props.onClick}>
				Opcion {props.id.toUpperCase()}
			</button>
			<p>{props.opcion}</p>
		</div>
	);
}
