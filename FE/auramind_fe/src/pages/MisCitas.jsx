import { useEffect, useState } from "react";
import { getData } from "../services/fetch";
import Header from "../components/Header";
const MisCitas = () => {
    const [tusCitas,setTusCitas] = useState([])

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
    },[])

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
                </div>
                )
            )})}
        </>
    )
}

export default MisCitas;