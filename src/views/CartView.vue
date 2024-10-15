<template>
    <div>
      <Header />
      <main>
        <h2>Carrito de Compras</h2>
        <ul v-if="cart.length > 0">
          <li v-for="(item, index) in cart" :key="index">
            {{ item.name }} - ${{ item.price }}
            <button @click="removeFromCart(index)">Eliminar</button>
          </li>
        </ul>
        <p v-else>El carrito está vacío</p>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: { Header, Footer },
    setup() {
      const cart = ref([]);
  
      onMounted(() => {
        cart.value = JSON.parse(localStorage.getItem('cart')) || [];
      });
  
      const removeFromCart = (index) => {
        cart.value.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart.value));
      };
  
      return { cart, removeFromCart };
    }
  };
  </script>
  