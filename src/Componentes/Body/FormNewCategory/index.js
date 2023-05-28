import { useState } from "react"
import "../FormNuevoVideo/formNuevoVideo.css"
import CampoTexto from "../../CampoTexto"
import {Boton} from "../../Boton"
import { Container } from '@mui/system';

const FormNewCategory = (props)=>{
    const [categoria, setcategoria] = useState("")
    const [catColor, setCatColor] = useState("")
    
    const {registrarCategoria} = props

    const manejarCat = (e) => {
        e.preventDefault()
        let catAEnviar={
            categoria,
            catColor
        }
        registrarCategoria(catAEnviar)
    }


    return  <Container component= "section" maxWidth= "md" >
                <form onSubmit={manejarCat}>
                    <h2 className="ingrese">Ingrese una Nueva Categoría</h2>
                    <CampoTexto 
                        titulo="Categoría" 
                        placeHolder="Ingrese el titulo del Tema"
                        valor={categoria}
                        actualizarValor={setcategoria}
                    />
                    <label className="colorTit">Color:</label>
                    <input 
                        className="setColor" 
                        type="color" 
                        valor={catColor}
                        actualizarValor={setCatColor}
                        />
                    <Boton value="Limpiar"/>
                    <Boton value="Guardar" onClick={manejarCat} />                
                    {/* <Boton value="Guardar"  cambiarMostrarNV={props.cambiarMostrarNV}/>                 */}
                </form>
                
             </Container>
}

export default FormNewCategory