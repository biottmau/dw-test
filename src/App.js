import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buscador from './components/Buscador';
import Blog from './components/Blog';
import Ofertas from './components/Ofertas';
import Brand from './components/Brand';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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

export default App;
