# TP-Integrador

Este proyecto es una aplicación de E-Commerce desarrollada con Vue 3, Vuetify y Vite. La aplicación incluye funcionalidades para la gestión de productos, usuarios y roles, así como un carrito de compras y un historial de órdenes.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (versión 6 o superior)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto de manera local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/EmanuelG1n0/TP-Integrador
   cd TP-Integrador
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

   ```env
   VUE_APP_API_URL=http://localhost:8001
   ```

4. **Configura el servidor de desarrollo:**

   Asegúrate de que el servidor backend esté corriendo en `http://localhost:8001`. Puedes encontrar el código del servidor backend en el directorio `(https://github.com/RoloMessina/TP2_Final_E_Commerce)` 

5. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo en `http://localhost:8000`.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
TP-Integrador/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── style.css
│   ├── components/
│   │   ├── CartItem.vue
│   │   ├── Footer.vue
│   │   ├── NavBar.vue
│   │   └── ProductCard.vue
│   ├── plugins/
│   │   └── vuetify.js
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   ├── auth.js
│   │   ├── cart.js
│   │   └── index.js
│   ├── views/
│   │   ├── About.vue
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
```

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

Este proyecto está licenciado bajo la Licencia MIT. 
