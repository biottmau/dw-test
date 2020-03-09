import * as React from 'react';
import './Autocomplete.css';
import Autosuggest from 'react-autosuggest';
import BuscadorService from '../../services/BuscadorService';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = (value, values) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return values.filter(name => regex.test(name.result));
}

const getSuggestionValue = suggestion => suggestion.result;

const renderSuggestion = suggestion => {
    console.log("sugestion")
    console.log(suggestion);

    return (
        <div>
            <div className="Autocomplete-list">{suggestion.result}</div>
            <div className="Autocomplete-list-detail">{suggestion.city}</div>
        </div>
    );
};

const renderInputComponent = inputProps => (
    <div className="inputContainer">
        <img className="icon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png" />
        <input {...inputProps} />
    </div>
);



class Autocomplete extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            isSearching: false,
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: [],
            isSearching:true,

        });
        BuscadorService.getAutocomplete().then( (data) => {
            console.log("buscando.....");
            console.log(data);
            this.setState({
                suggestions: getSuggestions(value,data),
                isSearching:false,
            });
    
        } );

    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: this.state.isSearching?'Buscando...':"Ingrese lo que desea ...",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                renderInputComponent={renderInputComponent}
            />
        );
    }
}

export default Autocomplete;
