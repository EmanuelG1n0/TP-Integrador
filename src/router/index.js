import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import CatalogView from '../views/CatalogView.vue';
import CartView from '../views/CartView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/register', name: 'Register', component: RegisterView,  meta: { requiresAuth: true }},
  { path: '/login', name: 'Login', component: LoginView,  meta: { requiresAuth: true }},
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/cart', name: 'Cart', component: CartView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('user')) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
