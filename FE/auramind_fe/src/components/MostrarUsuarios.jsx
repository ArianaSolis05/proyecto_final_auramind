import { useEffect, useState } from "react";
import { deleteDatos, getData, patchDatos } from "../services/fetch";
import "../Estilos/MostrarUsuarios.css";

const MostrarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditar, setUsuarioEditar] = useState(null);

  useEffect(() => {
    async function traerUsuarios() {
      const peticion = await getData("usuarios/crear-usuario/");
      setUsuarios(peticion);
    }
    traerUsuarios();
  }, []);

  const abrirEditar = (usuario) => {
    setUsuarioEditar(usuario);
  };
    
  const guardarCambios = async () => {
    setUsuarios(
      usuarios.map((u) => (u.id === usuarioEditar.id ? usuarioEditar : u))
    );
    console.log(usuarioEditar);
    setUsuarioEditar(null);
    const objUsuarioEditar = {
      id_usuario: localStorage.getItem("idUsuarioEditar"),
      username: usuarioEditar.username,
      email: usuarioEditar.email,
      rol: usuarioEditar.rol,
    };
    const peticion = await patchDatos(
      `usuarios/actualizar-usuario`,
      objUsuarioEditar
    );
    console.log(peticion);
  };

  const eliminarUsuario = async(id) => {
    setUsuarios(usuarios.filter((u) => u.id !== id));
    const peticion = await deleteDatos(`usuarios/eliminar-usuario`, id);
    console.log(peticion);
  }

  return (
    <div className="usuarios-main">
      <h1 className="titulo">Usuarios Registrados</h1>

      <div className="usuarios-lista">
        {usuarios.map((usuario) => (
          <div className="tarjeta" key={usuario.id}>
            <h2 className="nombre">{usuario.username}</h2>
            <p className="correo">{usuario.email}</p>
            <p className="rol">{usuario.rol}</p>

            <div className="acciones">
              <button
                className="btn pastel-editar"
                onClick={() => {
                  abrirEditar(usuario);
                  localStorage.setItem("idUsuarioEditar", usuario.id);
                }}
              >
                ✏ Editar
              </button>

              <button
                className="btn pastel-eliminar"
                onClick={() => eliminarUsuario(usuario.id)}
              >
                🗑 Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {usuarioEditar && (
        <div className="modal-fondo">
          <div className="modal">
            <h2>Editar Usuario</h2>

            <label>Nombre:</label>
            <input
              type="text"
              value={usuarioEditar.username}
              onChange={(e) =>
                setUsuarioEditar({
                  ...usuarioEditar,
                  username: e.target.value,
                })
              }
            />

            <label>Email:</label>
            <input
              type="text"
              value={usuarioEditar.email}
              onChange={(e) =>
                setUsuarioEditar({
                  ...usuarioEditar,
                  email: e.target.value,
                })
              }
            />

            <label>Rol:</label>
            <select
              value={usuarioEditar.rol}
              onChange={(e) =>
                setUsuarioEditar({
                  ...usuarioEditar,
                  rol: e.target.value,
                })
              }
              className="select-rol"
            >
              <option value="admin">Admin</option>
              <option value="psicologo">Psicólogo</option>
              <option value="paciente">Paciente</option>
            </select>

            <div className="modal-btns">
              <button className="btn pastel-guardar" onClick={guardarCambios}>
                Guardar
              </button>
              <button
                className="btn pastel-cerrar"
                onClick={() => setUsuarioEditar(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostrarUsuarios;
