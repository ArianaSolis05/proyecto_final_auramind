import React from 'react'
import "../Estilos/Login.css"

function Login() {
  return (
    <div>
      
      <div class="login-container">
  <form class="login-card">
    <h2 class="login-title">Iniciar sesión</h2>
    <p class="login-sub">Bienvenido de nuevo</p>

    <div class="input-row">
      <label class="input-label">
        Correo electrónico
        <input
          type="email"
          name="email"
          class="input-field"
          placeholder="Ingresa tu correo"
          required
        />
      </label>
    </div>

    <div class="input-row">
      <label class="input-label">
        Contraseña
        <input
          type="password"
          name="password"
          class="input-field"
          placeholder="Ingresa tu contraseña"
          required
        />
      </label>
    </div>

    <button class="login-btn" type="button">Ingresar</button>

    <p class="login-foot">
      ¿No tienes cuenta?
      <a href="/crear-usuario" class="login-link">Regístrate</a>
    </p>
  </form>
</div>


    </div>
  )
}

export default Login
