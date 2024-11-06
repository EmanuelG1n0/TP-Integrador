<template>
<<<<<<< HEAD
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h1 class="display-4">Carrito de Compras</h1>
      <p class="lead text-muted">Aquí puedes ver los productos que has añadido.</p>
    </div>
    <div class="cart-container">
      <!-- Aquí puedes agregar más contenido relacionado con el carrito -->
      <div class="row">
        <div class="col-md-12">
          <div class="alert alert-info" role="alert">
            Tu carrito está vacío. ¡Añade productos para comenzar!
          </div>
        </div>
      </div>
=======
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
>>>>>>> EmanuelG1n0
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import CartItem from '@/components/CartItem.vue';

const authStore = useAuthStore();
const userId = authStore.userId;
const cartItems = ref([]);
const cartId = ref(null);

const getCartItems = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/carts/${userId}`);
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
    const response = await axios.post(`http://localhost:8001/app/carts/${userId}/generate-order`);
    alert('Orden generada con éxito');
  } catch (error) {
    console.error('Error al generar la orden:', error);
    alert('Error al generar la orden.');
  }
};

onMounted(async () => {
  await getCartItems();
});
</script>

<style scoped>
<<<<<<< HEAD
.cart-container {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #d3d3d3; /* Borde opcional */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra suave */
}
</style>
=======
/* Tus estilos aquí */
</style>
>>>>>>> EmanuelG1n0
