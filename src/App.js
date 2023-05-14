import './App.css';
import { useState } from 'react';
import Header from "./Componentes/Header";
import Footer from './Componentes/Footer';
import Body from './Componentes/Body';

function App() {
  const [principal, setPrincipal] = useState (true)
  const [mostrarNewVid, setmostrarNewVid] = useState(false)
  const [mostrarNewCat, setMostrarNewCat] = useState(false)
  const mostrarPrincipal = ()=>{
    setPrincipal(principal)
    setmostrarNewVid(false)
    setMostrarNewCat(false)
  }  
  const cambiarMostrarNV = ()=> {
    setmostrarNewVid(!mostrarNewVid)
    setMostrarNewCat(false)
  }
  const newCatOpen= ()=>{
    setMostrarNewCat(true)
    setmostrarNewVid(false)
    setPrincipal(false)
    
  }

  return (
    <div className="App">
        <Header cambiarMostrarNV={cambiarMostrarNV} mostrarNewVid={mostrarNewVid} mostrarPrincipal={mostrarPrincipal} principal={principal} mostrarNewCat={mostrarNewCat}/> 
        <Body principal={principal} cambiarMostrarNV={cambiarMostrarNV} mostrarNewVid={mostrarNewVid} mostrarNewCat={mostrarNewCat} newCatOpen={newCatOpen}/>
        <Footer/>
    </div>
  );
}

export default App;
