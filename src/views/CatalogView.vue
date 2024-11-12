<template>
  <div>
    <h2>Catálogo de Productos</h2>
    <v-row>
      <v-col
        cols="4"
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
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const userId = authStore.userId;
let cartId = authStore.cartId; // Cambiado a let para permitir la reasignación
const products = ref([]);
const router = useRouter();

const getCartId = async () => {
  if (!cartId) {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
  }
};

const addToCart = async (product) => {
  if (!authStore.isAuthenticated) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  try {
    await getCartId();

    // Obtener la cantidad actual en el carrito
    const responseCartItems = await axios.get(`http://localhost:8001/app/carts/${cartId}`);
    const cartItems = responseCartItems.data.message.CartItems || [];
    const cartItem = cartItems.find(item => item.ProductId === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    // Verificar si la cantidad total no excede el stock disponible
    if (currentQuantity + 1 > product.stock) {
      alert('No puedes agregar más productos de los que hay en stock.');
      return;
    }

    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.id,
      quantity: 1,
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }

  try {
    await getCartId();

    // Obtener la cantidad actual en el carrito
    const responseCartItems = await axios.get(`http://localhost:8001/app/carts/${cartId}`);
    const cartItems = responseCartItems.data.message.CartItems;
    const cartItem = cartItems.find(item => item.ProductId === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    // Verificar si la cantidad total no excede el stock disponible
    if (currentQuantity + 1 > product.stock) {
      alert('No puedes agregar más productos de los que hay en stock.');
      return;
    }

    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
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
    products.value = response.data.message; // Accede a message en lugar de data directamente
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    alert('Error al obtener los productos.');
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>