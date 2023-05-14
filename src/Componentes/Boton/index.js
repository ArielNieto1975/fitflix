import "./Boton.css"
import { useState } from "react"
export const Boton = (props)=>{

    return <button className="boton" onClick={props.cambiarMostrarNV}>{props.value}</button>
}
export const Boton2 = (props)=>{

    return <button className="boton" onClick={props.newCatOpen}>{props.value}</button>
}
