import React, { useEffect, useState } from "react";
import "../Estilos/Foro.css";
import Header from "./Header";
import { getData, getDataAutenticado, postDatos, postDatosAutenticado } from "../services/fetch";
import ModalReply from "./ModalReply";

function Foro() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const [respuestas, setRespuestas] = useState({});
  const [respuestasAbiertas, setRespuestasAbiertas] = useState({});

  const [mostrarModalReply, setMostrarModalReply] = useState(false);

  async function subirComentario() {
    const comentario = {
      titulo: titulo,
      contenido: contenido,
      usuario: localStorage.getItem("idUsuario"),
    };

    await postDatosAutenticado(comentario, "foro/crear-comentario/");
    setTitulo("");
    setContenido("");
    cargarComentarios();
  }

  async function cargarComentarios() {
    try {
      const respuesta = await getDataAutenticado(`foro/crear-comentario/`);
      setComentarios(respuesta);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
    }
  }

  async function obtenerRespuestas(id_foro) {
    try {
      const respuesta = await getDataAutenticado(`foro/respuestas-foro/${id_foro}/`);
      setRespuestas((prev) => ({
        ...prev,
        [id_foro]: respuesta,
      }));
    } catch (error) {
      console.error("Error al obtener respuestas:", error);
    }
  }

  function toggleRespuestas(idForo) {
    localStorage.setItem("idForo", idForo);

    setRespuestasAbiertas((prev) => {
      const nuevoEstado = !prev[idForo];

      if (nuevoEstado && !respuestas[idForo]) {
        obtenerRespuestas(idForo);
      }

      return {
        ...prev,
        [idForo]: nuevoEstado,
      };
    });
  }

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
          <div className="foro-categoria crear-comentario">
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
              <div
                className="comentario comentario-card"
                key={comentario.id}
              >
                <h4>{comentario.titulo}</h4>
                <p>{comentario.contenido}</p>

                <button
                  className="btn-respuestas"
                  onClick={() => toggleRespuestas(comentario.id)}
                >
                  {respuestasAbiertas[comentario.id]
                    ? "Ocultar respuestas"
                    : "Ver respuestas"}
                </button>

                <button
                  className="btn-responder"
                  onClick={() => {
                    setMostrarModalReply(true);
                    localStorage.setItem("idForo", comentario.id);
                  }}
                >
                  Responder
                </button>

                {respuestasAbiertas[comentario.id] && (
                  <div className="lista-respuestas">
                    {respuestas[comentario.id] ? (
                      respuestas[comentario.id].length > 0 ? (
                        respuestas[comentario.id].map((r) => (
                          <div
                            key={r.id}
                            className="respuesta respuesta-item"
                          >
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
