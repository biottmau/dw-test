/**
 * Componente con el formulario correspondiente al buscador general
 */

import * as React from 'react';
import './Buscador.css';
import DateRangePicker from '../lib/DatePickerRange';
import Autocomplete from '../lib/Autocomplete';
import SelectTypes from '../lib/SelectTypes';
import logo from '../../images/Trivago.svg';

class Buscador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buscando: false,
            autocomplete: "Sin valor",
            dates: "Sin valor",
            type: "Sin valor"
        }
    }

    handleClick = (ev) => {
        return false;
    }

    render() {
        return (
            <div className="buscador_container" >

                <div className="Buscador-autocomplete">
                    <Autocomplete onSelect={(val) => this.setState({ autocomplete: val })} />
                </div>
                <div className="Buscador-dates">
                    <DateRangePicker onSelect={(val) => this.setState({ dates: val })} />
                </div>
                <div className="Buscador-types">
                    <SelectTypes onSelect={(val) => this.setState({ type: val })} />
                </div>
                <div className="Buscador-button">
                    <a href={'/buscador/' + this.state.autocomplete + '/' + this.state.dates + '/' + this.state.type} className="btn btn-primary"
                        onClick={this.handleClick}>Buscar</a>

                </div>
            </div>
        );

    }

}


export default Buscador;