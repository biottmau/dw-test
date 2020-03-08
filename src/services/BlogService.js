/**
 * Clase encargada del consumo de API para la busqueda de posteos del blog
 */

class BlogService{
    /**
     * Consulto datos en supuesta API 
     */
    static getPosts =  () => {
        return fetch("http://biott.ml/api_demo/blog.json")
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