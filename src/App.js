import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import BuscadorScreen from './pages/BuscadorScreen';
import Footer from './components/footer/Footer';


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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/buscador/:res/:dates/:type" component={BuscadorScreen} />
        </Switch>
      </BrowserRouter>

      <footer>
        <Footer />

      </footer>
    </div>




  );
}

export default App;
