

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación compilada.

## Configuración de Vuetify

El proyecto utiliza Vuetify para los componentes de la interfaz de usuario. La configuración de Vuetify se encuentra en `src/plugins/vuetify.js`.

## Configuración del Router

El enrutamiento de la aplicación está configurado en `src/router/index.js`. Aquí se definen las rutas para las diferentes vistas de la aplicación.

## Gestión del Estado

La gestión del estado se realiza con Pinia. Los stores se encuentran en `src/store/`.

## Estilos

Los estilos globales y personalizados se encuentran en `src/assets/style.css`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:
1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
-------------------------------------------------------------------------------------------------
Instala las dependencias:
npm install

Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:

VUE_APP_API_URL=http://localhost:8001

Configura el servidor de desarrollo: Asegúrate de que el servidor backend esté corriendo en http://localhost:8001. Puedes encontrar el código del servidor backend en el directorio (https://github.com/RoloMessina/TP2_Final_E_Commerce)

Inicia el servidor de desarrollo:

npm run dev

Esto iniciará el servidor de desarrollo en http://localhost:8000.

Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

Esto iniciará el servidor de desarrollo en http://localhost:8000.

Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

TP-Integrador/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── style.css
│   ├── components/
│   │   ├── BannerCarousel.vue
│   │   ├── CartItem.vue
│   │   ├── Footer.vue
│   │   ├── NavBar.vue
│   │   ├── OrderCard.vue
│   │   ├── OrderTable.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductManagement.vue
│   │   ├── ProfileCard.vue
│   │   ├── RoleManagement.vue
│   │   └── UserManagement.vue
│   ├── plugins/
│   │   └── vuetify.js
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   ├── auth.js
│   │   ├── cart.js
│   ├── views/
│   │   ├── AboutView.vue
│   │   ├── AdminDashboardView.vue
│   │   ├── CartView.vue
│   │   ├── CatalogView.vue
│   │   ├── HomeView.vue
│   │   ├── LoginView.vue
│   │   ├── OrderDetailsView.vue
│   │   ├── OrderHistoryView.vue
│   │   ├── ProductDetailsView.vue
│   │   ├── ProductFormView.vue
│   │   ├── ProductListView.vue
│   │   ├── ProfileView.vue
│   │   ├── RegisterView.vue
│   │   └── UserManagement.vue
│   ├── App.vue
│   ├── main.js
│   └── plugins/
│       └── vuetify.js
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

Scripts Disponibles
En el archivo package.json, encontrarás los siguientes scripts:

npm run dev: Inicia el servidor de desarrollo.
npm run build: Compila la aplicación para producción.
npm run preview: Previsualiza la aplicación compilada.
Configuración de Vuetify
El proyecto utiliza Vuetify para los componentes de la interfaz de usuario. La configuración de Vuetify se encuentra en src/plugins/vuetify.js.

Configuración del Router
El enrutamiento de la aplicación está configurado en src/router/index.js. Aquí se definen las rutas para las diferentes vistas de la aplicación.

Gestión del Estado
La gestión del estado se realiza con Pinia. Los stores se encuentran en src/store/.

Estilos
Los estilos globales y personalizados se encuentran en src/assets/style.css.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:
Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

### **Notas Adicionales:**

1. **Estructura del Proyecto**:
   - Se ha actualizado la estructura del proyecto para reflejar los archivos y directorios actuales.

2. **Scripts Disponibles**:
   - Se ha añadido el script `npm run preview` para previsualizar la aplicación compilada.

3. **Secciones Adicionales**:
   - Se han añadido secciones para la configuración de Vuetify, el router, la gestión del estado y los estilos.
