<template>
  <div>
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
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Footer,
    NavBar
  },
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

<style scoped>

</style>