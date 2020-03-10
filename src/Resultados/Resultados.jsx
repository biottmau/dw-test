/**
 * Componente para motrar la lista de resultados
 * Aca deberíamos trabajar paginación y demas
 */

import * as React from 'react';
import BuscadorService from '../services/BuscadorService';
import CardResultado from '../components/lib/CardResultado';


class Resultados extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }
    componentDidMount(){
        BuscadorService.getResultados().then((data) => {
            this.setState({data:data});
        });
    }

    render(){
        let results = this.state.data;
        return (
            <div>
            {results.map((d,i) => (
                <CardResultado key={i} data={d} />
            ))}
            </div>
        );
    }
}

export default Resultados;