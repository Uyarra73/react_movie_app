import React, {useState} from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    // Establecemos el titulo del componente en forma de variable
    const tituloComponente = "Guardar pelicula"; 

    // Asignamos un estado inicial que se ira cambiando segun vayamos introduciendo datos
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    // Asignamos una constante con el objeto anterior desestructurado
    const {titulo, descripcion} = peliState;

    // Creamos una funcion que recoja los datos del formulario y los almacene en el state
    const conseguirDatosForm = e => {
        // Previene el comportamiento por defecto que borra el formulario automaticamente
        e.preventDefault();

        // Recogemos los datos del formulario y los almacenamos en variables
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;


        // Creamos un objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar la pelicula en el state
        setPeliState(peli);
        // Imprimimos por consola para comprobar que funciona correctamente
        console.log(peliState);

        // Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        })

        // Ejecutamos el metodo guardarPelis
        GuardarEnStorage("pelis", peli);
        

    }


  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
            {/*Mostramos los datos mediante una condicion*/}
            {(titulo && descripcion) && titulo + " guardada"}
        </strong>
        
        {/*Creamos un formulario para recoger los datos y guardarlos en el state*/}
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
