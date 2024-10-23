import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import vuetify from './plugins/vuetify';
import '@/assets/style.css';
import { createPinia } from 'pinia'; // Correcto, aquí lo estás creando.

const pinia = createPinia(); // Creación de pinia.
const app = createApp(App);

app.use(router);
app.use(pinia); // Correcto, aquí ya usas el pinia creado.
app.use(BootstrapVue3);
app.use(vuetify);

app.mount('#app');
