import React from 'react'
import "../Estilos/Cronograma.css"



function Cronograma() {
  return (
    <div>
      <div class="cronograma-wrapper">
  <h1>Cronograma de citas</h1>

  <div class="grid-cronograma">
    
    <div class="dia">
      <h3>November 3rd</h3>
      <div class="evento">
        <p>9:00 am</p>
        <p>Opening Workshop</p>
        <hr />
      </div>
      <div class="evento">
        <p>10:30 am</p>
        <p>Mindfulness Session</p>
        <hr />
      </div>
      <div class="evento">
        <p>6:00 pm</p>
        <p>Evening Reflection</p>
        <hr />
      </div>
    </div>



  </div>
</div>

    </div>
  )
}

export default Cronograma
