import React, { useState } from "react";
import "../Estilos/CrearEvento.css"
import { postDatos } from "../services/fetch";
import {  useNavigate } from "react-router-dom";


function CrearActividad() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  


  async function agregarActividad() {
    const objActividad = {
      titulo: titulo,
      descripcion: descripcion,
      fechaEvento: fecha,
    };
    await postDatos(objActividad, "/actividades/crear-actividad");
  }
  return (
    <div className="formulario-contenedor">
      <h2>Agregar Evento</h2>
      <form className="formulario-evento">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="date"
          name="fecha"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="time"
          name="hora"
          onChange={(e) => setFecha(e.target.value)}
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
