// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import vuetify from './plugins/Vuetify'; 
import { useAuthStore } from '@/store/auth';
import '@/assets/style.css';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

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