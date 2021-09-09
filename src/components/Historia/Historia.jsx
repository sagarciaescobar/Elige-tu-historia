import React, { Component } from "react";
import data from "../data.json";
import Historial from "../Historial/Historial";
import Button from "../Button/Button";

import "./Historia.css";

export default class Historia extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fragmento: data[0].historia,
			ultimaEleccion: "",
			listaDeElecciones: [],
			opcion: data[0].opciones
		};
	}

	componentDidUpdate() {
		if (this.state.listaDeElecciones.length === 5) {
			alert("termino la historia, comienza de nuevo");
			this.setState({
				fragmento: data[0].historia,
				ultimaEleccion: "",
				listaDeElecciones: [],
				opcion: data[0].opciones
			});
		}
	}

	fragmento = (paso, eleccion) => {
		eleccion = data.find((fragmento) => fragmento.id === paso + eleccion);
		return eleccion;
	};

	handleClick = (e) => {
		const opcion = e.target.id;
		const paso = this.state.listaDeElecciones.length + 2;
		if (paso !== 6) {
			const listaDeElecciones = [...this.state.listaDeElecciones, opcion.toUpperCase()];
			const fragmentoElegido = this.fragmento(paso, opcion).historia;
			const opciones = this.fragmento(paso, "a").opciones;
				this.setState({
					listaDeElecciones: listaDeElecciones,
					ultimaEleccion: opcion.toUpperCase(),
					fragmento: fragmentoElegido,
					opcion: opciones
			})
		}
		if (paso === 6) {
			const listaDeElecciones = [...this.state.listaDeElecciones, opcion.toUpperCase()];
			this.setState({
				fragmento: "fin de la historia",
				ultimaEleccion: opcion.toUpperCase(),
				listaDeElecciones: listaDeElecciones,
			});
		}
	};

	render() {
		return (
			<div className='contenedor'>
				<h1> Elije tu propia Aventura</h1>
				<div className='fragmento'>
					<p className='textoFragmento'>{this.state.fragmento}</p>
					<div className='opciones'>
						<Button	id='a'	onClick={this.handleClick}	opcion={this.state.opcion}/>
						<Button id='b' onClick={this.handleClick} opcion={this.state.opcion}/>
					</div>
					<Historial
						ultimaEleccion={this.state.ultimaEleccion}
						listaDeElecciones={this.state.listaDeElecciones}
					/>
				</div>
			</div>
		);
	}
}
