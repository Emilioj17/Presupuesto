import React, { Fragment } from 'react';

const ControlPresupuesto = ({ listaItems, presupuesto }) => {
    let suma = 0;
    listaItems.forEach(element => {
        // console.log(element.cantidad);
        suma = suma + parseInt(element.cantidad);
    });
    return (
        <div>Te quedan ${presupuesto-suma}</div>
    )
    
}

export default ControlPresupuesto;