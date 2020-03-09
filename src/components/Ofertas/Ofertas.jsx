/**
 * Componente con las ofertas mas descatacads en un carrousel
 */
import * as React from 'react';
import './Ofertas.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OfertasCiudadesDestacadas from './OfertasCiudadesDestacadas';
import OfertasPrincipalesDestinos from './OfertasPrincipalesDestinos';

const Ofertas = () => (
    <div className="Ofertas-container">
        <div className="Ofertas-title">
        <div className="App-title">¡Estás a un clic de los principales destinos!</div>
        </div>
        <div className="Ofertas-tabs">
            <Tabs>
                <TabList>
                    <Tab>Ciudades destacadas</Tab>
                    <Tab>Principales destinos</Tab>
                </TabList>

                <TabPanel>
                    <OfertasCiudadesDestacadas />
                </TabPanel>
                <TabPanel>
                    <OfertasPrincipalesDestinos />
                </TabPanel>
            </Tabs>

        </div>
    </div>
)

export default Ofertas;