import Banner from "../Banner"
import Carrusel from "./Carrusel"
import { useState } from "react"
import FormNuevoVideo from "./FormNuevoVideo"
import FormNewCategory from "./FormNewCategory"


const Body= (props)=>{

    return <section className="body">
            { props.mostrarNewVid || props.mostrarNewCat?  <></> : <Banner />}
            { props.mostrarNewVid || props.mostrarNewCat? <></> : <Carrusel />}
            { props.mostrarNewVid? <FormNuevoVideo newCatOpen={props.newCatOpen}/> : <></>}
            { props.mostrarNewCat? <FormNewCategory cambiarMostrarNV={props.cambiarMostrarNV}/> : <></>}
            {/* <FormNewCategory/> */}
            
        </section>
}
export default Body