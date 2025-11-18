import React from "react";

const DatosPerfil = ({
  nombre,
  img,
  correo,
  edad,
  direccion,
  genero,
  telefono,
}) => {
  return (
    <div>
      <div >
        <img src={img} alt={nombre} />
      </div>
      <p>{nombre}</p>
      <p>{correo}</p>
      <p>{especialidad}</p>
      <p >{edad}</p>
      <p >{direccion}</p>
      <p >{genero}</p>
      <p >{telefono}</p>

    </div>
  );
};

export default DatosPerfil;
