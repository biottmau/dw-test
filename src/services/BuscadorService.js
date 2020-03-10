/**
 * Clase encargada del consumo de API para la busqueda de ciudades o hoteles
 */
import * as Config from './config';

class BuscadorService{
    /**
     * Consulto datos en supuesta API  . busco hoteles o ciudades
     */
    static getAutocomplete =  () => {
        return fetch(Config.API_URL + "buscador.json")
            .then( (response) => response.json() )
            .then( (data) => {
                return data;
            })
            .catch( (err) => {
                return err;
            });
    }


    /**
     * Obtengo los resultados de una supuesta busqueda
     */
    static getResultados =  () => {
        return fetch(Config.API_URL + "resultados.json")
            .then( (response) => response.json() )
            .then( (data) => {
                return data;
            })
            .catch( (err) => {
                return err;
            });
    }


}

export default BuscadorService;