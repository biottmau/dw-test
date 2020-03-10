/**
 * Clase conecta con el servicio donde puedo obtener varios parametros posibles
 * Tipo de habitación, datos de configuración , etc..
 */
import * as Config from './config';

class ParamsService{
    /**
     * Consulto datos en supuesta API 
     */
    static getTypes =  () => {
        return fetch(Config.API_URL + "types.json")
            .then( (response) => response.json() )
            .then( (data) => {
                return data;
            })
            .catch( (err) => {
                return err;
            });
    }
}

export default ParamsService;