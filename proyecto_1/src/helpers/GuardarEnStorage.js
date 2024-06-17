// Creamos un metodo generico a parte para guardor nuestra lista de elementos en localStorage
export const GuardarEnStorage = (key, elemento) => {
    // 1- Ver los elementos que ya tenemos en el localStorage
    let items = JSON.parse(localStorage.getItem(key));

    // 2- Comprobamos si es un array
    if(Array.isArray(items)){
        // 1- Añadimos el nuevo elemento
        items.push(elemento);
    } else {
        // 2- Creamos un array con el nuevo elemento
        items = [elemento];
    }

    // 3- Guardar en el almacenamiento local
    localStorage.setItem(key, JSON.stringify(items));

    // 4- Devolver un objeto guardado
    return elemento
}
