import React, { Fragment } from 'react';

const Gasto = ({ listaItems }) => {
    const ListaGastos = listaItems.map((item, index) => {
        console.log(item.nombreGasto);
        return (
            <Fragment>
                <div className="NombreGasto">{item.nombreGasto}</div>
                <div className="Monto">{item.cantidad}</div>
            </Fragment>
        )
    });
    
    return (
        <div className="CentralGasto">{ ListaGastos }</div>
        // 
    )
};
export default Gasto;