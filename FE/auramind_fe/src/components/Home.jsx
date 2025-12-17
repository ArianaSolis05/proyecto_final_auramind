import React, { useState } from "react";
import "../Estilos/home.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <>
    
  
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
          </div>

          
          <div className="home-image"></div>
        </div>
      </section>
    </>
  );
}

export default Home;

