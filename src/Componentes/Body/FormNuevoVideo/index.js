// import { useState } from "react"
// import "./formNuevoVideo.css"
// import { MdDelete, MdEdit } from 'react-icons/md';
// import CampoTexto from "../../CampoTexto"
// import ListaCategoria from "../../ListaCategoria"
// import { Boton } from "../../Boton"
// import { Boton2 } from "../../Boton"
// import { Container } from '@mui/system';

// const FormNuevoVideo = (props) => {
//   const [titulo, setTitulo] = useState("");
//   const [imagen, setImagen] = useState("");
//   const [link, setLink] = useState("");
//   const [categoria, setCategoria] = useState("");

//   const { registrarVideo, videos, actualizarVideos } = props;

//   const manejarEnvio = (e) => {
//     e.preventDefault();
//     let datosAEnviar = { titulo, link, categoria, imagen };
//     registrarVideo(datosAEnviar);
//     setTitulo("");
//     setImagen("");
//     setLink("");
//     setCategoria("");
//   };

//   const eliminarVideo = (link) => {
//     const nuevosVideos = videos.filter((video) => video.link !== link);
//     actualizarVideos(nuevosVideos);
//   };

//   return (
//     <Container component="section" maxWidth="md">
//       <form onSubmit={manejarEnvio}>
//         <h2 className="ingrese">Ingrese un Nuevo Video</h2>
//         <ListaCategoria
//           valor={categoria}
//           actualizarCategoria={setCategoria}
//           categorias={props.categorias}
//         />
//         <CampoTexto
//           titulo="Titulo"
//           placeHolder="Ingrese el titulo del Tema"
//           valor={titulo}
//           actualizarValor={setTitulo}
//         />
//         <CampoTexto
//           titulo="Imagen"
//           placeHolder="Ingrese imagen del Tema"
//           valor={imagen}
//           actualizarValor={setImagen}
//         />
//         <CampoTexto
//           titulo="Link"
//           placeHolder="Ingrese la URL del video"
//           valor={link}
//           actualizarValor={setLink}
//         />
//         <Boton value="Enviar" name="guardar" />
//         <div className="newCat">
//           <Boton2 value="Agregar Categoría" newCatOpen={props.newCatOpen} />
//         </div>
//       </form>
//       <section className="video_cat">
//         <h2 className="ingrese">Administrar Videos</h2>
//         <div className="abm">
//           {videos.map((vid) => (
//             <div className="abm-item">
//               <div className="icon1">
//                 <MdEdit />
//               </div>
//               <div
//                 className="icon2"
//                 onClick={() => eliminarVideo(vid.link)}
//               >
//                 <MdDelete />
//               </div>
//               <img
//                 className="vid-item"
//                 alt="video"
//                 key={vid.link}
//                 src={vid.imagen}
//               ></img>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Container>
//   );
// };

// export default FormNuevoVideo;

import { useState } from "react";
import "./formNuevoVideo.css";
import { MdDelete, MdEdit } from 'react-icons/md';
import CampoTexto from "../../CampoTexto";
import ListaCategoria from "../../ListaCategoria";
import { Boton } from "../../Boton";
import { Boton2 } from "../../Boton";
import { Container } from '@mui/system';

const FormNuevoVideo = (props) => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [link, setLink] = useState("");
  const [categoria, setCategoria] = useState("");
  const [editing, setEditing] = useState(false); // new state to track if editing a video
  const [videoToEdit, setVideoToEdit] = useState({}); // new state to store the video being edited

  const { registrarVideo, videos, actualizarVideos } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = { titulo, link, categoria, imagen };
    if (editing) { // if editing a video, update it instead of registering a new one
      const nuevosVideos = videos.map((video) => {
        if (video.link === videoToEdit.link) {
          return { ...video, ...datosAEnviar };
        } else {
          return video;
        }
      });
      actualizarVideos(nuevosVideos);
      setEditing(false);
    } else {
      registrarVideo(datosAEnviar);
    }
    setTitulo("");
    setImagen("");
    setLink("");
    setCategoria("");
  };

  const eliminarVideo = (link) => {
    const nuevosVideos = videos.filter((video) => video.link !== link);
    actualizarVideos(nuevosVideos);
  };

  const editarVideo = (video) => { // new function to handle editing a video
    setVideoToEdit(video);
    setTitulo(video.titulo);
    setImagen(video.imagen);
    setLink(video.link);
    setCategoria(video.categoria);
    setEditing(true);
  };

  return (
    <Container component="section" maxWidth="md">
      <form onSubmit={manejarEnvio}>
        <h2 className="ingrese">Ingrese un Nuevo Video</h2>
        <ListaCategoria valor={categoria} actualizarCategoria={setCategoria} categorias={props.categorias} />
        <CampoTexto titulo="Titulo" placeHolder="Ingrese el titulo del Tema" valor={titulo} actualizarValor={setTitulo} />
        <CampoTexto titulo="Imagen" placeHolder="Ingrese imagen del Tema" valor={imagen} actualizarValor={setImagen} />
        <CampoTexto titulo="Link" placeHolder="Ingrese la URL del video" valor={link} actualizarValor={setLink} />
        <Boton value={editing ? "Guardar cambios" : "Guardar"} name="guardar" />
        <div className="newCat">
          <Boton2 value="Agregar Categoría" newCatOpen={props.newCatOpen} />
        </div>
      </form>
      <section className="video_cat">
        <h2 className="ingrese">Administrar Videos</h2>
        <div className="abm">
          {videos.map((vid) => (
            <div className="abm-item">
              <div className="icon1">
                <MdEdit onClick={() => editarVideo(vid)} /> {/* add edit icon */}
              </div>
              <div className="icon2" onClick={() => eliminarVideo(vid.link)}>
                <MdDelete />
              </div>
              <img className="vid-item" alt="video" key={vid.link} src={vid.imagen}></img>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FormNuevoVideo;