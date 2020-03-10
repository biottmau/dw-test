/**
 * Clase encargada del consumo de API para la busqueda de posteos del blog
 */
import * as Config from './config';


class BlogService{
    /**
     * Consulto datos en supuesta API 
     */
    static getPosts =  () => {
        return fetch(Config.API_URL + "blog.json")
            .then( (response) => response.json() )
            .then( (data) => {
                console.log("CONSIGO LOS DATOS");
                console.log(data);
                return data;
            })
            .catch( (err) => {
                return err;
            });
    }
}

export default BlogService;