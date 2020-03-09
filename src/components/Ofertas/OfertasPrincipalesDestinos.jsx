/**
 * Componente contenedor de las ofertas destacadas
 */

import * as React from 'react';
import './Ofertas.css';
import CardOferta from '../lib/CardOferta';
import OfertasService from '../../services/OfertasService';


class OfertasPrincipalesDestinos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        OfertasService.getOfertasPrincipalesDestinos().then((data) => {
            this.setState({
                data: data
            });

        });
    }

    render() {
        return (
            <div className="Ofertas-container-posts">
                {this.state.data.map((post, index) => (
                    <div className="Blog-post" key={index}>
                        <CardOferta
                            src={post.imagen}
                            alt="Algun comentario"
                            title={post.title}
                            resume={post.resumen}
                            price={post.precio}
                            url={post.url}
                        />
                    </div>

                ))}
            </div>

        );

    }
}

export default OfertasPrincipalesDestinos;