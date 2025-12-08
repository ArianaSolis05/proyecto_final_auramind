import React from "react";
import "../Estilos/Foro.css";
import Header from "./Header";

function Foro() {
  return (
    <>
    <Header/>

    <div>

      <div class="foro-container">
        <h2 class="foro-titulo">Foros de la Comunidad</h2>

        <div class="foro-categoria">
          <div class="cat-info">
            <div class="icon">💬</div>
            <div>
              <h3 class="cat-nombre">Ansiedad y Estrés</h3>
              <p class="cat-detalles">Temas: 12,4K • Mensajes: 108K</p>
            </div>
          </div>

          <div class="cat-ultimo">
            <p class="ultimo-titulo">
              Técnicas para calmar ataques de ansiedad
            </p>
            <span class="ultimo-tiempo">Hace 3 minutos • Sofía</span>
          </div>
        </div>

        <div class="foro-categoria">
          <div class="cat-info">
            <div class="icon">🧠</div>
            <div>
              <h3 class="cat-nombre">Salud Mental General</h3>
              <p class="cat-detalles">Temas: 9,8K • Mensajes: 95K</p>
            </div>
          </div>

          <div class="cat-ultimo">
            <p class="ultimo-titulo">¿Cómo controlar pensamientos negativos?</p>
            <span class="ultimo-tiempo">Hace 7 minutos • Carlos</span>
          </div>
        </div>

        <div class="foro-categoria">
          <div class="cat-info">
            <div class="icon">🌿</div>
            <div>
              <h3 class="cat-nombre">Autocuidado y Hábitos</h3>
              <p class="cat-detalles">Temas: 5,1K • Mensajes: 42K</p>
            </div>
          </div>

          <div class="cat-ultimo">
            <p class="ultimo-titulo">
              Rutina de autocuidado para principiantes
            </p>
            <span class="ultimo-tiempo">Hace 12 minutos • Laura</span>
          </div>
        </div>
      </div>
    </div>
    </>
   );

}

export default Foro;
