import React, { useState, useRef, useEffect } from "react";
import "../Estilos/ModalReply.css";
import { postDatos, getData, postDatosAutenticado  } from "../services/fetch";

export default function ModalReply({ isOpen, onClose}) {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 150);
    } else {
      setReply("");
      setLoading(false);
    }
  }, [isOpen]);

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const agregarRespuesta = async () => {
    if (!reply.trim()) return;
    setLoading(true);
    try {
        const objRespuesta = {
            foro: localStorage.getItem("idForo"),
            usuario: localStorage.getItem("idUsuario"), 
            contenido: reply
        }
        const peticion = await postDatosAutenticado(objRespuesta,"foro/crear-respuesta/")
      setReply("");
      onClose();
    } catch {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="mr-overlay" ref={overlayRef} onMouseDown={handleOverlay}>
      <div className="mr-modal">
        <div className="mr-header">
          <h3>Responder comentario</h3>
          <button className="mr-close" onClick={onClose}>×</button>
        </div>

        <div className="mr-content">

          <textarea
            ref={textareaRef}
            className="mr-input"
            placeholder="Escribe tu respuesta..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />

          <div className="mr-actions">
            <button className="mr-btn cancel" onClick={onClose}>Cancelar</button>
            <button className="mr-btn send" onClick={agregarRespuesta} disabled={loading || !reply.trim()}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
