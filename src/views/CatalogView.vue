<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <b-row>
      <b-col cols="4" v-for="product in products" :key="product.id">
        <ProductCard 
        :product="product" 
        @add-to-cart="addToCart" 
        />
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();
const userId = authStore.userId;
let cartId = authStore.cartId; // Cambiado a let
const products = ref([]);

const addToCart = async (product) => {
  if (!authStore.isAuthenticated) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  try {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.id,
      quantity: 1 // Puedes ajustar la cantidad según sea necesario
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }
};

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