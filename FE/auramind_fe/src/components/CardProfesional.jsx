import "../Estilos/CardProfesional.css";

const CardProfesional = ({ especialidad, descripcion, usuario_id }) => {
  return (
    <div>
      <h1>Profesionales</h1>
      <div className="card-profesional">
        <div className="card-img">
          <img src="" alt="" />
        </div>
        <p className="card-especialidad">{especialidad}</p>
        <p className="card-descripcion">{descripcion}</p>
        <p className="card-nombre">{usuario_id}</p>
      </div>
    </div>
  );
};

export default CardProfesional;
