<template>
  <b-card>
    <h5>{{ Item.ProductName }}</h5>
  </b-card>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>