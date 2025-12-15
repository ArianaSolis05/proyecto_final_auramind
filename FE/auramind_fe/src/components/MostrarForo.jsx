import { useEffect, useState } from "react";
import { deleteDatos, getData } from "../services/fetch";

const MostrarForo = () => {
    const [foro,setForo] = useState([])

    useEffect(()=>{
        const traerForo = async()=>{
            const peticion = await getData("foro/crear-comentario/")
            setForo(peticion)
        }
        traerForo()
    },[])

    const eliminarForo = async(id) => {
        const peticion = await deleteDatos(`foro/eliminar-comentario`, id)
        setForo(foro.filter((f) => f.id !== id));
        console.log(peticion);
    }
    return(
        <>
        <h2>Foro</h2>
        {foro.length === 0 && (
            <h2>No hay comentarios en el foro</h2>
        )}
        <div>
            {foro.map((f)=>(
                <div key={f.id}>
                    <h3>{f.titulo}</h3>
                    <p>{f.contenido}</p>
                    <button onClick={()=>{
                        eliminarForo(f.id)
                    }}>Eliminar</button>
                </div>
            ))}
        </div>

        </>
    )
}
export default MostrarForo;