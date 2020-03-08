/**
 * Componente encargado de mostrar los diferentes tipo de busqueda o reserva
 */
import * as React from 'react';
import Select from 'react-select';
import ParamsService from '../../services/ParamsService';



class SelectTypes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            options:[]
        }
    }
    componentDidMount(){
        ParamsService.getTypes().then((data) => {
            console.log(data);
            this.setState({
                selectedOption:data[0],
                options:data
            });
        });
    }

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
            />
        );
    }
}

export default SelectTypes;