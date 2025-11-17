const CardActividad = ({img, titulo, descripcion, fecha}) => {
    return(
        <>
          <div>
            <div>
                {img}
            </div>
            <p>{titulo}</p>
            <p>{descripcion}</p>
            <p>{fecha}</p>

          </div> 

        </>
    )
}

export default CardActividad

