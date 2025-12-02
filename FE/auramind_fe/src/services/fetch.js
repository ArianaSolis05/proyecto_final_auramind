
async function postDatos(obj, endpoint) {
  try {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const respuesta = await peticion.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}


async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })   
        const respuesta = await peticion.json()
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.error(error);
    }
}

async function patchDatos(endpoint,obj) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/${endpoint}/`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    const consultas = await response.json();
    console.log(consultas);
    return consultas;
  } catch (error) {
    console.log("Error al editar",error);
  }
}


async function deleteDatos(endpoint, id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/${endpoint}/` + id + "/",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const borrarDatos = await response.json();
    return borrarDatos;
  } catch (error) {
    console.error("Error al eliminar dato");
  }
}

export { postDatos, getData, patchDatos, deleteDatos };