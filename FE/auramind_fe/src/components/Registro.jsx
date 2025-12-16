import { useState, useEffect } from "react";
import { postDatos } from "../services/fetch.js";
import { useNavigate, Link } from "react-router-dom";
import "../Estilos/Registro.css";
import ImageUploader from "./ImageUploader.jsx";

function Registro() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fecha_nacimiento, setFecha_Nacimiento] = useState("");
  const [cedula, setCedula] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [genero, setGenero] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  // 👇 IMAGEN DE PERFIL
  const [imgPerfil, setImgPerfil] = useState("");

  const navigate = useNavigate();

  async function registroExitoso() {
    if (nombre === "" || email === "" || password === "") {
      setMensaje("Llene los espacios por favor");
      return;
    }

    if (password !== confirmpassword) {
      setMensaje("Las contraseñas deben ser iguales");
      return;
    }

    const newUser = {
      username: user,
      email: email,
      password: password,
      fecha_nacimiento: fecha_nacimiento,
      cedula: cedula,
      nacionalidad: nacionalidad,
      genero: genero,
      first_name: nombre,
      last_name: apellido,
      rol: "paciente",
      telefono: telefono,
      img_perfil: imgPerfil, 
    };

    const respuesta = await postDatos(newUser, "usuarios/crear-usuario/");
    console.log(respuesta);

    setMensaje("Su registro de usuario fue exitoso");
    navigate("/");
  }

  useEffect(() => {
    const timer = setTimeout(() => setMensaje(""), 1500);
    return () => clearTimeout(timer);
  }, [mensaje]);

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2 className="register-title">Registro de Usuario</h2>

        <form className="register-form">
          <label className="register-label">Nombre de Usuario</label>
          <input
            type="text"
            className="register-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label className="register-label">Correo electrónico</label>
          <input
            type="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="register-label">Contraseña</label>
          <input
            type="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="register-label">Confirmar contraseña</label>
          <input
            type="password"
            className="register-input"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="register-label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="register-input"
            value={fecha_nacimiento}
            onChange={(e) => setFecha_Nacimiento(e.target.value)}
          />

          <label className="register-label">DNI</label>
          <input
            type="text"
            className="register-input"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />

          <label className="register-label">Nacionalidad</label>
          <input
            type="text"
            className="register-input"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />

          <label className="register-label">Género</label>
          <input
            type="text"
            className="register-input"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />

          <label className="register-label">Nombre</label>
          <input
            type="text"
            className="register-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label className="register-label">Apellido</label>
          <input
            type="text"
            className="register-input"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
    
          <label className="register-label">Telefono</label>
          <input
            type="number"
            className="register-input"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <ImageUploader onUploadSuccess={setImgPerfil} />

          <button
            type="button"
            className="register-btn"
            onClick={registroExitoso}
            disabled={!imgPerfil} // opcional
          >
            Registrarse
          </button>

          <p>{mensaje}</p>

          <Link to="/" className="register-link">
            Ir a inicio
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Registro;
