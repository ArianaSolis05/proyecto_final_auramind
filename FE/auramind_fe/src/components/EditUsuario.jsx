import React, { useState } from "react";
import "../Estilos/editUsuario.css";
import { patchDatos } from "../services/fetch.js";
import { useNavigate } from "react-router-dom";
import { getData } from "../services/fetch.js";
import { useEffect } from "react";
function EditUsuario() {
  const navigate = useNavigate();

  const [infoUsuario, setInfoUsuario] = useState([]);

  const [password, setPassword] = useState(infoUsuario.password || "");
  const [userName, setUsername] = useState(infoUsuario.username || "");
  const [firstName, setFirstName] = useState(infoUsuario.first_name || "");
  const [lastName, setLastName] = useState(infoUsuario.last_name || "");
  const [email, setEmail] = useState(infoUsuario.email || "");
  const [fechaNacimiento, setFechaNacimiento] = useState(
    infoUsuario.fecha_nacimiento || ""
  );
  const [nacionalidad, setNacionalidad] = useState(
    infoUsuario.nacionalidad || ""
  );
  const [genero, setGenero] = useState(infoUsuario.genero || "");
  const [telefono, setTelefono] = useState(infoUsuario.telefono || "");
  useEffect(() => {
    async function traeUsuario() {
      const peticion = await getData(
        `usuarios/usuario/${localStorage.getItem("idUsuario")}/`
      );
      console.log(peticion);
      setUsername(infoUsuario.username);
      setInfoUsuario(peticion[0]);
    }
    traeUsuario();
  }, []);
  async function EditUsuario(e) {
    e.preventDefault();
    const ObjUser = {
      id_usuario: localStorage.getItem('id_usuario'),
      password: password,
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      fecha_nacimiento: fechaNacimiento,
      nacionalidad: nacionalidad,
      genero: genero,
      telefono: telefono,
    };

    await patchDatos("usuarios", ObjUser);
  }

  return (
    <div>
      <div className="modal-editar-usuario">
        <div className="formulario">
          <h2>Editar Usuario</h2>

          <form>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={infoUsuario.username}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={infoUsuario.last_name}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label>Nombre Usuario</label>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Fecha de Nacimiento</label>
            <input
              type="text"
              placeholder="00/00/0000"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />

            <label>Nacionalidad</label>
            <input
              type="text"
              placeholder="Nacionalidad"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
            />

            <label>Género</label>
            <input
              type="text"
              placeholder="Género"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />

            <label>Teléfono</label>
            <input
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <div className="acciones">
              <button
                type="button"
                className="btn-guardar"
                onClick={EditUsuario}
              >
                Guardar
              </button>

              <button
                type="button"
                className="btn-cancelar"
                onClick={() => navigate("/")}
              >
                Volver a Inicio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUsuario;
