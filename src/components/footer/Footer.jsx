import * as React from 'react';
import './Footer.css';
import logo from '../../images/Trivago.svg'

const Footer = () => (
    <div className="Footer-container" >


        <div className="Footer-brand">
            <img src={logo} alt="logo"  className="Footer-brand-logo" />
            <div className="Footer-copyright">Copyright 2020 trivago | Todos los derechos reservados. | Recoding by Mauricio Biott</div>
        </div>

    </div>
)

export default Footer;