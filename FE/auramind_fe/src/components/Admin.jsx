import { useState } from "react";
import "../Estilos/Admin.css";
import { useNavigate } from "react-router-dom";
import CrearActividad from "./CrearActividad";
import MostrarUsuarios from "./MostrarUsuarios";
import MostrarActividades from "./ActividadesAdmin";
import MostrarForo from "./MostrarForo";

function Admin() {
  const navigate = useNavigate();
  const [crearActividad, setCrearActividad] = useState(true);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarActividades, setMostrarActividades] = useState(false);
  const [mostrarForo, setMostrarForo] = useState(false);

  return (
    <div>
      <div className="sidebar">
        <h3 className="p-3">AuraMind</h3>
        <a
          onClick={() => {
            setCrearActividad(true);
            setMostrarUsuarios(false);
            setMostrarActividades(false);
          }}
        >
          <i className="fa fa-chart-bar me-2"></i>
          Crear Actividad
        </a>
        <a
          onClick={() => {
            setMostrarUsuarios(true);
            setCrearActividad(false);
            setMostrarActividades(false);
          }}
        >
          <i className="fa fa-table me-2"></i> Usuarios
        </a>
        <a
          onClick={() => {
            setMostrarActividades(true);
            setCrearActividad(false);
            setMostrarUsuarios(false);
          }}
        >
          <i className="fa fa-cubes me-2"></i> Ver actividades
        </a>
        <a
          onClick={() => {
            setMostrarForo(true);
            setCrearActividad(false);
            setMostrarUsuarios(false);
          }}
        >
          <i className="fa fa-file-alt me-2"></i> Foro
        </a>
        <a
          onClick={() => {
            navigate("/PagPrincipal")  
          }}
        >
          <i className="fa fa-file-alt me-2"></i> Página principal
        </a>

        <a
          onClick={() => {
            navigate("/");
            localStorage.clear();
          }}
        >
          <i className="fa fa-file-alt me-2"></i> Cerrar Sesion
        </a>
      </div>
      <div className="content">
        <div className="topbar d-flex justify-content-between align-items-center mb-4">
          <h4 className="m-0">Página Admin</h4>
        </div>

        <div className="row">{crearActividad && <CrearActividad />}</div>

        <div className="row">{mostrarUsuarios && <MostrarUsuarios />}</div>

        <div className="row">
          {mostrarActividades && <MostrarActividades />}
        </div>

        <div className="row">{mostrarForo && <MostrarForo />}</div>
      </div>
    </div>
  );
}

export default Admin;
