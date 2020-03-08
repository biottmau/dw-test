/**
 * Componente con el formulario correspondiente al buscador general
 */

import * as React from 'react';
import './Buscador.css';
import DateRangePicker from '../lib/DatePickerRange';

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
                <DateRangePicker />
            </div>
        );

    }

}


export default Buscador;