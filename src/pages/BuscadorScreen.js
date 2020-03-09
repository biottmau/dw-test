import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BuscadorScreen(props) {
    console.log(props.match.params);
  return (
      <content>
        <div ><br/><br/><br/>Tranbajando en la busqueda de resultados......
        <br/>
        <br/>
        <b>Palabra clave:</b>{props.match.params.res}
        <br/>
        <b>Entre fechas:</b>{props.match.params.dates}
        <br/>
        <b>tipo:</b>{props.match.params.type}
        </div>

      </content>
  );
}

export default BuscadorScreen;
