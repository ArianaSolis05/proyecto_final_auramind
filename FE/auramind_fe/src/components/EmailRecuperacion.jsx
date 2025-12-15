import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Estilos/EmailRecuperacion.css"

export default function EmailRecuperacion() {
  const [correo, setCorreo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const generarCodigo = () => {
    const nuevoCodigo = Math.floor(100000 + Math.random() * 900000);
    setCodigo(nuevoCodigo.toString());
  };

  const enviarCorreo = (e) => {
  e.preventDefault();

  if (!correo) {
    setMensaje("Ingresa un correo válido");
    return;
  }

  let codigoFinal = codigo;

  if (!codigoFinal) {
    codigoFinal = Math.floor(100000 + Math.random() * 900000).toString();
    setCodigo(codigoFinal);
  }

  setLoading(true);
  setMensaje("");

  emailjs
    .send(
      "service_fx1w4wj",
      "template_nlbictc",
      {
        user_email: correo,
        recovery_code: codigoFinal,
        email:correo
      },
      "3TzSfXY2GnuWXTrGX"
    )
    .then(() => {
      setMensaje("Correo enviado correctamente ✅");
      setCorreo("");
      setCodigo("");
    })
    .catch((error) => {
      console.error(error);
      setMensaje("Error al enviar el correo ❌");
    })
    .finally(() => {
      setLoading(false);
    });
};


  return (
    <div className="email-container">
      <form className="email-card" onSubmit={enviarCorreo}>
        <h2 className="email-title">Recuperación de contraseña</h2>

        <label className="email-text">Correo del usuario</label>
        <input
          type="email"
          className="email-input"
          placeholder="correo@ejemplo.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label className="email-text">Código de recuperación</label>
        <input
          type="text"
          className="email-input"
          placeholder="Se generará automáticamente"
          value={codigo}
          readOnly
        />

        <button
          type="button"
          className="email-button secondary"
          onClick={generarCodigo}
        >
          Generar código
        </button>

        <button
          type="submit"
          className="email-button"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar correo"}
        </button>

        {mensaje && <p className="email-message">{mensaje}</p>}

        <div className="email-preview">
          <p className="email-text">Vista previa del correo:</p>

          <p>
            Se solicitó recuperar la contraseña del correo:
            <strong> {correo || "correo@ejemplo.com"} </strong>
          </p>

          <p>Tu código de recuperación es:</p>

          <div className="email-code-box">
            <span className="email-code">
              {codigo || "000000"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
