import { useState } from "react"
import "../FormNuevoVideo/formNuevoVideo.css"
import CampoTexto from "../../CampoTexto"
import {Boton} from "../../Boton"
import { Container } from '@mui/system';

const FormNewCategory = (props)=>{
    return  <Container component= "section" maxWidth= "md" >
                <h2 className="ingrese">Ingrese una Nueva Categoría</h2>
                <CampoTexto titulo="Categoría" placeHolder="Ingrese el titulo del Tema"/>
                <label className="colorTit">Color:</label><input className="setColor" type="color" />
                <Boton value="Limpiar"/>
                <Boton value="Guardar"  cambiarMostrarNV={props.cambiarMostrarNV}/>                
             </Container>
}

export default FormNewCategory