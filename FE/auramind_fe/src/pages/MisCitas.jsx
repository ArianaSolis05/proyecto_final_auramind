import { useEffect, useState } from "react";
import { deleteDatos, getData } from "../services/fetch";
import Header from "../components/Header";
const MisCitas = () => {
    const [tusCitas,setTusCitas] = useState([])
    const [recarga,setRecarga] = useState(false)
    useEffect(()=>{
        const traerTusCitas = async()=>{
            if (localStorage.getItem("rol") == "paciente") {
                const peticion = await getData(`citas/citas-usuario/${localStorage.getItem("idUsuario")}/`)
                setTusCitas(peticion)
                return
            }
            if (localStorage.getItem("rol") == "psicologo") {
                const peticion = await getData(`citas/citas-psicologo/${localStorage.getItem('idUsuario')}`)
                setTusCitas(peticion)
                return
            }
        }

       
        traerTusCitas()
    },[recarga])


    async function eliminarCita(id) {
        const peticion = await deleteDatos(`citas/eliminar-citas`,id)
        console.log(peticion);
        setRecarga(true)
    }
    return(
        <>
        <Header/>
        {tusCitas.length === 0 && <h2>No tienes citas agendadas</h2>}
            {tusCitas.map((cita)=>{
                return(
                (
                <div key={cita.id}>
                    <h3>Psicologo: {cita.psicologo_nombre}</h3>
                    <p>Motivo: {cita.motivo}</p>
                    <p>Fecha y hora: {new Date(cita.fecha_hora).toLocaleString()}</p>
                    <button
                        onClick={()=>{
                            eliminarCita(cita.id)
                        }}
                    >Eliminar Cita</button>
                </div>
                )
            )})}
        </>
    )
}

export default MisCitas;