import "./Header.css"
import Boton from "../Boton"

const Header = ()=>{
    return <div className="header">
            <img src="img/logo-.png" alt="Logo Fitflix"/>
            <Boton value="Nuevo Video"/>
    </div>
}
export default Header