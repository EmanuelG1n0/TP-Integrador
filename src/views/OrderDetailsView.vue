<template>
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
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import OrderCard from '@/components/OrderCard.vue';

const authStore = useAuthStore();
const userId = ref(authStore.userId);
const orders = ref([]);

const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/orders/user/${userId.value}`);
    orders.value = response.data.orders;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    alert('Error al obtener las órdenes.');
  }
};

onMounted(() => {
  if (userId.value) {
    fetchOrders();
  } else {
    watch(
      () => authStore.userId,
      (newUserId) => {
        if (newUserId) {
          userId.value = newUserId;
          fetchOrders();
        }
      }
    );
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>