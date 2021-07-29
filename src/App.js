import React, {useState} from 'react'
import './styles/App.css';
import Inicio from "./components/Inicio"
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [inicio, setInicio] = useState(true);
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <div className="App">
      <div className="Cabeza"><h2>Calculadora de Presupuesto</h2></div>
      <div className="Cuerpo">
        {inicio ?
          (
            <Inicio setInicio={setInicio} setPresupuesto={setPresupuesto}/>
          ) : (
            <div className="Cuerpo2">
              <Formulario />
              <Lista/>
            </div>
          )
        }
      </div>
      <div className="Pies"></div>
    </div>
  );
}

export default App;
