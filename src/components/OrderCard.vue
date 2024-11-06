<template>
    <v-card>
      <v-card-title>Orden ID: {{ order.id }}</v-card-title>
      <v-card-subtitle>Estado: {{ order.status }}</v-card-subtitle>
      <v-card-text>
        <p><strong>Dirección de Entrega:</strong> {{ order.delivery_address }}</p>
        <p><strong>Ciudad:</strong> {{ order.city }}</p>
        <p><strong>Estado:</strong> {{ order.state }}</p>
        <p><strong>Envío:</strong> ${{ order.shipping }}</p>
        <p><strong>Precio Total:</strong> ${{ order.totalprice }}</p>
        <p><strong>Fecha de Creación:</strong> {{ new Date(order.createdAt).toLocaleString() }}</p>
        <p><strong>Última Actualización:</strong> {{ new Date(order.updatedAt).toLocaleString() }}</p>
        <div>
          <strong>Productos:</strong>
          <ul>
            <li v-for="product in parsedProducts" :key="product.ProductId">
              Nombre de Producto: {{ productNames[product.ProductId] || 'Cargando...' }}, Cantidad: {{ product.quantity }}, Precio: ${{ product.price }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  
  const props = defineProps({
    order: {
      type: Object,
      required: true
    }
  });
  
  const parsedProducts = computed(() => JSON.parse(props.order.products));
  const productNames = ref({});
  
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
  
  onMounted(fetchProductNames);
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>