import "./Header.css"
import {Boton} from "../Boton"

const Header = (props)=>{
    
    return <div className="header">
            <img src="img/logo-.png" alt="Logo Fitflix" onClick={props.mostrarPrincipal}/>
            { props.mostrarNewVid || props.mostrarNewCat? <></> : <Boton value="ABM Videos" cambiarMostrarNV={props.cambiarMostrarNV}/> }
            { props.Principal? <Boton className="boton_princ" value="ABM Videos" cambiarMostrarNV={props.cambiarMostrarNV}/>  : <></> }
        </div>
}
export default Header