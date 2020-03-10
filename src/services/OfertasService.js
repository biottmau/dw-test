/**
 * Clase encargada del consumo de API para la busqueda de ofertas
 */
import * as Config from './config';

class OfertasDestacadas {
    /**
     * Consulto datos en supuesta API  Ofertas destacadas
     */
    static getOfertasCiudadesDestacadas = () => {
        return fetch(Config.API_URL + "ofertas-destacadas.json")
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                return err;
            });
    }

    /**
     * Consulto datos en supuesta API  Ofertas principales destinos
    */
    static getOfertasPrincipalesDestinos = () => {
        return fetch(Config.API_URL + "ofertas-destinos.json")
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((err) => {
                return err;
            });
    }


}

export default OfertasDestacadas;