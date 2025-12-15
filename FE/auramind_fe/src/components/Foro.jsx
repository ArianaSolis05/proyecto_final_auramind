import React, { useEffect, useState } from "react";
import "../Estilos/Foro.css";
import Header from "./Header";
import { getData, postDatos } from "../services/fetch";
import ModalReply from "./ModalReply";

function  Foro() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const [respuestas, setRespuestas] = useState({});
  const [respuestasAbiertas, setRespuestasAbiertas] = useState({});

  const [mostrarModalReply, setMostrarModalReply] = useState(false);

  // ===========================
  //     POST - Subir comentario
  // ===========================
  async function subirComentario() {
    const comentario = {
      titulo: titulo,
      contenido: contenido,
      usuario: localStorage.getItem("idUsuario"),
    };

    const peticion = await postDatos(comentario, "foro/crear-comentario/");
    console.log(peticion);

    setTitulo("");
    setContenido("");
    cargarComentarios();
  }

  // ===========================
  // OBTENER LISTA DE COMENTARIOS
  // ===========================
  async function cargarComentarios() {
    try {
      const respuesta = await getData(`foro/crear-comentario/`);
      setComentarios(respuesta);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
    }
  }

  // ===============================
  // OBTENER RESPUESTAS DE UN FORO
  // ===============================
  async function obtenerRespuestas(id_foro) {
    try {
      const respuesta = await getData(`foro/respuestas-foro/${id_foro}/`);
      setRespuestas((prev) => ({
        ...prev,
        [id_foro]: respuesta,
      }));
    } catch (error) {
      console.error("Error al obtener respuestas:", error);
    }
  }

  // ===============================
  // ABRIR / CERRAR RESPUESTAS
  // ===============================
  function toggleRespuestas(idForo) {
    // Guardar id en localStorage
    localStorage.setItem("idForo", idForo);

    setRespuestasAbiertas((prev) => {
      const nuevoEstado = !prev[idForo];

      // Si se está abriendo y no se han cargado respuestas aún
      if (nuevoEstado && !respuestas[idForo]) {
        obtenerRespuestas(idForo);
      }

      return {
        ...prev,
        [idForo]: nuevoEstado,
      };
    });
  }

  // Cargar comentarios al iniciar
  useEffect(() => {
    cargarComentarios();
  }, []);

  return (
    <>
      <Header />

      <div>
        <div className="foro-container">
          <h2 className="foro-titulo">Foros de la Comunidad</h2>

          {/* CREAR COMENTARIO */}
          <div className="foro-categoria">
            <div className="cat-info">
              <div className="icon">💬</div>
              <div>
                <h3>Escribe tus ideas en este foro</h3>

                <input
                  type="text"
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Contenido"
                  value={contenido}
                  onChange={(e) => setContenido(e.target.value)}
                />

                <button onClick={subirComentario}>Enviar</button>
              </div>
            </div>
          </div>

          {/* LISTA DE COMENTARIOS */}
          <div className="comentarios-recientes">
            <h3>Comentarios Recientes</h3>

            {comentarios.map((comentario) => (
              <div className="comentario" key={comentario.id}>
                <h4>{comentario.titulo}</h4>
                <p>{comentario.contenido}</p>

                {/* BOTÓN VER / OCULTAR RESPUESTAS */}
                <button onClick={() => toggleRespuestas(comentario.id)}>
                  {respuestasAbiertas[comentario.id]
                    ? "Ocultar respuestas"
                    : "Ver respuestas"}
                </button>

                {/* BOTÓN RESPONDER */}
                <button
                  onClick={() => {
                    setMostrarModalReply(true);
                    localStorage.setItem("idForo", comentario.id);
                  }}
                >
                  Responder
                </button>

                {/* RESPUESTAS DEL FORO */}
                {respuestasAbiertas[comentario.id] && (
                  <div className="lista-respuestas">
                    {respuestas[comentario.id] ? (
                      respuestas[comentario.id].length > 0 ? (
                        respuestas[comentario.id].map((r) => (
                          <div key={r.id} className="respuesta">
                            <p>{r.contenido}</p>
                            <small>Usuario: {r.usuario_nombre}</small>
                          </div>
                        ))
                      ) : (
                        <p>No hay respuestas.</p>
                      )
                    ) : (
                      <p>Cargando...</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {mostrarModalReply && (
            <ModalReply
              isOpen={mostrarModalReply}
              onClose={() => setMostrarModalReply(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Foro;
