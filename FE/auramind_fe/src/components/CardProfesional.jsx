import "../Estilos/CardProfesional.css";

const CardProfesional = ({ especialidad, descripcion, nombre }) => {
  return (
    <div>
      <div className="card-profesional">
        <div className="card-img">
          <img src="" alt="" />
        </div>
        <p className="card-especialidad">{especialidad}</p>
        <p className="card-descripcion">{descripcion}</p>
        <p className="card-nombre">{nombre}</p>
      </div>
    </div>
  );
};

export default CardProfesional;
