import './App.css';
import './Style/skyco.css'
import React from 'react'
import Funciones from './Componentes/Funciones'
import Contenido from './Componentes/Contenidio'
import Header from './Componentes/Header'

function App() {
  return (
    <main className="app-tienda">
      <Header></Header>
      <Contenido></Contenido>
      <Funciones onClickNumber={accion => console.log(accion)}></Funciones>
    </main>
  );
}

export default App;
