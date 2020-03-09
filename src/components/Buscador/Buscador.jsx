/**
 * Componente con el formulario correspondiente al buscador general
 */

import * as React from 'react';
import './Buscador.css';
import DateRangePicker from '../lib/DatePickerRange';
import Autocomplete from '../lib/Autocomplete';
import SelectTypes from '../lib/SelectTypes';

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
                <div className="Buscador-autocomplete">
                    <Autocomplete />
                </div>
                <div className="Buscador-dates">
                    <DateRangePicker />
                </div>
                <div className="Buscador-types">
                    <SelectTypes />
                </div>
                <div className="Buscador-button">
                    <a href="/buscador/1" className="btn btn-primary" >Buscar</a>

                </div>
            </div>
        );

    }

}


export default Buscador;