import React, { useState } from "react";
import "../Estilos/CrearEvento.css";
import { postDatos } from "../services/fetch";
import { useNavigate } from "react-router-dom";
import ImageUploader from "./ImageUploader";

function CrearActividad() {
  const navigate = useNavigate();

  const [nombreActividad, setNombreActividad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imgActividad, setImgActividad] = useState(""); // 👈 IMAGEN

  async function agregarActividad() {
    const objActividad = {
      nombre_actividad: nombreActividad,
      descripcion: descripcion,
      fecha: fecha,
      tipo: tipo,
      ubicacion: ubicacion,
      img_actividad: imgActividad, // 👈 URL CLOUDINARY
    };

    await postDatos(objActividad, "actividades/crear-actividad/");
    alert("Actividad agregada con éxito");
    navigate("/Admin");
  }

  return (
    <div className="formulario-contenedor">
      <h2>Agregar Evento</h2>

      <form className="formulario-evento">
        <input
          type="text"
          placeholder="Nombre del evento"
          onChange={(e) => setNombreActividad(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción"
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setFecha(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tipo de actividad"
          onChange={(e) => setTipo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ubicación"
          onChange={(e) => setUbicacion(e.target.value)}
        />

        {/* 👇 SUBIDA DE IMAGEN */}
        <ImageUploader onUploadSuccess={setImgActividad} />

        <button
          onClick={agregarActividad}
          type="button"
          disabled={!imgActividad} // opcional
        >
          Guardar Evento
        </button>

        <button
          onClick={() => navigate("/Admin")}
          type="button"
        >
          Volver a Inicio
        </button>
      </form>
    </div>
  );
}

export default CrearActividad;
