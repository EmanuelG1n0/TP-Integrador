<template>
  <div>
    <h2>{{ product.name }}</h2>
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <p>{{ product.description }}</p>
    <p><strong>Precio:</strong> ${{ product.price }}</p>
    <b-button @click="addToCart">Agregar al Carrito</b-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const route = useRoute();
const router = useRouter();
const product = ref({});
const authStore = useAuthStore();
const userId = authStore.userId;
let cartId = authStore.cartId;

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/products/${route.params.id}`);
    product.value = response.data.message; // Asegúrate de acceder a la propiedad correcta en la respuesta
  } catch (error) {
    console.error('Error al obtener los detalles del producto:', error);
  }
});

const addToCart = async () => {
  if (!userId) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  try {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.value.id,
      quantity: 1 // Puedes ajustar la cantidad según sea necesario
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>