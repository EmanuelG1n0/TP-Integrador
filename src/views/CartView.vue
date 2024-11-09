<template>
  <div>
    <h1>Carrito de Compras</h1>
    <div v-if="cartItems.length">
      <v-row>
        <v-col
          cols="4"
          v-for="item in cartItems"
          :key="item.id"
        >
          <CartItem :product="item.Product" :quantity="item.quantity" :cartId="cartId" @remove-from-cart="removeFromCart" />
        </v-col>
      </v-row>
      <v-btn color="primary" @click="generateOrder">Realizar Orden</v-btn>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import CartItem from '@/components/CartItem.vue';

const authStore = useAuthStore();
const userId = ref(authStore.userId);
const cartItems = ref([]);
const cartId = ref(null);

const getCartItems = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/carts/${userId.value}`);
    cartItems.value = response.data.message.CartItems;
    cartId.value = response.data.message.id;
  } catch (error) {
    console.error('Error al obtener los ítems del carrito:', error);
  }
};

const removeFromCart = async (productId) => {
  try {
    await axios.post('http://localhost:8001/app/carts/remove', {
      cartId: cartId.value,
      productId: productId
    });
    await getCartItems();
    alert('Producto eliminado del carrito con éxito');
  } catch (error) {
    console.error('Error al eliminar el producto del carrito:', error);
    alert('Error al eliminar el producto del carrito.');
  }
};

const generateOrder = async () => {
  try {
    const response = await axios.post(`http://localhost:8001/app/carts/${userId.value}/generate-order`);
    alert('Orden generada con éxito');
    await getCartItems(); // Recargar los ítems del carrito después de generar la orden
  } catch (error) {
    console.error('Error al generar la orden:', error);
    alert('Error al generar la orden.');
  }
};

onMounted(() => {
  if (userId.value) {
    getCartItems();
  } else {
    watch(
      () => authStore.userId,
      (newUserId) => {
        if (newUserId) {
          userId.value = newUserId;
          getCartItems();
        }
      }
    );
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>