import { useState } from "react"
import "./formNuevoVideo.css"
import CampoTexto from "../../CampoTexto"
import ListaCategoria from "../../ListaCategoria"
import { Boton } from "../../Boton"
import {Boton2} from "../../Boton"
import { Container } from '@mui/system';

const FormNuevoVideo = (props)=>{
    return  <Container component= "section" maxWidth= "md">
                <h2 className="ingrese">Ingrese un Nuevo Video</h2>
                <ListaCategoria />
                <CampoTexto titulo="Titulo" placeHolder="Ingrese el titulo del Tema"/>
                <CampoTexto titulo="Link" placeHolder="Ingrese la URL del video"/>
                <Boton value="Limpiar"/>
                <Boton value="Guardar"/>
                <div className="newCat">
                    <Boton2 value="Nueva Categoria" newCatOpen={props.newCatOpen}/>    
                </div>
                
             </Container>
}

export default FormNuevoVideo