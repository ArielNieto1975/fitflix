import { useState } from "react"
import "./formNuevoVideo.css"
import CampoTexto from "../../CampoTexto"
import ListaCategoria from "../../ListaCategoria"
import { Boton } from "../../Boton"
import {Boton2} from "../../Boton"
import { Container } from '@mui/system';

const FormNuevoVideo = (props)=>{
    const [titulo, setTitulo] = useState("")
    const [link, setLink] = useState("")
    const [categoria, setCategoria] = useState("")

    const {registrarVideo } = props

    const manejarEnvio = (e)=> {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            link,
            categoria
        }
        registrarVideo(datosAEnviar)
    }

    return  <Container component= "section" maxWidth= "md" >
                <form onSubmit={manejarEnvio}>
                        <h2 className="ingrese">Ingrese un Nuevo Video</h2>
                        <ListaCategoria valor= {categoria} actualizarCategoria={setCategoria} categorias={props.categorias}/>
                        <CampoTexto 
                            titulo="Titulo" 
                            placeHolder="Ingrese el titulo del Tema" 
                            valor={titulo} 
                            actualizarValor={setTitulo}
                        />
                        <CampoTexto 
                            titulo="Link" 
                            placeHolder="Ingrese la URL del video" 
                            valor={link} 
                            actualizarValor={setLink}
                        />
                        <Boton value="Limpiar"/>
                        <Boton value="Guardar" onClick={manejarEnvio}/>
                        <div className="newCat">
                            <Boton2 value="Nueva Categoria" newCatOpen={props.newCatOpen}/>    
                        </div>
                </form>
                               
             </Container>
}

export default FormNuevoVideo