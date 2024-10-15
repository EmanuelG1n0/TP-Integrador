import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'; // Tus estilos personalizados

// Importar Vuetify y los estilos
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importar estilos globales de Vuetify
import * as components from 'vuetify/components'; // Importar componentes de Vuetify
import * as directives from 'vuetify/directives'; // Importar directivas de Vuetify

// Crear Vuetify con componentes y directivas
const vuetify = createVuetify({
  components,
  directives,
});

// Crear una única instancia de la aplicación y usar tanto router como vuetify
const app = createApp(App);

app.use(router); // Usar el router
app.use(vuetify); // Usar Vuetify

app.mount('#app'); // Montar la app en el div con id "app"
