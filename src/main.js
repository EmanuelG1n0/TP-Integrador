import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import { createPinia } from 'pinia';
import vuetify from './plugins/Vuetify';
import 'vuetify/styles';
import '@/assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';


const pinia = createPinia(); // Creación de pinia.
const app = createApp(App);

app.use(router);
app.use(pinia); // Correcto, aquí ya usas el pinia creado.
app.use(BootstrapVue3);
app.use(vuetify);

app.mount('#app');


