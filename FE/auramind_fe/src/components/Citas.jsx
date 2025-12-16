import React, { useEffect, useState } from "react";
import "../Estilos/Citas.css";
import { useNavigate } from "react-router-dom";
import { getData, postDatos } from "../services/fetch.js";
import Header from "./Header.jsx";

function Citas() {
  const navigate = useNavigate();

  const [psicologo, setPsicologo] = useState([]);
  const [psicologoId, setPsicologoId] = useState("");
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
  useEffect(()=>{
    async function traerPsicologos() {
      const peticion = await getData("usuarios/crear-usuario/")
      const filtroPsicologos = peticion.filter((psicologo)=>psicologo.rol === "psicologo")
      setPsicologo(filtroPsicologos)
    }
    traerPsicologos()
  },[])
  return (
    <div>
      <Header />
      <section className="form-container">
        <h1>Agendar una cita</h1>

        <form className="appointment-form">
        <select name="" id="" onChange={(e)=>setPsicologoId(e.target.value)}>
          <option value="">Selecciona el psicolgo</option>
          {psicologo.map((psico)=>{
            return(
              <option value={psico.id}>{psico.username}</option>
            )
          })}
        </select>

          <div className="form-group">
            <label for="fecha">Fecha de la cita</label>
            <input
              type="datetime-local"
              id="fecha"
              onChange={(e) => setFechaCita(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="fecha">Motivo cita</label>
            <input className="motivo-cita"
              type="text"
              onChange={(e) => setMotivoCita(e.target.value)}
            />
          </div>

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
