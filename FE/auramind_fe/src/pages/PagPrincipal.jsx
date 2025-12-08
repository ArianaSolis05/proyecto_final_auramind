import React, { useEffect, useState } from 'react'
import "../Estilos/PagPrincipal.css";
import Hero from '../components/Hero';


import Home from '../components/Home'
import CardActividades from '../components/CardActividades'
import CardProfesional from '../components/CardProfesional'
import Menu from '../components/Menu'
import { getData } from '../services/fetch'
import Header from '../components/Header';

function PagPrincipal() {
  const [listaActividades,setListaActividades] = useState([])
  const [listaProfesionales,setListaProfesionales] = useState([])

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
            nombre_actividad={actividad.nombre_actividad}
            descripcion={actividad.descripcion}
            fecha={formatearFecha(actividad.fecha)}
            className="card"
          />
        ))}
      </div>

      <h1 className="seccion-title">Profesionales</h1>
      <div className="seccion-cards">
        {listaProfesionales.map((Psicologo)=>(
          <CardProfesional
            key={Psicologo.id}
            nombre_actividad={Psicologo.especialidad}
            descripcion={Psicologo.descripcion}
            nombre={Psicologo.username}
            className="card"
          />
        ))}
      </div>

    </div>
  )
}

export default PagPrincipal
