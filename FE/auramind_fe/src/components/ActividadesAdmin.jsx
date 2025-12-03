import "../Estilos/ActividadesAdmin.css";
import { useEffect, useState } from "react";
import { deleteDatos, getData, patchDatos } from "../services/fetch";

const MostrarActividades = () => {
  const [actividades, setActividades] = useState([]);
  const [actividadEditar, setActividadEditar] = useState(null);

  const abrirEditar = (actividad) => {
    setActividadEditar(actividad);
  };
  const formatofecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const dia = String(fechaObj.getDate()).padStart(2, "0");
    const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
    const anio = fechaObj.getFullYear();
    return `${anio}-${mes}-${dia}`;
  }

  useEffect(() => {
    async function traerActividades() {
      const peticion = await getData("actividades/crear-actividad/");
      setActividades(peticion);
    }
    traerActividades();
  }, []);
  const guardarCambios = async () => {
    const actividadId = localStorage.getItem("idActividadEditar");
    const activiadActualizar = {
      nombre_actividad: actividadEditar.nombre_actividad,
      descripcion: actividadEditar.descripcion,
      fecha: actividadEditar.fecha,
      id_actividad: actividadId,
    }
    const peticion = await patchDatos(`actividades/editar-actividad`, activiadActualizar);
    console.log(peticion);
    
    setActividadEditar(null);
    // const peticion = await patchDatos("editar-actividad/", actividadEditar);

    }
    const eliminarActividad = async (id) =>{
       await deleteDatos("actividades/eliminar-actividad", id);
       console.log(deleteDatos);
       
    }

  return (
    <div className="usuarios-main">
      <h1 className="titulo">Actividades Registrados</h1>

      <div className="usuarios-lista">
        {actividades.map((actividad) => (
          <div className="tarjeta" key={actividad.id}>
            <h2 className="nombre">{actividad.nombre_actividad}</h2>
            <p className="descripciono">{actividad.descripcion}</p>
            <p className="fecha">{formatofecha(actividad.fecha)}</p>
            <p className="tipo">{actividad.tipo}</p>
            <p className="ubicacion">{actividad.ubicacion}</p>

            <div className="acciones">
              <button
                className="btn pastel-editar"
                onClick={() => {
                  abrirEditar(actividad);
                  localStorage.setItem("idActividadEditar", actividad.id);
                }}
              >
                ✏ Editar
              </button>

              <button
                className="btn pastel-eliminar"
                onClick={() => eliminarActividad(actividad.id)}
              >
                🗑 Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {actividadEditar && (
        <div className="modal-fondo">
          <div className="modal">
            <h2>Editar Actividad</h2>

            <label>Nombre Actividad:</label>
            <input
              type="text"
              value={actividadEditar.nombre_actividad}
              onChange={(e) =>
                setActividadEditar({
                  ...actividadEditar,
                  nombre_actividad: e.target.value,
                })
              }
            />

            <label>Descripcion:</label>
            <input
              type="text"
              value={actividadEditar.descripcion}
              onChange={(e) =>
                setActividadEditar({
                  ...actividadEditar,
                  descripcion: e.target.value,
                })
              }
            />

            <label>Fecha:</label>
            <input
            type="date"
              value={actividadEditar.fecha}
              onChange={(e) =>
                setActividadEditar({
                  ...actividadEditar,
                  fecha: e.target.value,
                })
              }
              className="select-rol"
            />

            <div className="modal-btns">
              <button className="btn pastel-guardar" onClick={guardarCambios}>
                Guardar
              </button>
              <button
                className="btn pastel-cerrar"
                onClick={() => setActividadEditar(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MostrarActividades;
