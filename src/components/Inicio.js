import React, { Fragment, useState } from 'react';
import Error from './Error';

const Inicio = ({ setInicio, setPresupuesto }) => {
    const [error, setError] = useState(false);
    const handlerInicio = () => {
        setInicio(false);
    }

    const handlerPresupuesto = (e) => {
        const numero = parseInt(e.target.value);
        if (numero < 1) {
            setError(true);
            return;
        } else {
            setError(false);
            setPresupuesto(parseInt(e.target.value))
        }
    }
    return (
        <Fragment>
            <h4>Por Favor, ingresa un Presupuesto:</h4>
            <Error error={error} setError={setError} texto="Debes Ingresar un Presupuesto Positivo"/>
            <form>
                <label htmlFor="presupuesto">Presupuesto</label>
                <input
                    type="number"
                    name="presupuesto"
                    id=""
                    placeholder="Ingresa un Número con tu Teclado"
                    onChange={(e)=>handlerPresupuesto(e)}
                />
                <button className="alert button expanded" onClick={()=>handlerInicio()}>Aceptar</button>
            </form>
        </Fragment>
    )
}

export default Inicio;