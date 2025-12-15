import "../Estilos/Actividades.css";

const CardActividades = ({ nombre_actividad,descripcion,fecha,verMas}) => {
  return (
        <div className="card">
          <p className="saludo">hola</p>
          <div className="img-container"></div>
          <p className="card-titulo">{nombre_actividad}</p>
          <button onClick={verMas} className="btn-verMas">Ver más</button>
        </div>
    // <div className="actividades-container">
    //   <h2 className="titulo">Actividades Semanales</h2>

    //   <div className="cards-wrapper">

    //   </div>
    // </div>
  );
};

export default CardActividades;
