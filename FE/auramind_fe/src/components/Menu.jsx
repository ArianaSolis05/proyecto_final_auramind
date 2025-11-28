import React from 'react'
import "../Estilos/Menu.css"


function Menu() {
  return (
    <div>
           <header className="navbar">
        <div className="navbar-container">
          <h2 className="navbar-logo">AURAMIND</h2>

        
          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <a href="#inicio" className="nav-link" onClick={() => setMenuOpen()}>Inicio</a>
            <a className="nav-link" onClick={() => navigate("/Usuario")}>Perfil</a>
            <a href="#acerca" className="nav-link" onClick={() => navigate("/AcercaAuramind")} >Acerca de AuraMind</a>
            <a href="#contacto" className="nav-link" onClick={() => setMenuOpen()}>Contacto</a>
            <a href="#agendar" className="nav-link" onClick={() => setMenuOpen()}>Agendar Cita</a>
            <button 
            onClick={()=>{
              navigate("/crear-usuario")
            }}
            className="navbar-button">Registrarse</button>
          </nav>
        </div>
      </header>



    </div>
  )
}

export default Menu
