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
          <v-card @click="openOrderDialog(order)">
            <v-card-title>Orden ID: {{ order.id }}</v-card-title>
            <v-card-subtitle>Estado: {{ order.status }}</v-card-subtitle>
            <v-card-text>
              <p><strong>Precio Total:</strong> ${{ order.totalprice }}</p>
              <p><strong>Fecha de Creación:</strong> {{ new Date(order.createdAt).toLocaleString() }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <p>No tienes órdenes.</p>
    </div>

    <!-- Dialogo para mostrar detalles de la orden -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Orden ID: {{ selectedOrder.id }}</v-card-title>
        <v-card-subtitle>Estado: {{ selectedOrder.status }}</v-card-subtitle>
        <v-card-text>
          <p><strong>Dirección de Entrega:</strong> {{ selectedOrder.delivery_address }}</p>
          <p><strong>Ciudad:</strong> {{ selectedOrder.city }}</p>
          <p><strong>Estado:</strong> {{ selectedOrder.state }}</p>
          <p><strong>Envío:</strong> ${{ selectedOrder.shipping }}</p>
          <p><strong>Precio Total:</strong> ${{ selectedOrder.totalprice }}</p>
          <p><strong>Fecha de Creación:</strong> {{ new Date(selectedOrder.createdAt).toLocaleString() }}</p>
          <p><strong>Última Actualización:</strong> {{ new Date(selectedOrder.updatedAt).toLocaleString() }}</p>
          <div>
            <strong>Productos:</strong>
            <ul>
              <li v-for="product in parsedProducts" :key="product.ProductId">
                Nombre de Producto: {{ productNames[product.ProductId] || 'Cargando...' }}, Cantidad: {{ product.quantity }}, Precio: ${{ product.price }}
              </li>
            </ul>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import OrderCard from '@/components/OrderCard.vue';

const authStore = useAuthStore();
const userId = ref(authStore.userId);
const orders = ref([]);
const dialog = ref(false);
const selectedOrder = ref({});
const productNames = ref({});

const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/orders/user/${userId.value}`);
    orders.value = response.data.orders;
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    alert('Error al obtener las órdenes.');
  }
};

const openOrderDialog = async (order) => {
  selectedOrder.value = order;
  await fetchProductNames();
  dialog.value = true;
};

const parsedProducts = computed(() => JSON.parse(selectedOrder.value.products));

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

const fetchProductNames = async () => {
  for (const product of parsedProducts.value) {
    await fetchProductName(product.ProductId);
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
