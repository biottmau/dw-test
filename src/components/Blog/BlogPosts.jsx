/**
 * Componente Con el contenedor de los posteos a mostrar en pantalla
 */

import * as React from 'react';
import './Blog.css';
import CardBlog from '../lib/CardBlog';
import BlogService from '../../services/BlogService';


class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        BlogService.getPosts().then((data) => {
            this.setState({
                data: data
            });

        });
    }

    render() {
        return (
            <div className="Blog-container-posts">
                {this.state.data.map((post, index) => (
                    <div className="Blog-post" key={index}>
                        <CardBlog
                            src={post.imagen}
                            alt="Algun comentario"
                            title={post.title}
                            resume={post.resumen}
                            url={post.url}
                        />
                    </div>

                ))}


            </div>

        );

    }
}

export default BlogPosts;