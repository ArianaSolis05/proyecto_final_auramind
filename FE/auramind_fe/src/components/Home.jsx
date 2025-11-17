import React, { useState } from "react";
import "../Estilos/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      
      <header className="navbar">
        <div className="navbar-container">
          <h2 className="navbar-logo">AURAMIND</h2>

        
          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <a href="#inicio" className="nav-link" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a className="nav-link" onClick={() => navigate("/Usuario")}>Perfil</a>
            <a href="#acerca" className="nav-link" onClick={() => setMenuOpen(false)}>Acerca de AuraMind</a>
            <a href="#contacto" className="nav-link" onClick={() => setMenuOpen(false)}>Contacto</a>
            <a href="#agendar" className="nav-link" onClick={() => setMenuOpen(false)}>Agendar Cita</a>
            <button
            onClick={()=>{
              navigate("/crear-usuario")
            }}
            className="navbar-button">Registrarse</button>
          </nav>
        </div>
      </header>

      <section className="home-section">
        <div className="home-container">
          <div className="home-text">
            <h3 className="home-subtitle">AURAMIND</h3>
            <h1 className="home-title">
              Le damos la <br />
              bienvenida a <br />
              nuestra <br />
              plataforma de apoyo psicológico
            </h1>
            <button className="home-button">Obtener Ayuda</button>
          </div>

          
          <div className="home-image"></div>
        </div>
      </section>
    </>
  );
}

export default Home;

