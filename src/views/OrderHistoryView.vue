<template>
    <div>
      <h2>Historial de Órdenes</h2>
      <b-table :items="orders" :fields="fields">
        <template #cell(details)="data">
          <b-button @click="viewOrderDetails(data.item.id)">Ver Detalles</b-button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '@/store/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  const orders = ref([]);
  const fields = ['id', 'date', 'total', 'details'];
  
  onMounted(async () => {
    try {
      const response = await axios.get('/api/orders');
      orders.value = response.data;
    } catch (error) {
      console.error(error);
      alert('Error al obtener el historial de órdenes.');
    }
  });
  
  const viewOrderDetails = (orderId) => {
    router.push({ name: 'OrderDetails', params: { id: orderId } });
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  