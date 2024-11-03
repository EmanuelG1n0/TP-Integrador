<template>
  <div class="d-flex justify-content-center align-items-center ">
    <div class="order-details border p-4 bg-light rounded shadow" style="width: 90%; max-width: 800px;">
      <h2 class="text-center">Detalles de la Orden #{{ order.id }}</h2>
      <p><strong>Fecha:</strong> {{ order.date }}</p>
      <p><strong>Total:</strong> ${{ order.total }}</p>
      <!-- Lista de productos -->
      <b-table :items="order.items" :fields="['product', 'quantity', 'price']"></b-table>
    </div>
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
    const response = await axios.get(`/api/orders/${route.params.id}`);
    order.value = response.data;
  } catch (error) {
    console.error(error);
    alert('Error al obtener los detalles de la orden.');
  }
});
</script>

<style scoped>
.order-details {
  margin-top: 50px; 
}
</style>
