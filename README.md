# GitHub Challenge

## Descripción

Este proyecto es un challenge de una aplicación web que permite a los usuarios buscar y listar usuarios de GitHub, marcar usuarios como favoritos, ver detalles de cada usuario y ver los favoritos. Utilicé Next.js para el enrutamiento y la generación de páginas, y React para la gestión de componentes y estado. Utilicé Css modules.

## Características

- **Búsqueda de usuarios**: Permite a los usuarios buscar cualquier usuario de GitHub utilizando el nombre de usuario.
- **Paginación**: Carga usuarios adicionales al desplazarse hacia abajo en la página.
- **Favoritos**: Permite marcar usuarios como favoritos y visualizar estos favoritos.
- **Detalles del usuario**: Muestra detalles del perfil de un usuario, incluidos repositorios, seguidores y biografía.

## Tecnologías Utilizadas
Intenté utilizar la menor cantidad de librerias posibles, por ej, utilicé custom hooks para las peticiones a la API, en vez de api react router, o context en vez de react redux, o zustand. Al igual que css modules y el infinite scroll.


- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que agrega tipos estáticos.
- [CSS Modules](https://github.com/css-modules/css-modules) - Estilos locales para componentes.
- [Jest](https://jestjs.io/es-ES/) - Framework de Testing para Javascript

## Instalación

Para instalar y ejecutar la aplicación en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu_usuario/nombre_del_repositorio.git
   cd nombre_del_repositorio
2. **Instala las dependencias**:

    npm install
3. **Configura el archivo de entorno**:
    Crea un archivo .env.local en la raíz del proyecto y añade las siguientes variables de entorno (ajusta según sea necesario):
        NEXT_PUBLIC_GITHUB_API_URL=https://api.github.com

3. **Ejecuta la aplicación**:
    npm run dev

La aplicación estará disponible en http://localhost:3000.

## Uso

-Buscar usuarios: En la página principal, ingresa el nombre de usuario de GitHub en la barra de búsqueda y presiona "Enter". Se mostrarán los resultados.

-Marcar como favorito: Haz clic en el ícono de estrella junto al nombre del usuario para agregarlo a tus favoritos. El ícono cambiará para indicar si el usuario está marcado como favorito.

-Ver detalles del usuario: Haz clic en el nombre de usuario para ver más detalles, incluidos su biografía, repositorios, seguidores y a quién sigue.

-Carga de más usuarios: Desplázate hacia abajo en la página para cargar más usuarios de GitHub automáticamente.

## Tests
Se incluye un test unitario para la api que se ejecuta con npm run test