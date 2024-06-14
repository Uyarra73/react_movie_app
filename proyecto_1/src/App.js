
import React from'react';
import './App.css';

function App() {
  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
          <div className="logo">
              <div className="play"></div>
          </div>
          <h1>Mis películas</h1>
      </header>

      {/*Barra de navegacion*/}
      <nav className="nav">
          <ul>
              <li><a href="/#">Inicio</a></li>
              <li><a href="/#">Películas</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Contacto</a></li>
          </ul>
      </nav>

      {/*Contenido principal*/}
      <section className="content">
          <article className="peli-item">
              <h3 className="title">Desarrollo Web</h3>
              <p className="decription">victorroblesweb.es</p>

              <button className="edit">Editar</button>
              &nbsp;
              <button className="delete">Eliminar</button>
          </article>
          <article className="peli-item">
              <h3 className="title">Desarrollo Web</h3>
              <p className="decription">victorroblesweb.es</p>

              <button className="edit">Editar</button>
              &nbsp;
              <button className="delete">Eliminar</button>
          </article>
          <article className="peli-item">
              <h3 className="title">Desarrollo Web</h3>
              <p className="decription">victorroblesweb.es</p>

              <button className="edit">Editar</button>
              &nbsp;
              <button className="delete">Eliminar</button>
          </article>
          <article className="peli-item">
              <h3 className="title">Desarrollo Web</h3>
              <p className="decription">victorroblesweb.es</p>

              <button className="edit">Editar</button>
              &nbsp;
              <button className="delete">Eliminar</button>
          </article>
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
          <div className="search">
              <h3 className="title">Buscador</h3>
              <form action="">
                  <input type="text" name="search" placeholder="Buscar..."/>
                  <button type="submit">Buscar</button>
              </form>
          </div>
          <div className="add">
              <h3 className="title">Guardar pelicula</h3>
              <form action="">
                  <input type="text" placeholder="Titulo"/>
                  <textarea name="" id="" placeholder="Descripción"></textarea>
                  <input type="submit" value="Guardar"/>
              </form>
          </div>
      </aside>

      {/*Pie de pagina*/}
      <footer className="footer">
          <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
