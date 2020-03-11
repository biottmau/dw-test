import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from '../components/Buscador/Buscador';
import Resultados from '../components/Resultados/Resultados';

function BuscadorScreen(props) {
    console.log(props.match.params);
    return (
        <content>
            <div className="App-background-result"> 
            <Buscador />
            <Resultados />

            <div ><br /><br /><br />Tranbajando en la busqueda de resultados......
        <br />
                <br />
                <b>Palabra clave:</b>{props.match.params.res}
                <br />
                <b>Entre fechas:</b>{props.match.params.dates}
                <br />
                <b>tipo:</b>{props.match.params.type}
            </div>
            </div>
        </content>
    );
}

export default BuscadorScreen;
