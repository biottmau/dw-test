/**
 * Clase encargada del consumo de API para la busqueda de ciudades o hoteles
 */

class BuscadorService{
    /**
     * Consulto datos en supuesta API  . busco hoteles o ciudades
     */
    static getAutocomplete =  () => {
        return fetch("http://biott.ml/api_demo/buscador.json")
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