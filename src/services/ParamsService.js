/**
 * Clase conecta con el servicio donde puedo obtener varios parametros posibles
 * Tipo de habitación, datos de configuración , etc..
 */

class ParamsService{
    /**
     * Consulto datos en supuesta API 
     */
    static getTypes =  () => {
        return fetch("http://biott.ml/api_demo/types.json")
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