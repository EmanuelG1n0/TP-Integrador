import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import CartView from '@/views/CartView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import OrderDetailsView from '@/views/OrderDetailsView.vue';
import ProductFormView from '@/views/ProductFormView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/catalog', name: 'Catalog', component: CatalogView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetailsView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/orders/:id', name: 'OrderDetails', component: OrderDetailsView },
  { path: '/product-form', name: 'ProductForm', component: ProductFormView },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
