import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function BuscadorScreen() {
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
        <div><br/><br/><br/>Tranbajando en la busqueda de resultados......</div>

      </content>
      <footer>
        <Footer/>

      </footer>
    </div>
  );
}

export default BuscadorScreen;
