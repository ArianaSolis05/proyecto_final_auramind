import React, { useEffect, useState } from 'react'

import Home from '../components/Home'
import CardActividades from '../components/CardActividades'
import CardProfesional from '../components/CardProfesional'
import Menu from '../components/Menu'
import { getData } from '../services/fetch'

function PagPrincipal() {
  const [listaActividades,setListaActividades] = useState([])
  const [listaProfesionales,setListaProfesionales] = useState([])

  useEffect(()=>{
    async function traerActividades() {
      const peticion = await getData("actividades/crear-actividad/")
      // const filtro = peticion.filter((especialidad)=>especialidad.rol == "psicologo")
      setListaActividades(peticion)
    }
    traerActividades()
  },[])

  useEffect(()=>{
    async function traerProfesionles() {
      const respuesta = await getData("/usuarios/crear-usuario/")
      const filtro = peticion.filter((especialidad)=>especialidad.rol == "psicologo")
      setListaProfesionales(filtro)
    }
    traerProfesionles()
  },[])
  return (
    <div>

   
    <Home/>
    
    <CardProfesional/>
    

    {listaActividades.map((actividad)=>{
      return(
        <CardActividades
          nombre_actividad={actividad.nombre_actividad}
          descripcion={actividad.descripcion}
          fecha={actividad.fecha}
          />
      )})

      
    }  
    {listaProfesionales.map((Psicologo)=>{
      return(
        <CardProfesional
          nombre_actividad={Psicologo.especialidad}
          descripcion={Psicologo.descripcion}
          fecha={Psicologo.usuario_id}
          />
      )}  
      )}  

          
      
    
  


    
    </div>
  )
}

export default PagPrincipal
