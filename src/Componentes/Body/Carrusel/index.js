import React from "react"
import CenterMode from "./Slider"


const Carrusel= (props)=>{
    const {categorias, videos} = props


    return <> 
            {
                categorias.map((categoria)=> <CenterMode                     
                    categoria={categoria}
                    key={categoria.categoria}
                    videos={videos.filter(video => video.categoria === categoria.categoria)}
                 />
            )}
   
    </>
}
export default Carrusel