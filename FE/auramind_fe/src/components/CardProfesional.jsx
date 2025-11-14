const CardProfesional = ({nombre,img,descripcion,especialidad}) =>{
    return(
        <>
            <div>
                <div>
                    {img}
                </div>
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <p>{especialidad}</p>
            </div>
        </>
    )
}
export default CardProfesional