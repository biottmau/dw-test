/**
 * Componente con el formulario correspondiente al buscador general
 */

import * as React from 'react';
import './Buscador.css';


class Buscador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buscando: false,
        }
    }

    render() {
        return (
            <div className="buscador_container" >
                Buscador
            </div>
        );

    }

}


export default Buscador;