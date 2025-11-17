import "../Estilos/CardProfesional.css"

const CardProfesional = ({ nombre, img, descripcion, especialidad }) => {
  return (
    <div className="card-profesional">
      <div className="card-img">
        <img src={img} alt={nombre} />
      </div>
      <p className="card-nombre">{nombre}</p>
      <p className="card-descripcion">{descripcion}</p> 
      <p className="card-especialidad">{especialidad}</p>
    </div>
  );
};

export default CardProfesional;
