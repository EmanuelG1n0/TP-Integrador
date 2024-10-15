import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import ProductForm from '../views/ProductForm.vue';
import ProductDetails from '../views/ProductDetails.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/product/add', component: ProductForm },
  { path: '/product/:id', component: ProductDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;