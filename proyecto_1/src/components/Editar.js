import React from 'react';

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a editar
        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex(peli=> peli.id === id);

        // Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar los datos de la pelicula
        pelisAlmacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelisAlmacenadas));

        // Actualizar estados
        setListadoState(pelisAlmacenadas);
        setEditar(0);

    }
  return (
    <div className='edit_form'>
      <hr/>  
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input 
            type='text' 
            name="titulo" 
            className='titulo_editado'
            defaultValue={peli.titulo} />
        <textarea 
            name="descripcion"
            className='descripcion_editada'
            defaultValue={peli.descripcion}></textarea>
        <input 
            type='submit'
            className='editar'
            value='Actualizar'/>
      </form>
    </div>
  );
}

export default Editar;
