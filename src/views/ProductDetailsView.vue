<template>
  <div>
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
    <b-button @click="addToCart">Add to Cart</b-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/cart';
import axios from 'axios';

const route = useRoute();
const product = ref({});
const cartStore = useCartStore();

onMounted(async () => {
  const response = await axios.get(`/api/products/${route.params.id}`);
  product.value = response.data;
});

const addToCart = () => {
  cartStore.addProduct(product.value);
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
