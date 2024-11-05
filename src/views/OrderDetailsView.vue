<template>
  <div>
    <h2>Detalles de la Orden #{{ order.id }}</h2>
    <p>Fecha: {{ new Date(order.createdAt).toLocaleString() }}</p>
    <p>Total: ${{ order.totalPrice }}</p>
    <h3>Productos:</h3>
    <ul>
      <li v-for="item in order.products" :key="item.productId">
        {{ item.productName }} - Cantidad: {{ item.quantity }} - Precio: ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const order = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/orders/${route.params.id}`);
    order.value = response.data.order;
  } catch (error) {
    console.error('Error al obtener los detalles de la orden:', error);
    alert('Error al obtener los detalles de la orden.');
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>