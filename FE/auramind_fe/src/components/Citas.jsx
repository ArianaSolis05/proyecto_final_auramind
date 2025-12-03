import React, { useState } from "react";
import "../Estilos/Citas.css";
import { useNavigate } from "react-router-dom";
import { postDatos } from "../services/fetch.js";
import Header from "./Header.jsx";

function Citas() {
  const navigate = useNavigate();

  const [psicologoId, setPsicologoId] = useState(1);
  const [motivoCita, setMotivoCita] = useState("");
  const [fechaCita, setFechaCita] = useState("");

  async function agregarCita() {
    const objCitas = {
      paciente: localStorage.getItem("idUsuario"),
      psicologo: psicologoId,
      motivo: motivoCita,
      fecha_hora: fechaCita,
    };
    await postDatos(objCitas, "citas/crear-citas/");
  }

  return (
    <div>
      <Header />
      <section className="form-container">
        <h1>Agendar una cita</h1>

        <form className="appointment-form">
          <div className="form-group">
            <label for="email">Psicologo</label>
            <input
              type="number"
              placeholder="nombre@correo.com"
              onChange={(e) => setPsicologoId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="fecha">Fecha de la cita</label>
            <input
              type="date"
              id="fecha"
              onChange={(e) => setFechaCita(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="fecha">Motivo cita</label>
            <input
              type="text"
              onChange={(e) => setMotivoCita(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label for="tipo">Tipo de cita</label>
            <select id="tipo" required>
              <option value="" disabled selected>
                Selecciona una opción
              </option>
              <option>Consulta general</option>
              <option>Terapia individual</option>
              <option>Evaluación inicial</option>
              <option>Sesión de seguimiento</option>
            </select>
          </div> */}

          <button onClick={agregarCita} type="submit" className="btn-enviar">
            Agendar cita
          </button>
          <button
            type="submit"
            className="btn-enviar"
            onClick={() => navigate("/PagPrincipal")}
          >
            Volver
          </button>
        </form>
      </section>
    </div>
  );
}

export default Citas;
