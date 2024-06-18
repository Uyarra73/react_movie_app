import React, { useState } from 'react';

const Buscador = ({listadoState, setListadoState}) => {
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Crear un estado y actualizarlo
    setBusqueda(e.target.value);
    
    // Filtrar array para buscar coincidencias
    let pelisEncontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    })
    // Comprobar si hay un resultado
    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    
    // Dar valor de todo el localStorage
    setListadoState(pelisEncontradas);
    // Actualizar estado del listado principal con lo que he filtrado

  }
  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 1) && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
        )}
      
        <form action="">
            <input 
              type="text" 
              name="busqueda" 
              placeholder="Buscar..."
              autoComplete='off'
              onChange={buscarPeli}/>
            <button type="submit">Buscar</button>
        </form>
    </div>
  );
}

export default Buscador;
