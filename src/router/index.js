// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import CartView from '@/views/CartView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import OrderDetailsView from '@/views/OrderDetailsView.vue';
import ProductFormView from '@/views/ProductFormView.vue';
import ProductListView from '@/views/ProductListView.vue';
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import UserManagement from '@/views/UserManagement.vue';
import { useAuthStore } from '@/store/auth';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetailsView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/orders/:id', name: 'OrderDetails', component: OrderDetailsView },
  { path: '/product-form/:id', name: 'ProductForm', component: ProductFormView, meta: { requiresAuth: true } },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboardView, meta: { requiresAuth: true } },
  { path: '/admin/products', name: 'ProductList', component: ProductListView, meta: { requiresAuth: true } },
  { path: '/admin/users', name: 'UserManagement', component: UserManagement, meta: { requiresAuth: true } },
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