import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from '@/store/auth'; // Asegúrate de importar tu tienda de autenticación

// Importa los estilos de Vuetify
import 'vuetify/styles';

// Importa Vuetify y las configuraciones necesarias
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'; // Asegúrate de tener instalado @mdi/font

// Configuración de Vuetify
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        primary: '#ec1b5a',
        secondary: '#3483fa',
        accent: '#00a650',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50',
      },
    },
  },
});

// Importa tus estilos personalizados después de Vuetify
import '@/assets/style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(vuetify);

// Restaurar el token desde localStorage si existe
const authStore = useAuthStore();
const token = localStorage.getItem('authToken');
if (token) {
  authStore.login(token).catch(() => {
    // Si hay un error al restaurar la sesión, limpiar el token
    localStorage.removeItem('authToken');
  });
}

app.mount('#app');