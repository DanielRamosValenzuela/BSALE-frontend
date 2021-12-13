Herramientas utilizadas:
Webpack, fontawsome, axios

index.js
Es el componente principal para desplegar los componentes de mi aplicación, es donde defino las rutas de las screens, el Navbar (barra de indice con busqueda incluida) y Aside con la lista de categorías y los renderizo.

Carpeta screens
Tenemos solo tres archivos JS en donde el HomseScreen y ProductById son exactamanete lo mismo solo que ProductById consume un api de categorías y HomseScreen un API en donde muestra todos los productos ordenados por categoría. El tercer archivo JS es Error404 por si el usuario coloca una ruta que no existe.

Carpeta components
Es donde tenemos el Navbar y el Aside. El Navbar su principal función es que consuma la API de búsqueda en el backend y así despliegue todos los productos cercanos a la palabra que se está buscando, el Aside que se abre con el botón de hamburguesa despliega la lista de categorías dadas por la BD.

Carpeta apis
en esta carpeta utilizo axios para hacer el fetch con las Apis que utilizo en el backend, solo cree tres en el cual getProducts despliega todos los productos y si enviamos un keyword este desplegara en base al keyword, getProductsById hace la búsqueda para desplegarlos por categoría y getCategory obtengo la lista de las categorías para el Aside.

config.js escribo la ruta que utilizo para conectarme con el backend.

utilis.js tengo funciones de loading y hideloading, además controlo las rutas con parseRequestUrl.
