import React, { useEffect, useState } from 'react';

// Como parametros, utilizamos las props que recibimos del elemento padre App.js
const Listado = ({listadoState, setListadoState}) => {
  // Colocamos los hooks siempre al principio de nuestro componenete
  // 1-Inicializamos un estado para el listado de datos a rescatar
  // const [listadoState, setListadoState] = useState([]); Este estado ha sido trasladado al App.js

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
  }

  return (
    <>
        {listadoState != null ? 
          listadoState.map(peli => {
            return (
              <article key={peli.id} className="peli-item">
                  <h3 className="title">{peli.titulo}</h3>
                  <p className="decription">{peli.descripcion}</p>
                  <button className="edit">Editar</button>
                  &nbsp;
                  <button className="delete">Eliminar</button>
              </article>
            );
          })
          : <h2>No hay peliculas para mostrar</h2>
        }
    </>
  );
}

export default Listado;
