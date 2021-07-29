import React, { Fragment } from 'react';

const Gasto = ({ listaItems, setListaItems }) => {
    const borrarItemListaGastos = (e) => {
        console.log(e.target.id);
        const nuevoId = listaItems.filter(uno => uno.id !== e.target.id);
        console.log(nuevoId);
        setListaItems(nuevoId);

    }

    const ListaGastos = listaItems.map((item, index) => {
        return (
            <Fragment key={item.id}>
                <div className="NombreGasto">{item.nombreGasto}</div>
                <div className="Monto">{item.cantidad}</div>
                <span id={item.id} onClick={(e)=>borrarItemListaGastos(e)}>&times;</span>
            </Fragment>
        )
    });
    
    return (
        <div className="CentralGasto">{ ListaGastos }</div>
    )
};
export default Gasto;