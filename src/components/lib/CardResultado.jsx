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
                    <img src={this.props.data.imagen} alt="" />
                    <div className="CardResultado-container-left-detail">
                        <h5>{this.props.data.name}</h5>
                    </div>
                </div>
                <div className="CardResultado-container-right">
                    Derecha
                </div>
                
            </div>
        );
    }

}

export default CardResultado;