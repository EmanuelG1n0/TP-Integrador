<template>
  <div>
    <h1>Carrito de Compras</h1>
    <div v-if="cartItems.length">
      <b-row>
        <b-col cols="4" v-for="item in cartItems" :key="item.id">
          <CartItem :product="item.Product" :quantity="item.quantity" />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CartItem from '@/components/CartItem.vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const userId = authStore.userId; 
const cartItems = ref([]);

const getCartItems = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartItems.value = response.data.message.CartItems; // Accede a CartItems en lugar de message directamente
  } catch (error) {
    console.error('Error al obtener los ítems del carrito:', error);
  }
};

onMounted(async () => {
  await getCartItems();
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>