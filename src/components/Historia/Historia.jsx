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
			opcionA: data[0].opciones.a,
			opcionB: data[0].opciones.b,
		};
	}

	componentDidUpdate() {
		console.log(this.state.listaDeElecciones.length);
		if (this.state.listaDeElecciones.length === 5) {
			alert("termino la historia, comienza de nuevo");
			this.setState({
				fragmento: data[0].historia,
				ultimaEleccion: "",
				listaDeElecciones: [],
				opcionA: data[0].opciones.a,
				opcionB: data[0].opciones.b
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
			if (opcion === "a") {
				const listaDeElecciones = [...this.state.listaDeElecciones, "A"];
				const fragmentoElegido = this.fragmento(paso, "a").historia;
				console.log(this.fragmento(paso, "a").id);
				const opcionA = this.fragmento(paso, "a").opciones.a;
				const opcionB = this.fragmento(paso, "a").opciones.b;
				this.setState({
					listaDeElecciones: listaDeElecciones,
					ultimaEleccion: "A",
					fragmento: fragmentoElegido,
					opcionA: opcionA,
					opcionB: opcionB,
				});
			} else {
				const fragmentoElegido = this.fragmento(paso, "b").historia;
				console.log(this.fragmento(paso, "b").id);
				const opcionA = this.fragmento(paso, "a").opciones.a;
				const opcionB = this.fragmento(paso, "a").opciones.b;
				const listaDeElecciones = [...this.state.listaDeElecciones, "B"];
				this.setState({
					listaDeElecciones: listaDeElecciones,
					ultimaEleccion: "B",
					fragmento: fragmentoElegido,
					opcionA: opcionA,
					opcionB: opcionB,
				});
			}
		}
		if (paso === 6) {
			const listaDeElecciones = [
				...this.state.listaDeElecciones,
				opcion.toUpperCase(),
			];
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
						<Button
							id='a'
							onClick={this.handleClick}
							opcion={this.state.opcionA}
						/>
						<Button
							id='b'
							onClick={this.handleClick}
							opcion={this.state.opcionB}
						/>
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
