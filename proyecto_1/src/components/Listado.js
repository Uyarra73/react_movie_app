import React, { useEffect, useState } from 'react';
import Editar from './Editar';

// Como parametros, utilizamos las props que recibimos del elemento padre App.js
const Listado = ({listadoState, setListadoState}) => {
  // Colocamos los hooks siempre al principio de nuestro componenete
  // 1-Inicializamos un estado para el listado de datos a rescatar
  // const [listadoState, setListadoState] = useState([]); Este estado ha sido trasladado al App.js

  const [editar, setEditar] = useState(0);

  // 2-Empleamos el hook useEffect en el momento de rescatar los datos del local storage
    useEffect(()=> {
      // 1-Comprobamos por consola su funcionamiento
      console.log("Listado cargado");
      // 2-Llamamos al metodo para rescatar los datos
      conseguirPeliculas();
    }, []);

  // Creamos un metodo para rescatar los datos del local storage
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    
    setListadoState(peliculas);

    return peliculas;
  }

  // Creamos la funcion para borrar peliculas de la lista
  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas
    let pelis_alamcenadas = conseguirPeliculas();

    // Filtrar las peliculas para eliminar la indicada. Solo nos quedamos con las que son diferentes a la peli seleccionada
    let nuevo_array_pelis = pelis_alamcenadas.filter(peli => peli.id !== parseInt(id));

    // Actualizar estado del listado
    setListadoState(nuevo_array_pelis);

    // Reescribir el local storage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  }
  

  return (
    <>
        {/* Condicion para renderizar el formulario de edicion */}
        {listadoState != null ? 
          listadoState.map(peli => {
            return (
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.titulo}</h3>
                  <p className="description">{peli.descripcion}</p>
                  <button className="edit" onClick={()=> setEditar(peli.id)}>Editar</button>
                  &nbsp;
                  <button className="delete" onClick={()=>borrarPeli(peli.id)}>Eliminar</button>

                  {/* Formulario de edicion de peliculas */}
                  {editar === peli.id && (
                    <Editar 
                      peli={peli}
                      conseguirPeliculas={conseguirPeliculas}
                      setEditar={setEditar}
                      setListadoState={setListadoState}/>
                  )}
              </article>
            );
          })
          : <h2>No hay peliculas para mostrar</h2>
        }
    </>
  );
}

export default Listado;
