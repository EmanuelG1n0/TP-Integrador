<template>
  <div>
    <h2>Mis Órdenes</h2>
    <div v-if="orders.length">
      <OrdersTable :orders="orders" :fields="fields" :productNames="productNames" />
    </div>
    <div v-else>
      <p>No tienes órdenes.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import OrdersTable from '@/components/OrdersTable.vue';

const authStore = useAuthStore();
const userId = authStore.userId;
const orders = ref([]);
const productNames = ref({});

const fields = [
  { key: 'id', label: 'ID de Orden' },
  { key: 'delivery_address', label: 'Dirección de Entrega' },
  { key: 'city', label: 'Ciudad' },
  { key: 'state', label: 'Estado' },
  { key: 'shipping', label: 'Envío' },
  { key: 'totalprice', label: 'Precio Total' },
  { key: 'status', label: 'Estado' },
  { key: 'createdAt', label: 'Fecha de Creación' },
  { key: 'updatedAt', label: 'Última Actualización' },
  { key: 'products', label: 'Productos' }
];

const fetchProductName = async (productId) => {
  if (!productNames.value[productId]) {
    try {
      const response = await axios.get(`http://localhost:8001/app/products/${productId}`);
      productNames.value[productId] = response.data.message.name;
    } catch (error) {
      console.error(`Error al obtener el nombre del producto con ID ${productId}:`, error);
    }
  }
};

const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/orders/user/${userId}`);
    orders.value = response.data.orders;

    // Fetch product names for all products in the orders
    for (const order of orders.value) {
      const products = JSON.parse(order.products);
      for (const product of products) {
        await fetchProductName(product.ProductId);
      }
    }
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