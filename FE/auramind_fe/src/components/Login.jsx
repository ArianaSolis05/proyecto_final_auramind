import { useState, useEffect } from "react";
import { postDatos } from "../services/fetch.js";
import { useNavigate, Link } from "react-router-dom";
import "../Estilos/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  async function iniciarSesion() {
    if (email === "" || password === "") {
      setMensaje("Complete todos los campos");
      return;
    }

    const datos = { email, password };
    const respuesta = await postDatos(datos, "usuarios/login/");

    if (respuesta && respuesta.token) {
      setMensaje("Inicio de sesión exitoso");
      localStorage.setItem("token", respuesta.token);
      navigate("/inicio");
    } else {
      setMensaje("Credenciales incorrectas");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setMensaje(""), 1500);
    return () => clearTimeout(timer);
  }, [mensaje]);

  return (
    <div>
      <div className="login-container">
        <form className="login-card">
          <h2 className="login-title">Iniciar sesión</h2>
          <p className="login-sub">Bienvenido de nuevo</p>

          <div className="input-row">
            <label className="input-label">
              Correo electrónico
              <input
                type="email"
                className="input-field"
                placeholder="Ingresa tu correo"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="input-row">
            <label className="input-label">
              Contraseña
              <input
                type="password"
                className="input-field"
                placeholder="Ingresa tu contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <button
            className="login-btn"
            type="button"
            onClick={iniciarSesion}
          >
            Ingresar
          </button>

          <p className="login-foot">
            ¿No tienes cuenta?{" "}
            <Link to="/crear-usuario" className="login-link">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
      <p style={{ textAlign: "center", color: "white" }}>{mensaje}</p>
    </div>
  );
}

export default Login;
