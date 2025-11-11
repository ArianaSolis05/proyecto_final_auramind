import { useState, useEffect } from "react";
import { postDatos } from "../services/fetch.js";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Utlizamos el useState para poder modificar el estado del componente
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




  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const fechaActual = new Date();
  async function registroExitoso() {
    if (nombre == "" || email === "" || password === "") {
      setMensaje("Llene los espacios por favor");
      return;
    }
    //Validacion de que al registrar las contraseñas sean las mismas
    if (password != confirmpassword) {
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
      telefono: "2000"
    };
    const respuesta = await postDatos(newUser, "usuarios/crear-usuario/");
    setMensaje("Su registro de usuario fue exitoso");
    console.log(respuesta);
    navigate("/");
  }

//Utilizamos el useEffect para darle un delay de 1.5s al mensaje, ya sea de rellenar espacios o de registro exitoso

  useEffect(() => {
    setTimeout(() => {
      setMensaje("");
    }, 1500);
  }, [mensaje]);

  return (
    <div>
      <div class="registro-container">
        <h2>Registro de Usuario</h2>
        <form class="formulario-registro">
          <label for="">Nombre de Usuario</label>
          <input
            type="text"
            id=""
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label for="">Correo electrónico</label>
          <input
            type="email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="">Contraseña</label>
          <input
            type="password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label for="">Confirmar contraseña</label>
          <input
            type="pass"
            id=""
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          
          <label for="">Fecha de Nacimiento</label>
          <input
            type="date"
            id=""
            value={fecha_nacimiento}
            onChange={(e) => setFecha_Nacimiento(e.target.value)}
          />

          
          <label for="">DNI</label>
          <input
            type="text"
            id=""
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />

          
          <label for="">Nacionalidad</label>
          <input
            type="text"
            id=""
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />

          
          <label for="">Genero</label>
          <input
            type="text"
            id=""
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />

          
          <label for="">Nombre</label>
          <input
            type="text"
            id=""
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          
          <label for="">Apellido</label>
          <input
            type="text"
            id=""
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />

          <button type="button" onClick={registroExitoso}>
            Registrarse
          </button>

          <Link to={"/"} style={{ color: "white", fontSize: "15px" }}>
            Ir a inicio
          </Link>
        </form>
      </div>
      <p>{mensaje}</p>
    </div>
  );
}

export default Registro;
