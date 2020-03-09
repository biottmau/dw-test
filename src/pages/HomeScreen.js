import React from 'react';
import '../App.css';
import Buscador from '../components/Buscador/Buscador';
import Blog from '../components/Blog/Blog';
import Ofertas from '../components/Ofertas/Ofertas';
import Brand from '../components/Brand/Brand';
import Footer from '../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          inicio Sesión
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Menú
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARS
        </a>
      </header>
      <content>
        <Brand />
        <Buscador />
        <Blog />
        <Ofertas />
        
      </content>
      <footer>
        <Footer/>

      </footer>
    </div>
  );
}

export default HomeScreen;
