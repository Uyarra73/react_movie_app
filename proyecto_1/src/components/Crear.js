import React, {useState} from 'react';

const Crear = () => {

    const tituloComponente = "Guardar pelicula";

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        alert(titulo + " " +descripcion);

        // Crear objeto de la pelicula a guardar

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar la pelicula en el state
        setPeliState(peli);
        console.log(peliState);
    }


  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
            {(titulo && descripcion) && titulo + " guardada"}
        </strong>
        
        <form onSubmit={conseguirDatosForm}>
            <input 
                type="text" 
                placeholder="Titulo"
                id="titulo"
                name="titulo"
                required/>
            <textarea 
                name="descripcion" 
                id="descripcion" 
                placeholder="Descripción"></textarea>
            <input 
                type="submit" 
                id="save"
                value="Guardar"/>
        </form>
    </div>
  );
}

export default Crear;
