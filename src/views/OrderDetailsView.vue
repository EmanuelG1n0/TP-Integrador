<template>
<<<<<<< HEAD
  <div class="d-flex justify-content-center align-items-center ">
    <div class="order-details border p-4 bg-light rounded shadow" style="width: 90%; max-width: 800px;">
      <h2 class="text-center">Detalles de la Orden #{{ order.id }}</h2>
      <p><strong>Fecha:</strong> {{ order.date }}</p>
      <p><strong>Total:</strong> ${{ order.total }}</p>
      <!-- Lista de productos -->
      <b-table :items="order.items" :fields="['product', 'quantity', 'price']"></b-table>
    </div>
=======
  <div>
    <h2>Mis Órdenes</h2>
    <div v-if="orders.length">
      <v-row>
        <v-col
          v-for="order in orders"
          :key="order.id"
          cols="12"
          md="6"
        >
          <OrderCard :order="order" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <p>No tienes órdenes.</p>
    </div>
>>>>>>> EmanuelG1n0
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
<<<<<<< HEAD
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
=======
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import OrderCard from '@/components/OrderCard.vue';

const authStore = useAuthStore();
const userId = authStore.userId;
const orders = ref([]);

const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/orders/user/${userId}`);
    orders.value = response.data.orders;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    alert('Error al obtener las órdenes.');
  }
};

onMounted(fetchOrders);
</script>

<style scoped>
/* Tus estilos aquí */
</style>
>>>>>>> EmanuelG1n0
