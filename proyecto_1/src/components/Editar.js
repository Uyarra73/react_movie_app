import React from 'react';

const Editar = () => {

    const titulo_componente = "Editar pelicula";
  return (
    <div className='editForm'>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
        <input 
            type='text' 
            name="titulo" 
            className='titulo_editado'
            defaultValue='Titulo original de la pelicula' />
        <textarea 
            name="descripcion"
            className='Descripcion_editada'
            defaultValue='Descripcion original de la pelicula'></textarea>
        <input 
            type='submit'
            className='editar'
            value='Actualizar'/>
      </form>
    </div>
  );
}

export default Editar;
