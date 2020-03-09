/**
 * Clase encargada del consumo de API para la busqueda de ofertas
 */

class OfertasDestacadas {
    /**
     * Consulto datos en supuesta API  Ofertas destacadas
     */
    static getOfertasCiudadesDestacadas = () => {
        return fetch("http://biott.ml/api_demo/ofertas-destacadas.json")
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
        return fetch("http://biott.ml/api_demo/ofertas-destinos.json")
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