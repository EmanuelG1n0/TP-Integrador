<template>
    <div>
      <b-table :items="orders" :fields="fields" responsive="sm">
        <template #cell(products)="data">
          <ul>
            <li v-for="product in JSON.parse(data.item.products)" :key="product.ProductId">
              Producto: {{ productNames[product.ProductId] || 'Cargando...' }}, Cantidad: {{ product.quantity }}, Precio: ${{ product.price }}
            </li>
          </ul>
        </template>
        <template #cell(createdAt)="data">
          {{ new Date(data.item.createdAt).toLocaleString() }}
        </template>
        <template #cell(updatedAt)="data">
          {{ new Date(data.item.updatedAt).toLocaleString() }}
        </template>
      </b-table>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    orders: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    productNames: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>