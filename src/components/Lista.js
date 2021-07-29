import React from 'react';
import Gasto from "./Gasto";
import ControlPresupuesto from "./ControlPresupuesto";

const Lista = ({ presupuesto, listaItems, setListaItems }) => {
    if (listaItems.length === 0) {
        return(<div>No hay Gastos. Tu Presupuesto está al 100%(${presupuesto}).</div>)
    } else {
        return (
            <div className="Lista">
                <div className="ControlPresupuesto">
                    Tu Presupuesto Total es de ${presupuesto}
                    <ControlPresupuesto listaItems={listaItems} presupuesto={presupuesto}/>
                </div>
                <Gasto listaItems={listaItems} setListaItems={setListaItems}/>
            </div>
        )
    }
    
}

export default Lista;