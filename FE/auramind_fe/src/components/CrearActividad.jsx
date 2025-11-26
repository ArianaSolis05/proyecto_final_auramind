import React, { useState } from "react";
import "../Estilos/CrearEvento.css"
import { postDatos } from "../services/fetch";
import {  useNavigate } from "react-router-dom";


function CrearActividad() {
  const navigate = useNavigate();

  const [nombreActividad, setNombreActividad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  


  async function agregarActividad() {
    const objActividad = {
      nombre_actividad: nombreActividad,
      descripcion: descripcion,
      fecha: fecha,
      tipo: tipo,
      ubicacion: ubicacion,

    };
    await postDatos(objActividad, "actividades/crear-actividad/");
  }
  return (
    <div className="formulario-contenedor">
      <h2>Agregar Evento</h2>
      <form className="formulario-evento">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          onChange={(e) => setNombreActividad(e.target.value)}
        />
        <input
          type="text"
          name="fecha"
          placeholder="Descripción" 
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="date"
          name="hora"
          placeholder="Descripción"
          onChange={(e) => setFecha(e.target.value)}
        />
         <input
          type="text"
          name="hora"
          placeholder="Tipo de actividad"
          onChange={(e) => setTipo(e.target.value)}
        />
         <input
          type="text"
          name="hora"
          placeholder="Ubicación"
          onChange={(e) => setUbicacion(e.target.value)}
        />
    
        <button onClick={agregarActividad} type="button">
          Guardar Evento
        </button>
        <button onClick={()=> navigate ("/Admin")} type="button">
          Volver a Inicio
        </button>
      </form>
    </div>
  );
}

export default CrearActividad;
