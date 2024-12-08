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

const addToCart = async (product) => {
  if (product.stock <= 0) {
    alert('No puedes agregar productos con stock negativo o cero.');
    return;
  }

  try {
    await getCartId();
    const responseCartItems = await axios.get(`http://localhost:8001/app/carts/${cartId.value}`);
    const cartItems = responseCartItems.data.message.CartItems;
    const cartItem = cartItems.find(item => item.ProductId === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    if (currentQuantity + 1 > product.stock) {
      alert('No puedes agregar más productos de los que hay en stock.');
      return;
    }

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

const generateOrder = async () => {
  try {
    const response = await axios.post(`http://localhost:8001/app/carts/${userId.value}/generate-order`);
    alert('Orden generada con éxito');
    await getCartItems();
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