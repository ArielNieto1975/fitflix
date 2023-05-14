import { useState } from "react"
import "./listCategoria.css"

const ListaCategoria = ()=> {
    const categorias= [
        "Reggaeton",
        "Hip-Hop",
        "Pop"
    ]

    return <div>
            <label className="label-tirulo">Categoria</label>
            <select className="select">
                {categorias.map((categoria, index)=>{
                    return <option key={index}> {categoria} </option>
                })}
            </select>
    </div>
}
export default ListaCategoria