import { createRouter, createWebHistory } from 'vue-router';
import ProductForm from '../views/ProductForm.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Catalog from '../views/Catalog.vue';

const routes = [
  { path: '/product/add', component: ProductForm },
  { path: '/product/:id', component: ProductDetails },
  { path: '/catalog', component: Catalog },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;