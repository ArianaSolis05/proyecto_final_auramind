import React from "react";
import "../Estilos/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenidos a Tu Espacio
            <br />
            de Salud Mental
          </h1>

          <p className="hero-sub">
            Apoyo, Comunidad y Crecimiento para tu bienestar emocional
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Únete Ahora</button>
            <button className="btn btn-outline">Ver Eventos</button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-mask">
            <img
              className="hero-image"
              src="/mnt/data/3c8e44ec-206e-42cf-b10d-461a8aeb4008.png"
              alt="ambiente relajante"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
