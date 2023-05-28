
import "./listCategoria.css"

const ListaCategoria = (props)=> {
    // const categorias= [
    //     "Reggaeton",
    //     "Hip-Hop",
    //     "Pop"
    // ]
    const manejarCambio = (e)=>{
        props.actualizarCategoria(e.target.value)
    }

    return <div>
            <label className="label-tirulo">Categoria</label>
            <select className="select" value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
                {props.categorias.map((categoria)=>{
                    return <option key={categoria.catColor} value={categoria.categoria}> {categoria.categoria} </option>
                })}
            </select>
    </div>
}
export default ListaCategoria