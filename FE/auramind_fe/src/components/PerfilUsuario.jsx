import React, { useEffect, useState } from "react";
import "../Estilos/PerfilUsuario.css";
import { Link } from "react-router-dom";
import { getData } from "../services/fetch";

const PerfilUsuario = () => {
  const [usuario,setUsuario] = useState([])


  useEffect(()=>{
    async function traerUsuario() {
        const data = await getData(`usuarios/usuario/${localStorage.getItem('idUsuario')}/`)
        setUsuario(data[0])
        console.log(data);
    } 
    traerUsuario()
  },[])


  return (
    <section className="perfil-section">
      <div className="perfil-wrapper">

        <aside className="perfil-sidebar">
          <div className="perfil-imagen-container">
            <img src={usuario.imagen} alt="Foto de perfil" className="perfil-imagen" />
          </div>

          <h2 className="perfil-nombre">{usuario.first_name + ' ' + usuario.last_name}</h2>
          <p className="perfil-profesion">{usuario.rol}</p>
          <p className="perfil-correo">{usuario.correo}</p>

          <div className="perfil-info">
            <p><strong>Edad:</strong> {usuario.edad}</p>
            <p><strong>Ciudad:</strong> {usuario.nacionalidad}</p>
            <p><strong>Estado emocional:</strong></p>
            <p><strong>Género:</strong>{usuario.genero}</p>
          </div>

          <div className="perfil-botones">
            <Link to="/EditUsuario" className="btn-editar">Editar Perfil</Link>
            <Link to="/PagPrincipal" className="btn-volver">Volver</Link>
          </div>
        </aside>


        {/* --- PANEL DERECHO --- */}
        <main className="perfil-detalles">
          <div className="perfil-card">
            <h3>🌿 Metas personales</h3>
            <ul>
              {/* {usuario.metas.map((meta, index) => (
                <li key={index}>{meta}</li>
              ))} */}
            </ul>
          </div>

          <div className="perfil-card">
            <h3>🧘 Actividades recientes</h3>
            <ul>
              {/* {usuario.actividadesRecientes.map((actividad, index) => (
                <li key={index}>{actividad}</li>
              ))} */}
            </ul>
          </div>

        </main>
      </div>
    </section>
  );
};


export default PerfilUsuario;
