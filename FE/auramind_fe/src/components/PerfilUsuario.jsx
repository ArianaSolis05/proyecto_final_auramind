import React, { useEffect, useState } from "react";
import "../Estilos/PerfilUsuario.css";
import { Link } from "react-router-dom";
import { deleteDatos, getData, getDataAutenticado } from "../services/fetch";
import Header from "./Header";
import EditarComentarioModal from "./EditarComentarioModal";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [comentarioSeleccionado,setComentarioSeleccionado] = useState(null)
  const [mostrarModalEditar,setMostrarModalEditar] = useState(false)

  useEffect(() => {
    async function traerUsuario() {
      const data = await getDataAutenticado(
        `usuarios/usuario/${localStorage.getItem("idUsuario")}/`
      );
      setUsuario(data[0]);
      console.log(data);
    }
    async function traerComentarios() {
      const data = await getData(
        `foro/comentarios-usuario/${localStorage.getItem("idUsuario")}/`
      );
      setComentarios(data);
      console.log(data);
    }
    traerComentarios();
    traerUsuario();
  }, []);

   
    const eliminarForo = async(id) => {
        const peticion = await deleteDatos(`foro/eliminar-comentario`, id)
        setForo(foro.filter((f) => f.id !== id));
        console.log(peticion);
    } 

    function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (
    mes < 0 ||
    (mes === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}

  return (
    <>
      <Header />
      <section className="perfil-section">
        <div className="perfil-wrapper">
          <aside className="perfil-sidebar">
            <div className="perfil-imagen-container">
              <img
                src={usuario.img_perfil}
                alt="Foto de perfil"
                className="perfil-imagen"
              />
            </div>

            <h2 className="perfil-nombre">
              {usuario.first_name + " " + usuario.last_name}
            </h2>
            <p className="perfil-profesion">{usuario.rol}</p>
            <p className="perfil-correo">{usuario.correo}</p>

            <div className="perfil-info">
              <p>
                <strong>Edad:</strong> {calcularEdad(usuario.fecha_nacimiento)}
              </p>
              <p>
                <strong>Ciudad:</strong> {usuario.nacionalidad}
              </p>
              <p>
                <strong>Género:</strong>
                {usuario.genero}
              </p>
            </div>

            <div className="perfil-botones">
              <Link to="/EditUsuario" className="btn-editar">
                Editar Perfil
              </Link>
              <Link to="/PagPrincipal" className="btn-volver">
                Volver
              </Link>
            </div>
          </aside>

          <main className="perfil-detalles">
            <div className="perfil-card">
              <h3>🌿 Tus comentarios</h3>
              <div className="comentarios-lista">
                {comentarios.length === 0 &&(
                <p>Aún no has realizado comentarios.</p>
                )}
                {comentarios.map((comentario) => (
                  <div className="comentario-item" key={comentario.id}>
                    <p className="comentario-texto">tu comentario: {comentario.contenido}</p>
                    <span className="comentario-fecha">
                      {new Date(comentario.fecha_publicacion).toLocaleDateString()}
                    </span>
                    <button onClick={eliminarForo}>Eliminar</button>
                    <button
                      onClick = {()=>{
                         setMostrarModalEditar(true)
                         setComentarioSeleccionado(comentario)
                      }}
                    
                    >Editar</button>
                  </div>
                ))}
              </div>
                  {mostrarModalEditar && (
                    <EditarComentarioModal isOpen={mostrarModalEditar} onClose={()=>setMostrarModalEditar(false)} tituloInicial={comentarioSeleccionado.titulo} contenidoInicial={comentarioSeleccionado.contenido}/>
                  )}
            
            </div>

 
          </main>
        </div>
      </section>
    </>
  );
};

export default PerfilUsuario;
