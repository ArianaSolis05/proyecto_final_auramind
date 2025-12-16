import React, { useEffect, useState } from 'react'
import "../Estilos/PagPrincipal.css";
import Hero from '../components/Hero';


import Home from '../components/Home'
import CardActividades from '../components/CardActividades'
import CardProfesional from '../components/CardProfesional'
import Menu from '../components/Menu'
import { getData } from '../services/fetch'
import Header from '../components/Header';
import ActividadModal from '../components/ActividadModal';
import PsicologoModal from '../components/PsicologoModal';


function PagPrincipal() {
  const [listaActividades,setListaActividades] = useState([])
  const [listaProfesionales,setListaProfesionales] = useState([])
  const [actividad,setActividad] = useState(null)
  const [mostrarModalActividades,setMostrarModalActividades] = useState(false)
  const [Psicologo,setPsicologo] = useState(null)
  const [mostrarModalPsicologo,setMostrarModalPsicologo] = useState(false)



  useEffect(()=>{
    async function traerActividades() {
      const peticion = await getData("actividades/crear-actividad/")
      setListaActividades(peticion)
    }
    traerActividades()
  },[])

  useEffect(()=>{
    async function traerProfesionles() {
      const respuesta = await getData("/usuarios/crear-usuario/")
      const filtro = respuesta.filter((especialidad)=>especialidad.rol == "psicologo")
      setListaProfesionales(filtro)
      console.log(respuesta);
    }
    traerProfesionles()
  },[])

  const formatearFecha = (fecha) => {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString(undefined, opciones);
  }

  return (
    <div>
    
      <Header/>
      <Home/>
      <h1 className="seccion-title">Actividades</h1>
      <div className="seccion-cards">
        {listaActividades.map((actividad)=>(
          <CardActividades
            key={actividad.id}
            img={actividad.img_actividad}
            nombre_actividad={actividad.nombre_actividad}
            descripcion={actividad.descripcion}
            fecha={formatearFecha(actividad.fecha)}
            className="card"
            verMas={()=>{
              setMostrarModalActividades(true)
              setActividad(actividad)
            }}

          />
        ))}
      </div>
        {mostrarModalActividades && (
          <ActividadModal nombreActividad={actividad.nombre_actividad} descripcion={actividad.descripcion} fecha={actividad.fecha} ubicacion={actividad.ubicacion}  isOpen={mostrarModalActividades} onClose={()=>{
            setMostrarModalActividades(false)
          }}/>
        )}
      <h1 className="seccion-title">Profesionales</h1>
      <div className="seccion-cards">
        {listaProfesionales.map((Psicologo)=>(
          <CardProfesional
            key={Psicologo.id}
            nombre_actividad={Psicologo.especialidad}
            descripcion={Psicologo.descripcion}
            nombre={Psicologo.username}
            img={Psicologo.img_perfil || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"}
            className="card"
            verMas={()=>{
              setMostrarModalPsicologo(true)
              setPsicologo(Psicologo)
            }}
          />
        ))}
         {mostrarModalPsicologo && (
          <PsicologoModal nombre={Psicologo.username} descripcion={Psicologo.telefono} especialidad={Psicologo.nacionalidad} isOpen={mostrarModalPsicologo} onClose={()=>{
            setMostrarModalPsicologo(false)
          }}/>
        )}

      </div>

    </div>
  )
}

export default PagPrincipal
