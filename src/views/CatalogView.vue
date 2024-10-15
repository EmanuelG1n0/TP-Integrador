<template>
  <div>
    <main>
      <h2>Catálogo de Productos</h2>
      <div v-if="products.length === 0">Cargando productos...</div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
          <button @click="addToCart(product)">Añadir al Carrito</button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  components: {
    Footer,
    NavBar
  },
  setup() {
    const products = ref([]);
    const API_URL = 'https://mockapi.io/your-api-endpoint/products';

    onMounted(async () => {
      try {
        const response = await axios.get(API_URL);
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products', error);
      }
    });

    const addToCart = (product) => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Producto añadido al carrito');
    };

    return { products, addToCart };
  }
};
</script>

<style scoped>

</style>