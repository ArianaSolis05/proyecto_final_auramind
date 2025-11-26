import { useState } from "react";
import "../Estilos/Admin.css";
import { useNavigate } from "react-router-dom";
import CrearActividad from "./CrearActividad";
import MostrarUsuarios from "./MostrarUsuarios";

function Admin() {
  const navigate = useNavigate();
  const [crearActividad, setCrearActividad] = useState(true);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  return (
    <div>
      <div className="sidebar">
        <h3 className="p-3">AuraMind</h3>
        <a
            onClick={() => {
              setCrearActividad(true);
              setMostrarUsuarios(false);
            }}
        >
          <i
            className="fa fa-chart-bar me-2"
          
          ></i>
          Crear Actividad
        </a>
        <a
          onClick={() => {
            setMostrarUsuarios(true);
            setCrearActividad(false);
          }}
        >
          <i className="fa fa-table me-2"></i> Usuarios
        </a>
        <a>
          <i className="fa fa-cubes me-2"></i> Eventos
        </a>
        <a>
          <i className="fa fa-file-alt me-2"></i> Comentarios
        </a>
        <a>
          <i className="fa fa-file-alt me-2"></i> Configuracion
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
<<<<<<< HEAD
          <h4 className="m-0">AuraMind</h4>
=======
          <h4 className="m-0">Página Admin</h4>
>>>>>>> 465034caeabecbabe504ba32f8130bb1ce41862b
        </div>

        <div className="row">{crearActividad && <CrearActividad />}</div>

        <div className="row">{mostrarUsuarios && <MostrarUsuarios />}</div>
      </div>
    </div>
  );
}

export default Admin;
