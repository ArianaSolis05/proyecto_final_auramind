import React from "react";
import "../Estilos/PerfilUsuario.css";
import { Link } from "react-router-dom";

const PerfilUsuario = () => {
  const usuario = {
    nombre: "María López",
    correo: "maria.lopez@example.com",
    edad: 28,
    ciudad: "San José, Costa Rica",
    profesion: "Psicóloga en formación",
    estadoEmocional: "Tranquila y positiva",
    metas: [
      "Practicar meditación diaria",
      "Asistir a terapia semanalmente",
      "Reducir estrés laboral",
    ],
    actividadesRecientes: [
      "Completó la sesión de Mindfulness 3",
      "Leyó el artículo: 'Cómo manejar la ansiedad'",
      "Participó en el foro de apoyo emocional",
    ],
    imagen: "https://th.bing.com/th/id/OIP.R0yCrJw0QCNs1MsG_0xbQgHaFY?w=225&h=180&c=7&r=0&o=7&cb=ucfimgc2&pid=1.7&rm=3",
  };

  return (
    <section className="perfil-section">
      <div className="perfil-wrapper">

        {/* --- PANEL IZQUIERDO --- */}
        <aside className="perfil-sidebar">
          <div className="perfil-imagen-container">
            <img src={usuario.imagen} alt="Foto de perfil" className="perfil-imagen" />
          </div>

          <h2 className="perfil-nombre">{usuario.nombre}</h2>
          <p className="perfil-profesion">{usuario.profesion}</p>
          <p className="perfil-correo">{usuario.correo}</p>

          <div className="perfil-info">
            <p><strong>Edad:</strong> {usuario.edad}</p>
            <p><strong>Ciudad:</strong> {usuario.ciudad}</p>
            <p><strong>Estado emocional:</strong> {usuario.estadoEmocional}</p>
          </div>

          <div className="perfil-botones">
            <Link to="/editar-perfil" className="btn-editar">Editar Perfil</Link>
            <Link to="/PagPrincipal" className="btn-volver">Volver</Link>
          </div>
        </aside>

        {/* --- PANEL DERECHO --- */}
        <main className="perfil-detalles">
          <div className="perfil-card">
            <h3>🌿 Metas personales</h3>
            <ul>
              {usuario.metas.map((meta, index) => (
                <li key={index}>{meta}</li>
              ))}
            </ul>
          </div>

          <div className="perfil-card">
            <h3>🧘 Actividades recientes</h3>
            <ul>
              {usuario.actividadesRecientes.map((actividad, index) => (
                <li key={index}>{actividad}</li>
              ))}
            </ul>
          </div>

          <div className="perfil-card progreso-card">
            <h3>📈 Progreso emocional</h3>
            <div className="barra-progreso">
              <div className="barra-relleno" style={{ width: "75%" }}></div>
            </div>
            <p>Tu progreso emocional se encuentra en un 75% esta semana. 🌤️</p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default PerfilUsuario;
