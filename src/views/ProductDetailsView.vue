<template>
  <div class="product-details">
    <div class="product-images">
      <div class="image-container">
        <img :src="product.imageUrl" :alt="product.name" />
      </div>
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price"><strong>Precio:</strong> ${{ product.price }}</p>
      <p><strong>Marca:</strong> {{ product.brand }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <v-btn color="primary" @click="addToCart">Agregar al Carrito</v-btn>
    </div>
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

const getProductDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/products/${route.params.id}`);
    product.value = response.data.message; // Asegúrate de acceder a la propiedad correcta en la respuesta
  } catch (error) {
    console.error('Error al obtener los detalles del producto:', error);
    alert('Error al obtener los detalles del producto.');
  }
};

const getCartId = async () => {
  if (!cartId) {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
  }
};

const addToCart = async () => {
  if (!authStore.isAuthenticated) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  try {
    await getCartId();
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.value.id,
      quantity: 1,
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }
};

onMounted(getProductDetails);
</script>

<style scoped>
.product-details {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  padding: 20px;
  border-radius: 8px;
}
.product-images {
  flex: 1;
  min-width: 300px;
}
.image-container {
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.image-container img {
  width: 100%;
  height: auto;
}
.product-info {
  flex: 1;
  min-width: 300px;
}
.product-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.product-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.product-price {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
</style>