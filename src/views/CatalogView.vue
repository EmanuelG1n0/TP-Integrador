<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <b-row>
      <b-col cols="4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </b-col>
    </b-row>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { getData } from '../services/api';

const products = ref([]);
const response = await fetch(`${process.env.VUE_APP_API_URL}/products`);

onMounted(async () => {
  try {
    const response = await axios.get('/api/products');
    products.value = response.data;
  } catch (error) {
    console.error(error);
    alert('Error al obtener los productos.');
  }
});
</script>
<style scoped>
/* Tus estilos aquí */
</style>