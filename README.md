## Creo un proyecto en blanco con React para realizar un Test
## Landing Page de Trivago para empresa Darwoft

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Librerías agregadas.
- "bootstrap": "^4.4.1",
- "moment": "^2.24.0",
- "react-helmet": "^5.2.1",
- "react-autosuggest": "^9.4.3",
- "react-select": "^3.0.8",
- "react-tabs": "^3.1.0",
- "axios": "^0.19.2",
- "react-router-dom": "^5.1.2",

## JSON de ejemplos
Los mismos fueron publicados en hosting propios para simular API.
( blog.json, types.json, ofertas-destinos.json, ofertas-destacadas.json, buscador.json, resultados.json )
 
- En src/services pueden cambiar la dirección de la API que apunta a hosting personal

## Datos extras.
- Se trabajó sobre la pantalla principal, mas pantalla con resultados. 
- Los styles son parecidos a los propuestos.
- Las consltas a archivos JSON se hacen de forma remota a el dominio biott.ml para simular API.
- Se intentó de trabajar los Styles para el responsivo suponiendo detalles a terminar.
- No se realizó carrousel en las ofertas.
- La pantalla de resultado de búsqueda muestra un aproximado a lo que podría ser .
- Gracias por la oportunidad.

## Estructura de archivos.
- /json-files : los archivos utilizados para las consultas a server remoto.
- /public : propio del React. se trabajó solamente en el index.html para agregar bootstrap.
- /src: Todo el trabajo realizado en React.
- /src/components : Todos los componentes separado en sus respectivos folders para ordernarlos.
- /src/components/lib : Todos los compoenentes que podrían llegar a ser utilizado o son utilizados entre los demas compoenentes.
- /images : Imagen svg de la landing page.
- /pages : Las paginas que se encuentran afectadas al Route.
- /srvices: Clases de conexión hacia las consultas REST