
import React, { useState } from "react";
import "../styles/EditUsuario.css";
import { patchDatos } from "../services/fetch.js";
import { useNavigate } from "react-router-dom";
import { patchDatos } from "../services/fetch.js"
function EditUsuario() {


  const navigate = useNavigate();

  const [infoUsuario] = useState(
    JSON.parse(localStorage.getItem("usuarioCompleto")) || []
  );
  const [password, setPassword] = useState(infoUsuario.password);
  const [userName, setUsername] = useState(infoUsuario.userName);
  const [firstName, setFirstName] = useState(infoUsuario.firstName);
  const [lastName, setLastName] = useState(infoUsuario.lastName);
  const [email, setEmail] = useState(infoUsuario.email);
  const [fechaNacimiento, setFechaNacimiento] = useState(infoUsuario.fechaNacimiento);
  const [nacionalidad, setNacionalidad] = useState(infoUsuario.nacionalidad);
  const [genero, setGenero] = useState(infoUsuario.genero);
  const [telefono, setTelefono] = useState(infoUsuario.telefono);


  async function EditUsuario(e) {
    e.preventDefault();
    const ObjUser = {
      newPass: password,
      newUser: userName,
      newNombre: firstName,
      newApellido: lastName,
      newEmail: email,
      newFechaNac: fechaNacimiento,
      newNacionalidad: nacionalidad,
      newGenero: genero,
      newTelefono: telefono
    };
    await patchDatos("usuarios", ObjUser, infoUsuario.id);
  }


  return (
    <div>
        <div className="modal-editar-usuario">
        <div className="formulario">
          <h2>Editar Usuario</h2>
          <form>
            <label for="">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label for="">Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

             <label for="">Nombre Usuario</label>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="">Email</label>
            <input
              type="email"
              value={email}
              placeholder="ejemplo@correo.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="">Passsword</label>
            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label for="">Fecha de Nacimiento</label>
            <input
              type="text"
              value={fechaNacimiento}
              placeholder="00/00/0000"
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />

            <label for="">Nacionalidad</label>
            <input
              type="text"
              value={nacionalidad}
              placeholder="Nacionalidad"
              onChange={(e) => setNacionalidad(e.target.value)}
            />

            <label for="">Género</label>
            <input
              type="text"
              value={genero}
              placeholder="Género"
              onChange={(e) => setGenero(e.target.value)}
            />

            <label for="">Telefono</label>
            <input
              type="text"
              value={telefono}
              placeholder="ejemplo@correo.com"
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
  )
}


export default EditUsuario