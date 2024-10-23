<template>
  <div>
    <h2>Product Catalog</h2>
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

const products = ref([]);

onMounted(async () => {
  const response = await axios.get('/api/products');
  products.value = response.data;
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>
