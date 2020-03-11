import * as React from 'react';
import './CardResultado.css';


class CardResultado extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CardResultado-container">
                <div className="CardResultado-container-left">
                    <img src={this.props.data.imagen} alt="" className="CardResultado-thumb" />
                    <div className="CardResultado-container-left-detail">
                        <h5>{this.props.data.name}</h5>
                        <div>{this.props.data.estrellas} Estrellas Hotel</div>
                        <div>{this.props.data.ubicacion}</div>
                        <div>{this.props.data.calificacion} {this.props.data.calificacion_name}</div>
                        <div>{this.props.data.calificacion_descript}</div>
                    </div>
                </div>
                <div className="CardResultado-container-right">
                    <div className="CardResultado-precio-title">Precio recomendado</div>
                    <div className="CardResultado-precio">$ {this.props.data.precio}</div>
                    <div><button className="btn btn-success">Ver oferta</button></div>
                </div>

            </div>
        );
    } ew

}

export default CardResultado;