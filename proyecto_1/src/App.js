
import React from'react';
import './App.css';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Crear from './components/Crear';


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
          {/* Listado de peliculas*/}
          <Listado />
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
          {/* Buscador */}
          <Buscador />

          {/* Crear */}
          <Crear />
      </aside>

      {/*Pie de pagina*/}
      <footer className="footer">
          <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
