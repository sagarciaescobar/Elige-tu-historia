import React from 'react';

import './Historial.css';

export default function Historial(props) {
    const elecciones = props.listaDeElecciones;

    if(elecciones.length === 0){
        return (
            <div className="historial">
                <p>Aun no has seleccionado, Escoge entre la opcion A o B</p>
             </div>
        )
    }else{
        return(
            <div className="historial">
                <p>Tu ultima eleccion fue {props.ultimaEleccion}</p>
                <h4>Historial de elecciones:</h4>
                <ul>
                    {elecciones.map((ele,i)=>{
                       return <li key={i}>{ele}</li>
                    })}
                </ul>
            </div>
        )
    }
    
}
