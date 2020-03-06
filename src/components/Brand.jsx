/**
 * Componente para el brand que figura en el inicio.
 */

import * as React from 'react';
import logo from '../Trivago.svg';
import './Brand.css';


const Brand = () => (
    <div className="container">
        <div className="container-logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="container-textos">
            <div className="container-text">Encontrá tu hotel ideal y compará precios de diferentes páginas web</div>
            <div className="container-text1">Buscá una ciudad, hotelo hasta un lugar hermoso</div>
        </div>
    </div>
)

export default Brand;