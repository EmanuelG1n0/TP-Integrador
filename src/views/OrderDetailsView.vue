<template>
  <div>
    <h2 class="orders-title">Mis Órdenes</h2>

    <div v-if="orders.length">
      <v-row>
        <v-col
          v-for="order in orders"
          :key="order.id"
          cols="12"
          md="6"
        >
          <v-card @click="openOrderDialog(order)" class="order-card">
            <v-card-title class="order-card-title">Orden ID: {{ order.id }}</v-card-title>
            <v-card-subtitle class="order-card-subtitle">Estado: {{ order.status }}</v-card-subtitle>
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
      <v-card class="order-dialog">
        <v-card-title class="order-card-title">Orden ID: {{ selectedOrder.id }}</v-card-title>
        <v-card-subtitle class="order-card-subtitle">Estado: {{ selectedOrder.status }}</v-card-subtitle>
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
            <v-list dense>
              <v-list-item-group v-for="product in parsedProducts" :key="product.ProductId">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ productNames[product.ProductId] || 'Cargando...' }}</v-list-item-title>
                    <v-list-item-subtitle>Cantidad: {{ product.quantity }} | Precio: ${{ product.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
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
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

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
  }
});
</script>

<style scoped>
.orders-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.order-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 10px;
}

.order-card:hover {
  transform: scale(1.05);
}

.order-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.order-card-subtitle {
  font-size: 1rem;
  color: #888;
  text-align: center;
}

.order-card-text p {
  margin-bottom: 10px;
}

.order-dialog {
  padding: 20px;
  border-radius: 12px;
}

.order-dialog .order-card-title {
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
}

.order-dialog .order-card-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #888;
}

.boton {
  font-weight: bold;
  color: white !important;
}

@media (max-width: 600px) {
  .order-card {
    margin-bottom: 15px;
  }

  .order-card-title {
    font-size: 1rem;
  }

  .order-card-subtitle {
    font-size: 0.9rem;
  }

  .order-dialog .order-card-title {
    font-size: 1.2rem;
  }
}
</style>
