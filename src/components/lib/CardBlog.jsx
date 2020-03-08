/**
 * Componente que muestra el card de un post 
 */

import * as React from 'react';
import './CardBlog.css'

class CardBlog extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
                <div className="card-body">
                    <a href={this.props.url} target="_blank" className="CardBlog-a">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.resume}</p>
                    </a>
                </div>
            </div>

        );
    }
}


export default CardBlog;