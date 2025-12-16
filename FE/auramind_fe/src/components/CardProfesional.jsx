import "../Estilos/CardProfesional.css";

const CardProfesional = ({ especialidad, descripcion, nombre, verMas,img }) => {
  return (
    <div>
      <div className="card-profesional">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <p className="card-especialidad">{especialidad}</p>
        <p className="card-descripcion">{descripcion}</p>
        <p className="card-nombre">{nombre}</p>
        <button onClick={verMas} className="btn-verMas">Ver más</button>
      </div>
    </div>
  );
};

export default CardProfesional;
