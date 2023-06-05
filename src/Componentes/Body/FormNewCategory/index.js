import { useState } from "react";
import "../FormNuevoVideo/formNuevoVideo.css";
import "./formNewCategory.css";
import CampoTexto from "../../CampoTexto";
import { Boton } from "../../Boton";
import { Container } from "@mui/system";

const FormNewCategory = (props) => {
  const [categoria, setcategoria] = useState("");
  const [catColor, setCatColor] = useState("");
  const [col, setCol] = useState("");
  const [categoriaModificando, setCategoriaModificando] = useState(null); 

  const { registrarCategoria, categorias, eliminarCategoria } = props;

  const manejarModificar = (category) => {
    setcategoria(category.categoria); 
    setCatColor(category.catColor); 
    setCol(category.catColor);
    setCategoriaModificando(category); 
    eliminarCategoria(category.catColor); 
  };

  const manejarGuardar = (e) => {
    e.preventDefault();
    let catAEnviar = { categoria, catColor: col };
    if (categoriaModificando) { 
      registrarCategoria(catAEnviar); 
    } else { 
      registrarCategoria(catAEnviar);
    }
    setcategoria("");
    setCatColor("");
    setCol("");
    setCategoriaModificando(null); 
  };

  return (
    <Container component="section" maxWidth="md">
      <form onSubmit={manejarGuardar}>
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
          value={catColor}
          onChange={(e) => {
            console.log(e.target.value);
            setCatColor(e.target.value);
            setCol(e.target.value);
          }}
        />
        <Boton value="Guardar" onClick={manejarGuardar} />
        <div className="newCat">
          <Boton
            value="Volver"
            cambiarMostrarNV={props.cambiarMostrarNV}
          />
        </div>
      </form>
      <section className="categoria_indice">
        {categorias.map((category) => (
          <section className="item" key={category.catColor}>
            <div className="i_item i_title">{category.categoria}</div>
            <div className="i_item i_color">{category.catColor}</div>
            <div
              className="i_item i_modify"
              onClick={() => manejarModificar(category)} 
            >
              Modificar
            </div>
            <div
              className="i_item i_delete"
              onClick={() => eliminarCategoria(category.catColor)}
            >
              Eliminar
            </div>
          </section>
        ))}
      </section>
    </Container>
  );
};

export default FormNewCategory;