import * as React from 'react';
import './Contacto.css';

const Contacto = () => (
    <div className="Contacto-container" >

        <div className="Contacto-center">

            <div className="Contacto-50">
                <p className="newsletter-registration__badge">¿Querés recibir ofertas exclusivas de hoteles? ¡Suscribite a nuestra newsletter!</p>
            </div>
            <div className="Contacto-50">
                <form method="POST" novalidate="novalidate" >
                    <input type="email" name="email" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="true" id="newsletter-registration__email-in-footer" className="form-control" required="" />
                    <input type="submit" className="btn btn-primary" value="Suscribirse" />
                    <input type="hidden" name="subscriptionType" value="organic_leads" />
                    <input type="hidden" name="subscriptionSource" value="trivagoHotelSearch" />
                </form>
            </div>
        </div>
        <div className="Contacto-center">
            <div className="Contacto-separate" ></div>
        </div>
        <div className="Contacto-center">
            <div className="Contacto-50">
                <p className="footer__address"><strong>trivago N.V.</strong>, Kesselstraße 5 – 7, 40221 Düsseldorf, Alemania</p>
            </div>
            <div className="Contacto-50">
                <ul className="Contacto-social-ul">
                    <li className="Contacto-social-li"><a href="https://www.facebook.com/trivagoLatam" target="_blank" rel="noopener noreferrer" className="footer__social-icon"><span className="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path className="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 5.6h-1.5s-.6.3-.6.5v1.6H15c-.1 1.2-.3 2.3-.3 2.3h-1.9v6.8H10V12H8.7V9.7h1.4V7.8c0-.3-.1-2.6 2.9-2.6h2.1c-.1 1-.1 2.1-.1 2.4z"></path></svg></span>Facebook</a></li>
                    <li className="Contato-social-li"><a href="https://twitter.com/trivago" target="_blank" rel="noopener noreferrer" className="footer__social-icon"><span className="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path className="svg-color--primary" fill="#fff" d="M13 2C7.5 2 3 6.5 3 12s4.5 10 10 10 10-4.5 10-10S18.5 2 13 2zm5.6 7.9v.4c0 4.4-3.6 7.9-8 7.9-1.6 0-3-.5-4.3-1.2h.4c1.4 0 2.7-.5 3.8-1.3h-.2c-1.2 0-2.2-.8-2.6-1.9h.5c.3 0 .5 0 .8-.1-.5-.1-1-.3-1.4-.7-.5-.5-.9-1.2-.9-2v-.1c.4.2.8.3 1.3.3-.5-.3-.8-.7-1.1-1.1V9c0-.5.1-1 .4-1.4.3.3.6.7.9.9l.2.2c.6.5 1.3.9 2.1 1.2.1 0 .2.1.3.1.3.1.7.2 1 .3.1 0 .2 0 .3.1.3 0 .6.1 1 .1-.1-.2-.1-.5-.1-.7 0-.4.1-.8.2-1.1.1-.3.3-.6.5-.8.1-.1.2-.2.3-.2.3-.3.7-.5 1.1-.6.3-.1.5-.1.7-.1.8 0 1.5.4 2.1.9.1 0 .2-.1.4-.1.5-.1 1-.3 1.4-.6 0 .1 0 .2-.1.2-.2.6-.6 1-1.1 1.3v.1c.5-.1 1-.2 1.5-.5-.4.6-.9 1.1-1.4 1.6z"></path></svg></span>Twitter</a></li>
                    <li className="Contacto-social-li"><a href="https://instagram.com/trivago/" target="_blank" rel="noopener noreferrer" className="footer__social-icon"><span className="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><circle className="svg-color--primary" fill="#FFF" cx="12" cy="12" r="2.25"></circle><path className="svg-color--primary" fill="#FFF" d="M17.49 9.27c-.03-.65-.14-1.01-.23-1.25-.12-.31-.27-.54-.51-.77-.23-.24-.46-.39-.77-.51-.24-.09-.6-.2-1.25-.23-.72-.03-.93-.04-2.73-.04s-2.01.01-2.73.04c-.65.03-1.01.14-1.25.23-.31.12-.54.27-.77.51-.24.23-.39.46-.51.77-.09.24-.2.6-.23 1.25-.03.72-.04.93-.04 2.73s.01 2.01.04 2.73c.03.65.14 1.01.23 1.25.12.31.27.54.51.77.23.24.46.39.77.51.24.09.6.2 1.25.23.72.03.93.04 2.73.04s2.01-.01 2.73-.04c.65-.03 1.01-.14 1.25-.23.31-.12.54-.27.77-.51.24-.23.39-.46.51-.77.09-.24.2-.6.23-1.25.03-.72.04-.93.04-2.73s-.01-2.01-.04-2.73zM12 15.46c-1.91 0-3.46-1.55-3.46-3.46S10.09 8.54 12 8.54s3.46 1.55 3.46 3.46-1.55 3.46-3.46 3.46zm3.6-6.25c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81z"></path><path className="svg-color--primary" fill="#FFF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.7 12.78c-.03.72-.14 1.21-.31 1.64-.17.44-.4.82-.78 1.19-.37.38-.75.61-1.19.78-.43.17-.92.28-1.64.31-.72.04-.95.05-2.78.05s-2.06-.01-2.78-.05c-.72-.03-1.21-.14-1.64-.31-.44-.17-.82-.4-1.19-.78-.38-.37-.61-.75-.78-1.19-.17-.43-.28-.92-.31-1.64-.04-.72-.05-.95-.05-2.78s.01-2.06.05-2.78c.03-.72.14-1.21.31-1.64.17-.44.4-.82.78-1.19.37-.38.75-.61 1.19-.78.43-.17.92-.28 1.64-.32.72-.03.95-.04 2.78-.04s2.06.01 2.78.04c.72.04 1.21.15 1.64.32.44.17.82.4 1.19.78.38.37.61.75.78 1.19.17.43.28.92.31 1.64.04.72.05.95.05 2.78s-.01 2.06-.05 2.78z"></path></svg></span>Instagram</a></li>
                    <li className="Contacto-social-li"><a href="https://www.linkedin.com/company/trivagonv/" target="_blank" rel="noopener noreferrer" className="footer__social-icon"><span className="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path className="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM8.7 17.4H6.2V9.7h2.6v7.7zM7.4 8.7C6.6 8.7 6 8.1 6 7.3 6 6.6 6.6 6 7.5 6s1.4.6 1.4 1.3c0 .8-.6 1.4-1.5 1.4zM18 17.4h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.4-.1.6v4.3h-2.6V9.7h2.6v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.4z"></path></svg></span>LinkedIn</a></li>
                </ul>
            </div>
        </div>

        <div className="Contacto-center">
            <div className="Contacto-separate" ></div>
        </div>

        <div className="Contacto-center">
            <div className="Contacto-33">
                <ul className="Contacto-help-ul">
                    <li ><a href="https://company.trivago.com" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Presentación</a></li>
                    <li ><a href="https://company.trivago.com/open-positions/?gh_src=21d449cf2" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Ofertas de empleo</a></li>
                    <li ><a href="https://company.trivago.com/press/?_gl=1*1csfdt*_gcl_aw*R0NMLjE1ODM1MjE1MjAuQ2owS0NRaUEySVR1QlJEa0FSSXNBTUs5UTdOaVVqb2VHTVM5Q3o5S19wdWoyajM3MjB2RTctd2F6M1JXZDdPWTFhMXc5aGVab3dYUW0yc2FBdFVYRUFMd193Y0I." className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Prensa</a></li>
                    <li ><a href="https://ir.trivago.com" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Investor Relations</a></li></ul>
            </div>
            <div className="Contacto-33">
                <ul className="Contacto-help-ul">
                    <li ><a href="https://www.trivago.com.ar/app" className="footer__link js-footer-link" target="_blank" rel="noopener noreferrer" title="Aplicación móvil (trivago App)">Aplicaciones móviles: donde sea que estés</a></li>
                    <li ><a href="https://studio.trivago.com/home" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">trivago Business Studio</a></li>
                    <li ><a href="https://magazine.trivago.com.ar" className="footer__link js-footer-link js-footer-link-blog" target="_blank" rel="noopener noreferrer">trivago Magazine</a></li></ul>
            </div>
            <div className="Contacto-33">
                <ul className="Contacto-help-ul">
                    <li ><a href="https://support.trivago.com/hc/es-419" className="footer__link js-footer-link" target="_blank" rel="help nofollow noopener noreferrer">Ayuda</a></li>
                    <li ><a href="https://support.trivago.com/hc/es-419/sections/360000014707" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">¿Cómo funciona trivago?</a></li>
                    <li ><a href="https://www.trivago.com.ar/terminos-y-condiciones" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Términos y condiciones</a></li>
                    <li ><a href="https://www.trivago.com.ar/informacion-legal" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Información legal</a></li>
                    <li ><a href="https://www.trivago.com.ar/politica-de-privacidad" className="footer__link js-footer-link" target="_blank" rel="nofollow noopener noreferrer">Aviso de privacidad</a></li>
                    <li ><a href="https://www.trivago.com.ar/site_map" className="footer__link">Mapa del sitio</a></li>
                </ul>
            </div>

        </div>


    </div>
)

export default Contacto;