<template>
  <div class="orders-container">
    <h2 class="title">Mis Órdenes</h2>

    <!-- Indicador de carga mientras se obtienen las órdenes -->
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      size="64"
      class="mx-auto"
    ></v-progress-circular>

    <div v-else>
      <!-- Si no hay órdenes, mostrar mensaje -->
      <div v-if="orders.length === 0" class="no-orders">
        <v-alert type="info" class="my-3">
          No tienes órdenes.
        </v-alert>
      </div>

      <!-- Mostrar las órdenes si existen -->
      <v-row v-else class="orders-list">
        <v-col
          v-for="order in orders"
          :key="order.id"
          cols="12"
          md="8"
          class="order-item"
        >
          <OrderCard :order="order" />
        </v-col>
      </v-row>
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
const loading = ref(true);  // Estado para manejar la carga

// Función para obtener las órdenes
const fetchOrders = async () => {
  loading.value = true;  // Iniciar el estado de carga

  try {
    const response = await axios.get(`http://localhost:8001/app/orders/user/${userId.value}`);
    orders.value = response.data.orders;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    alert('Error al obtener las órdenes.');
  } finally {
    loading.value = false;  // Terminar el estado de carga
  }
};

// Manejo del ciclo de vida: obtener órdenes después de montar el componente
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
.orders-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Esto asegura que el contenido esté centrado verticalmente */
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.no-orders {
  text-align: center;
}

.orders-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;  /* Espaciado entre las órdenes */
  width: 100%;
}

.order-item {
  display: flex;
  justify-content: center;
  width: 100%;
}

.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
