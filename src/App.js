import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import BuscadorScreen from './pages/BuscadorScreen';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/buscador/:id" component={BuscadorScreen} />
    </Switch>
  );
}

export default App;
