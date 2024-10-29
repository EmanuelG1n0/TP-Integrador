<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <b-row>
      <b-col cols="4" v-for="product in products" :key="product.id">
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
    products.value = response.data.message; // Accede a message en lugar de data directamente
  } catch (error) {
    console.error(error);
    alert('Error al obtener los productos.');
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>