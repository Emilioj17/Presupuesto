import React, { Fragment, useState } from 'react';
import Error from './Error';

const Formulario = ({nombreGasto, setNombreGasto, qPresupuesto, setQPresupuesto, listaItems, setListaItems }) => {
    const [error, setError] = useState(false);
    

    const handlerNombreGasto = (e) => {
        const palabra = e.target.value;
        if (palabra.trim() === "") {
            setError(true);
            return;
        } else if (Number.isInteger(parseInt(palabra))) {
            setError(true);
            return;
        } else {
            setError(false);
            setNombreGasto(palabra);
        }
        
    }

    const handlerQPresupuesto = (e) => {
        const numero = parseInt(e.target.value);
        if (numero<1 || isNaN(numero)) {
            setError(true);
            return;
        } else {
            setError(false);
            setQPresupuesto(numero);
        }
        
    }

    const handlerIngresar = (e) => {
        e.preventDefault();
        if (nombreGasto && qPresupuesto) {
            setListaItems([...listaItems, { "nombreGasto": nombreGasto, "cantidad": qPresupuesto }]);
            setQPresupuesto("");
            setNombreGasto("");
        } else {
            setError(true);
            return;
        }
            
    }

    return (
        <Fragment>
            <form>
                <Error error={error} setError={setError} texto="Debes Ingresar un Presupuesto Positivo y un nombre al Gasto"/>
                <label htmlFor="nombreGasto">Nombre de Gasto</label>
                <input
                    type="text"
                    name="nombreGasto"
                    id=""
                    placeholder="Nombre de Gasto"
                    value={nombreGasto}
                    onChange={(e)=>handlerNombreGasto(e)}
                />
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    type="number"
                    name="cantidad"
                    id=""
                    placeholder="Ingresa un Número con tu Teclado"
                    value={qPresupuesto}
                    onChange={(e)=>handlerQPresupuesto(e)}
                />
                <button className="alert button expanded" onClick={(e)=>handlerIngresar(e)}>Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Formulario;