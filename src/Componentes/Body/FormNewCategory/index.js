import { useState } from "react"
import "../FormNuevoVideo/formNuevoVideo.css"
import "./formNewCategory.css"
import CampoTexto from "../../CampoTexto"
import {Boton} from "../../Boton"
import { Container } from '@mui/system';

const FormNewCategory = (props)=>{
    const [categoria, setcategoria] = useState("")
    const [catColor, setCatColor] = useState("")

    const [col, setCol] = useState("#222222")
    
    const {registrarCategoria, categorias, eliminarCategoria} = props
    

    const manejarCat = (e) => {
        e.preventDefault()
        let catAEnviar={
            categoria,
            catColor: col
        }
        registrarCategoria(catAEnviar)
    }

    // const manejarDelete = (e)=>{
    //     eliminarCategoria()
    // }

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
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setCol(e.target.value)
                        }}
                        value={col}
                        />
                    <Boton value="Limpiar"/>
                    <Boton value="Guardar" onClick={manejarCat} />                
                   
                </form>
                <section className="categoria_indice">
                    {
                        categorias.map((category)=> <section className="item" key={category.catColor}>
                            <div className="i_item i_title" 
                                                            
                                >
                                {category.categoria}
                            </div>
                            <div  className="i_item i_color">
                                {category.catColor}
                            </div>
                            <div className="i_item i_modify">Modificar</div>
                            <div className="i_item i_delete" onClick={()=>eliminarCategoria(category.catColor)}>Eliminar</div>
                        </section>
                    )}
             
                </section>
                
             </Container>
}

export default FormNewCategory