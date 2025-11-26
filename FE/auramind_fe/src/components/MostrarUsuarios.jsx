import { useEffect, useState } from 'react'
import { getData } from '../services/fetch'

const MostrarUsuarios = () => {
    const [usuarios,setUsuarios] = useState([])

    useEffect(()=>{
    async function traerUsuarios() {
      const peticion = await getData("usuarios/crear-usuario/")
      setUsuarios(peticion)
    }
    traerUsuarios()
    },[])
  return (
    <div>
      {usuarios.map((usuario)=>(
        <div key={usuario.id}>
          <h2>{usuario.username}</h2>
            <p>{usuario.email}</p>
            <p>{usuario.rol}</p>
        </div>
        ))}
    </div>
  )
}

export default MostrarUsuarios
