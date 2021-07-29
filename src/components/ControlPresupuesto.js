import React from 'react';
import {Helper} from "../helper"

const ControlPresupuesto = ({ listaItems, presupuesto }) => {
    let suma = 0;
    listaItems.forEach(element => {
        suma = suma + parseInt(element.cantidad);
    });
    let montoFinal = presupuesto - suma;
    return (
        <div className={Helper(montoFinal, presupuesto)}>Te quedan ${montoFinal}</div>
    )
    
}

export default ControlPresupuesto;