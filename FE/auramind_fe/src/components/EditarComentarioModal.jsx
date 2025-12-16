import React, { useState, useEffect } from "react";


export default function EditarComentarioModal({ isOpen, onClose, onSave, tituloInicial, contenidoInicial }) {
const [titulo, setTitulo] = useState("");
const [contenido, setContenido] = useState("");


// Cargar datos previos cuando se abre el modal
useEffect(() => {
if (isOpen) {
setTitulo(tituloInicial || "");
setContenido(contenidoInicial || "");
}
}, [isOpen, tituloInicial, contenidoInicial]);


if (!isOpen) return null;


const handleGuardar = () => {
onSave({ titulo, contenido });
onClose();
};


return (
<div className="modal-overlay">
<div className="modal-editar">
<h2 className="modal-titulo">Editar publicación</h2>


<label className="modal-label">Título</label>
<input
type="text"
className="modal-input"
value={titulo}
onChange={(e) => setTitulo(e.target.value)}
/>


<label className="modal-label">Contenido</label>
<textarea
className="modal-textarea"
value={contenido}
onChange={(e) => setContenido(e.target.value)}
/>


<div className="modal-acciones">
<button className="btn-cancelar" onClick={onClose}>Cancelar</button>
<button className="btn-guardar" onClick={handleGuardar}>Guardar cambios</button>
</div>
</div>
</div>
);
}