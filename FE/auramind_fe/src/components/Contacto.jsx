import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/Contacto.css";

function Contacto() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="contacto-page">

      {/* NAVBAR */}
      <header className="navbar-container"> {/* AGREGADO */}
        <div className="navbar-logo">AURAMIND</div> {/* AGREGADO */}

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a
            href="pagPrincipal"
            className="nav-link"
            onClick={() => (false)}
          >
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

      <div className="navbar-divider"></div> {/* AGREGADO - línea celeste */}

      {/* CONTENIDO DEL CONTACTO */}
      <div className="contacto-container">
        <h2 className="contacto-titulo">Contáctanos</h2>

        <p className="contacto-descripcion">
          En <strong>AuraMind</strong> estamos aquí para escucharte. Si tienes
          dudas, necesitas apoyo o deseas agendar una sesión, puedes comunicarte
          con nosotros mediante los siguientes medios:
        </p>

        <div className="contacto-info">
          <div className="contacto-item">
            <h3>📞 Teléfono</h3>
            <p>+506 8888-0000</p>
          </div>

          <div className="contacto-item">
            <h3>📧 Correo</h3>
            <p>soporte@auramind.com</p>
          </div>

          <div className="contacto-item">
            <h3>📍 Ubicación</h3>
            <p>San José, Costa Rica</p>
          </div>

          <div className="contacto-item">
            <h3>🕒 Horario</h3>
            <p>Lunes a Sábado · 8:00am – 6:00pm</p>
          </div>
        </div>

        <form className="contacto-form">
          <h3 className="form-titulo">Envíanos un mensaje</h3>

          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
