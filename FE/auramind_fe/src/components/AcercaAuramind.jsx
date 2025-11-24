import React from "react";
import "../Estilos/AcercaAuramind.css";

function AcercaAuramind() {
  return (
    <div className="about-wrapper">

      <section className="about-hero">
        <h1>Sobre AuraMind</h1>
        <p>
          Somos una plataforma dedicada a brindar apoyo emocional accesible,
          seguro y humano para todas las personas que buscan acompañamiento profesional.
        </p>
      </section>

      <section className="about-section fade-section">
        <h2>¿Qué es AuraMind?</h2>
        <div className="about-card">
          <p>
            AuraMind surge como respuesta al aumento de problemas sociales y emocionales 
            que afectan a la población, especialmente a quienes no pueden acceder a 
            consultas psicológicas de manera tradicional.
          </p>
          <p>
            Nuestro objetivo es conectar a las personas con profesionales en salud mental 
            mediante herramientas tecnológicas accesibles, seguras y fáciles de usar.
          </p>
        </div>
      </section>

      <section className="about-section fade-section">
        <h2>Objetivo General</h2>
        <div className="about-card">
          <p>
            Crear un espacio digital donde los usuarios puedan sentirse apoyados y escuchados,
            ofreciendo citas presenciales o virtuales, chat confidencial y contenido educativo 
            sobre bienestar emocional.
          </p>
        </div>
      </section>

      <section className="about-section fade-section">
        <h2>Objetivos Específicos</h2>

        <div className="cards-grid">

          <div className="mini-card">
            <h3>Acceso Seguro</h3>
            <p>
              Brindar acompañamiento profesional en un espacio protegido y confiable.
            </p>
          </div>

          <div className="mini-card">
            <h3>Agendar Citas</h3>
            <p>
              Permitir a los usuarios programar citas presenciales o virtuales fácilmente.
            </p>
          </div>

          <div className="mini-card">
            <h3>Chat Confidencial</h3>
            <p>
              Crear comunicación anónima para quienes necesiten hablar sin miedo.
            </p>
          </div>

          <div className="mini-card">
            <h3>Educación Emocional</h3>
            <p>
              Compartir recursos y contenido educativo sobre salud mental.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section fade-section">
        <h2>Alcance del Proyecto</h2>
        <div className="about-card">
          <p>
            Buscamos generar un impacto real ofreciendo un espacio seguro donde las personas
            puedan expresarse libremente y recibir apoyo emocional.
          </p>
          <p>
            Los usuarios registrados tendrán acceso a una lista de profesionales,
            información de experiencia y especialidades, y la posibilidad de elegir 
            el que mejor se adapte a sus necesidades.
          </p>
          <p>
            También podrán agendar citas y revisar todos los detalles desde su perfil.
          </p>
        </div>
      </section>

    </div>
  );
}

export default AcercaAuramind;
