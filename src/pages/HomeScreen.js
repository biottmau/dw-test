import React from 'react';
import '../App.css';
import Buscador from '../components/Buscador/Buscador';
import Blog from '../components/Blog/Blog';
import Ofertas from '../components/Ofertas/Ofertas';
import Brand from '../components/Brand/Brand';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from '../components/Info/Info';

function HomeScreen() {
  return (
    <content>
      <Brand />
      <Buscador />
      <Blog />
      <Ofertas />
      <Info />
    </content>
  );
}

export default HomeScreen;
