
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
export {postDatos}