/**
 * Componente que muestra el card de un post 
 */

import * as React from 'react';
import './CardOferta.css'
import Helmet from 'react-helmet';

class CardOferta extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
                <div className="card-body">
                    <a href={this.props.url} target="_blank" className="CardOferta-a" rel="noopener noreferrer">
                        <p className="card-text"> <b>{this.props.title}</b> {this.props.resume} <b>{this.props.price}</b></p>
                    </a>
                </div>
            </div>

        );
    }
}


export default CardOferta;