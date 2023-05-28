import React from "react"
import CenterMode from "./Slider"


const Carrusel= (props)=>{
    const {categorias, videos} = props

    // console.log(categorias)
    // console.log(videos)
    return <> 
            {
                categorias.map((categoria)=> <CenterMode                     
                    categoria={categoria}
                    key={categoria.categoria}
                    videos={videos.filter(video => video.categoria === categoria.categoria)}
                 />
            )}

                
                {/* <CenterMode 
                // categorias={categorias.map((categoria)=>categoria)}
                categorias={categorias}
                videos={videos}
             /> */}
            
        {/* <CenterMode 
            categorias = {categorias} 
            videos={videos}
            // videos={videos.filter(video => video.categoria === categorias.categoria)}
            
        /> */}
        
    
    </>
}
export default Carrusel