import "./Header.css"
import {Boton} from "../Boton"

const Header = (props)=>{
    // console.log("mostrar", props.Principal)
    return <div className="header">
            <img src="img/logo-.png" alt="Logo Fitflix" onClick={props.mostrarPrincipal}/>
            {/* <Boton value="Nuevo Video" cambiarMostrarNV={props.cambiarMostrarNV}/> */}
            { props.mostrarNewVid || props.mostrarNewCat? <></> : <Boton value="Nuevo Video" cambiarMostrarNV={props.cambiarMostrarNV}/> }
            { props.Principal? <Boton className="boton_princ" value="Nuevo Video" cambiarMostrarNV={props.cambiarMostrarNV}/>  : <></> }
        </div>
}
export default Header