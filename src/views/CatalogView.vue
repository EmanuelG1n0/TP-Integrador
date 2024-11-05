<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard
          :product="product"
          @add-to-cart="addToCart"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const userId = ref(authStore.userId); // Usamos ref para reactividad
let cartId = ref(authStore.cartId);
const products = ref([]);

const addToCart = async (product) => {
  if (!userId.value) {
    alert('Usuario no autenticado. Por favor, inicia sesión.');
    return;
  }
  try {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId.value}`);
    cartId.value = responseCart.data.message.id;
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId.value,
      productId: product.id,
      quantity: 1,
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
    products.value = response.data.message;
  } catch (error) {
    console.error(error);
    alert('Error al obtener los productos.');
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>