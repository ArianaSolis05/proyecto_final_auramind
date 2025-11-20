
import "../Estilos/Actividades.css"


const CardActividades = ({ img, titulo, descripcion, fecha }) => {
  return (
    <div className="actividades-container">
      <h2 className="titulo">Actividades Semanales</h2>

      <div className="cards-wrapper">
        <div className="card">
          <p className="saludo">hola</p>

          <div className="img-container">{img}</div>

          <p className="card-titulo">{titulo}</p>
          <p className="card-descripcion">{descripcion}</p>
          <p className="card-fecha">{fecha}</p>
        </div>
      </div>
    </div>
  );
};

export default CardActividades;

