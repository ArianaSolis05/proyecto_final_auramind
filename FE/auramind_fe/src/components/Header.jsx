import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-wrapper">

        <header className="navbar-container">
          <div className="navbar-logo">AURAMIND</div>

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


            {localStorage.getItem("rol") === "admin" && (
               <a
              className="nav-link"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin
            </a>
            )}

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

            <a
              href="#foro"
              className="nav-link"
              onClick={() => navigate("/Foro")}
            >
              Foro
            </a>
            <a
              className="nav-link"
              onClick={() => navigate("/mis-citas")}
            >
              Mis citas
            </a>

            {localStorage.getItem("idUsuario") ? (
                 <button
              onClick={() => {
                navigate("/PagPrincipal");
                localStorage.clear()
                
              }}
              className="navbar-button"
            >
              Cerrar sesión
            </button>
            ):(
   <button
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="navbar-button"
            >
              Iniciar Sesión
            </button>
            )}
         
          </nav>
        </header>

        <div className="navbar-divider"></div>

      </div>
    </>
  );
};

export default Header;
