<template>
  <b-card>
    <h5>{{ name }}</h5>
    <p><strong>{{ description }}</strong></p>
    <p><strong>Marca:</strong> {{ brand }}</p>
    <p><strong>Precio:</strong> ${{ price }}</p>
  </b-card>
</template>

<script setup>
const props = defineProps({
  name: String,
  description: String,
  price: Number,
  brand: String
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>