import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    redirect: '/about', // Redirige a About al cargar la aplicación
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // Otras rutas pueden ser añadidas aquí
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
