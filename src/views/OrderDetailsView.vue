<template>
    <div>
      <h2>Detalles de la Orden #{{ order.id }}</h2>
      <p>Fecha: {{ order.date }}</p>
      <p>Total: {{ order.total }}</p>
      <!-- Lista de productos -->
      <b-table :items="order.items" :fields="['product', 'quantity', 'price']"></b-table>
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
  /* Tus estilos aquí */
  </style>
  