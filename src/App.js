import React from 'react';
import './reset.css';
import "./App.css";
import Presentacion from './components/Presentacion/Presentacion';
import Proyectos from './components/Proyectos/Proyectos';
import Contactos from './components/Contactos/Contactos';



function App() {
  return (<>
  <Presentacion nombre="Adrian Avila" eslogan="Frontend developer with an eye for design"/>
  <Proyectos/>
  <Contactos/>
  </>);}

export default App;
