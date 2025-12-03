import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/Contacto.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar-container">
        {" "}
        {/* AGREGADO */}
        <div className="navbar-logo">AURAMIND</div> {/* AGREGADO */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="pagPrincipal" className="nav-link" onClick={() => false}>
            Inicio
          </a>

          <a
            className="nav-link"
            onClick={() => {
              navigate("/Usuario");
              setMenuOpen(false);
            }}
          >
            Perfil
          </a>

          <a
            href="#acerca"
            className="nav-link"
            onClick={() => {
              navigate("/AcercaAuramind");
              setMenuOpen(false);
            }}
          >
            Acerca de AuraMind
          </a>

          <a
            href="#contacto"
            className="nav-link"
            onClick={() => {
              navigate("/Contacto");
              setMenuOpen(false);
            }}
          >
            Contacto
          </a>

          <a
            href="#agendar"
            className="nav-link"
            onClick={() => {
              navigate("/AgendarCitas");
              setMenuOpen(false);
            }}
          >
            Agendar Cita
          </a>

          <button
            onClick={() => {
              navigate("/crear-usuario");
              setMenuOpen(false);
            }}
            className="navbar-button"
          >
            Registrarse
          </button>
        </nav>
      </header>
      ;
    </>
  );
};
export default Header;
