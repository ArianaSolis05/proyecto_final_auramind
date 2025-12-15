import React, { useState, useEffect } from "react";
import "../Estilos/editUsuario.css";
import { patchDatos, getData } from "../services/fetch.js";
import { useNavigate } from "react-router-dom";

function EditUsuario() {
  const navigate = useNavigate();

  const [infoUsuario, setInfoUsuario] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    genero: "",
    telefono: "",
  });

  useEffect(() => {
    async function traeUsuario() {
      const res = await getData(
        `usuarios/usuario/${localStorage.getItem("idUsuario")}/`
      );

      const usuario = res[0];
      setInfoUsuario(usuario);

      setFormData(usuario);
    }

    traeUsuario();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleEdit(e) {
    e.preventDefault();

    const ObjUser = {
      id_usuario: localStorage.getItem("idUsuario"),
      ...formData, 
    };

    const peticion = await patchDatos("usuarios/actualizar-usuario", ObjUser);
    console.log(peticion);
    
    alert("Datos actualizados correctamente");
  }

  if (!infoUsuario) return <p>Cargando...</p>;

  return (
    <div className="modal-editar-usuario">
      <div className="formulario">  
        <h2>Editar Usuario</h2>

        <form onSubmit={handleEdit}>
          <label>Nombre</label>
          <input
            type="text"
            name="first_name"
            placeholder="Nombre"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label>Apellido</label>
          <input
            type="text"
            name="last_name"
            placeholder="Apellido"
            value={formData.last_name}
            onChange={handleChange}
          />

          <label>Nombre Usuario</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Fecha de Nacimiento</label>
          <input
            type="text"
            name="fecha_nacimiento"
            placeholder="00/00/0000"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />

          <label>Nacionalidad</label>
          <input
            type="text"
            name="nacionalidad"
            placeholder="Nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
          />

          <label>Género</label>
          <input
            type="text"
            name="genero"
            placeholder="Género"
            value={formData.genero}
            onChange={handleChange}
          />

          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />

          <div className="acciones">
            <button type="submit" className="btn-guardar">
              Guardar
            </button>

            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/PagPrincipal")}
            >
              Volver a Inicio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUsuario;
