import Banner from "../Banner"
import Carrusel from "./Carrusel"
import { useState } from "react"
import FormNuevoVideo from "./FormNuevoVideo"
import FormNewCategory from "./FormNewCategory"


const Body= (props)=>{
    
    const [videos, actualizarVideos] = useState ([
        {
            categoria:"Pop",
            titulo:"Despechá - Rosalía",
            link:"https://www.youtube.com/embed/M39fXHF5S78"
        },
        {
            categoria:"Reggaeton",
            titulo:"Me dijeron - Ozuna",
            link:"https://www.youtube.com/embed/V-HTqiLZArs"
        },
        {
            categoria:"Reggaeton",
            titulo:"El Merengue - Marshmello, Manuel Turizo",
            link:"https://www.youtube.com/embed/nMa8DZDbBcE"
        },
        {
            categoria:"Urban-Pop",
            titulo:"BZRP Music Sessions #52  - Quevedo",
            link:"https://www.youtube.com/embed/TNcnRb7ZErk"
        },
        {
            categoria:"Reggaeton",
            titulo:"TQG - Karol G, Shakira",
            link:"https://www.youtube.com/embed/nawFtuTzV0Q"
        },
        {
            categoria:"Reggaeton",
            titulo:"Todo de Ti - Rauw Alejandro",
            link:"https://www.youtube.com/embed/3mYzyuxLiII"
        },
        {
            categoria:"Pop",
            titulo:"BZRP Music Sessions #53  - Shakira",
            link:"https://www.youtube.com/embed/6r15MHeIStg"
        },
        {
            categoria:"Pop",
            titulo:"Princesa - Tini, Karol G",
            link:"https://www.youtube.com/embed/VGXPyzYoNqU"
        },
        {
            categoria:"Pop",
            titulo:"Pepas - Farruko",
            link:"https://www.youtube.com/embed/bCkUAK6m3ZI"
        },
        {
            categoria:"Urban-Pop",
            titulo:"Tu Recuerdo - Wisin, Emilia, Lyanno",
            link:"https://www.youtube.com/embed/kJs4D6ylEZs"
        },
        {
            categoria:"Urban-Pop",
            titulo:"Cupido - TINI",
            link:"https://www.youtube.com/embed/dcfLLp4VmOI"
        },
        {
            categoria:"Urban-Pop",
            titulo:"Baila Baila Baila - Ozuna",
            link:"https://www.youtube.com/embed/GUmzaJNZrgY"
        },
    ])

    const registrarVideo = (video)=>{
        console.log("nuevovideo", video)
        
        actualizarVideos([...videos, video])
    }

    const [categorias, actualizarCategorias]= useState([
        {
            categoria:"Reggaeton",
            catColor:"#48ff00"
        },
        {
            categoria:"Urban-Pop",
            catColor:"#3adff5"
        },
        {
            categoria:"Pop",
            catColor:"yellow"
        }
    ])

    const eliminarCategoria= (catColor)=>{
        console.log("Eliminar Categoria", catColor)
        const nuevasCategorias = categorias.filter((categoria)=> categoria.catColor !== catColor)
        actualizarCategorias(nuevasCategorias)
    }

    const registrarCategoria = (categoria)=>{
        actualizarCategorias([...categorias,categoria])
    }

    return <section className="body">
            { props.mostrarNewVid || props.mostrarNewCat?  <></> : <Banner />}

            { 
                props.mostrarNewVid || props.mostrarNewCat? <></> :
                <Carrusel 
                    categorias={categorias}
                    videos={videos}
                    mostrarNewVid={props.mostrarNewVid} 
                    mostrarNewCat={props.mostrarNewCat}
                />
            }
            { 
                props.mostrarNewVid? <FormNuevoVideo 
                    newCatOpen={props.newCatOpen} 
                    categorias={categorias}
                    registrarVideo={registrarVideo}
                /> : <></>
            }
            { 
                props.mostrarNewCat? <FormNewCategory 
                    cambiarMostrarNV={props.cambiarMostrarNV}
                    registrarCategoria={registrarCategoria}
                    categorias={categorias}
                    eliminarCategoria={eliminarCategoria}
                /> : <></>
            }
            
            
        </section>
}
export default Body