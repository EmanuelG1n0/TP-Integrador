<template>
  <div class="container mt-5">
    <div class="title-container text-center mb-4">
      <h2 class="display-4">Catálogo de Productos</h2>
    </div>
    <b-row>
      <b-col cols="12" md="4" v-for="product in products" :key="product.id" class="mb-4">
        <ProductCard
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :brand="product.brand"
        />
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
  try {
    const response = await axios.get('http://localhost:8001/app/products/');
    products.value = response.data.message; 
  } catch (error) {
    console.error(error);
    alert('Error al obtener los productos.');
  }
});
</script>

<style scoped>
.title-container {
  margin: 20px 0;
}

h2 {
  margin: 0;
}
</style>