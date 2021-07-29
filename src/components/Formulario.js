import React, { Fragment, useState } from 'react';
import Error from './Error';

const Formulario = () => {
    const [error, setError] = useState(false);
    const [nombreGasto, setNombreGasto] = useState("");
    const [qPresupuesto, setQPresupuesto] = useState("");

    const handlerNombreGasto = (e) => {
        const palabra = e.target.value;
        if (palabra.trim() === "") {
            setError(true);
            return;
        } else if (Number.isInteger(palabra)) {
            setError(true);
            return;
        }else {
            setError(false);
            setNombreGasto(palabra);
        }
        
    }

    const handlerQPresupuesto = (e) => {
        const numero = parseInt(e.target.value);
        if (numero<1) {
            setError(true);
        } else {
            setError(false);
            setQPresupuesto(numero);
        }
        
    }

    const handlerIngresar = () => {
        
    }
    return (
        <Fragment>
            <Error error={error} setError={setError} texto="Debes Ingresar un Presupuesto Positivo y un nombre al Gasto"/>
            <form>
                <label htmlFor="nombreGasto">Nombre de Gasto</label>
                <input
                    type="number"
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
                <button className="alert button expanded" onClick={()=>handlerIngresar()}>Ingresar</button>
            </form>
        </Fragment>
    )
}

export default Formulario;