/**
 * Componente con el Magazine en forma Noticias.
 */

import * as React from 'react';
import logo from '../../images/Trivago.svg';
import './Blog.css';
import BlogPosts from './BlogPosts';





const Blog = () => (
    <div className="Blog-container">
        <div className="App-title"> ¿Necesitás ideas para tu próximo viaje?</div>
        <div className="App-text">Descubrí las mejores experiencias en hoteles en los más de 140 artículos de trivago Magazine, desde hoteles boutique en Mendoza hasta casas de campo encantadoras en Córdoba.</div>
        <div className="Blog-brand">
            <img src={logo} alt="logo" className="Blog-brand-logo" /><span className="Blog-title">magazine</span>
        </div>
        <BlogPosts />
    </div>
)

export default Blog;