import React from 'react';
import '../App.css';
import Buscador from '../components/Buscador/Buscador';
import Blog from '../components/Blog/Blog';
import Ofertas from '../components/Ofertas/Ofertas';
import Brand from '../components/Brand/Brand';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeScreen() {
  return (
    <content>
      <Brand />
      <Buscador />
      <Blog />
      <Ofertas />
    </content>
  );
}

export default HomeScreen;
