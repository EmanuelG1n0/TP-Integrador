<template>
  <b-card>
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <h5>{{ product.name }}</h5>
    <p>Precio: ${{ product.price }}</p>
    <p>Cantidad: {{ quantity }}</p>
  </b-card>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>

</style>