import React from 'react';

const Crear = () => {
  return (
    <div className="add">
        <h3 className="title">Guardar pelicula</h3>
        <form action="">
            <input type="text" placeholder="Titulo"/>
            <textarea name="" id="" placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  );
}

export default Crear;
