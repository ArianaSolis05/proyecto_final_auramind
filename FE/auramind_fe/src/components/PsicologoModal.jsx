import "../Estilos/ActividadModal.css"

export default function PsicologoModal({ isOpen, onClose,nombre,descripcion,especialidad }) {
  if (!isOpen) return null;
  
    const formatofecha = (fecha) => {
    const fechaObj = new Date(fecha);
    const dia = String(fechaObj.getDate()).padStart(2, "0");
    const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
    const anio = fechaObj.getFullYear();
    return `${anio}-${mes}-${dia}`;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <span className="modal-icon">●</span>
          <h3>{nombre}</h3>
        </div>

        <p className="modal-text">
           {descripcion}
        </p>
    
        <label className="modal-label">{especialidad}</label>

    
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
