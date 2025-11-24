import "../Estilos/Actividades.css";

const CardActividades = ({ nombre_actividad,descripcion,fecha}) => {
  return (
        <div className="card">
          <p className="saludo">hola</p>
          <div className="img-container"></div>
          <p className="card-titulo">{nombre_actividad}</p>
          <p className="card-descripcion">{descripcion}</p>
          <p className="card-fecha">{fecha}</p>
        </div>
    // <div className="actividades-container">
    //   <h2 className="titulo">Actividades Semanales</h2>

    //   <div className="cards-wrapper">

    //   </div>
    // </div>
  );
};

export default CardActividades;
