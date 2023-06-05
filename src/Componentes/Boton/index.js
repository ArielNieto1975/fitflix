import "./Boton.css"
export const Boton = (props)=>{
     return <button 
                className="boton" 
                name={props.name} 
                onClick={props.cambiarMostrarNV} 
            >
                {props.value}
            </button>
}
export const Boton2 = (props)=>{

    return <button className="boton" onClick={props.newCatOpen}>{props.value}</button>
}
