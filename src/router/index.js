// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import CartView from '@/views/CartView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import OrderDetailsView from '@/views/OrderDetailsView.vue';
<<<<<<< HEAD
import ProductFormView from '@/views/ProductFormView.vue';
import AboutView  from '@/views/AboutView.vue';
=======
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import ProfileView from '../views/ProfileView.vue';
import { useAuthStore } from '@/store/auth';
>>>>>>> EmanuelG1n0

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetailsView, props: true},
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
<<<<<<< HEAD
  { path: '/orders/:id', name: 'OrderDetails', component: OrderDetailsView },
  { path: '/admin/products/:id', name: 'ProductForm', component: ProductFormView },
  { path: '/about', name: 'About', component: AboutView },

=======
  { path: '/orders', name: 'Orders', component: OrderDetailsView },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboardView, meta: { requiresAuth: true } },
>>>>>>> EmanuelG1n0
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;