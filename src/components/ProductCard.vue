<template>
  <v-card class="product-card">
    <v-img :src="product.imageUrl" :alt="product.name" class="product-image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle><strong>{{ product.description }}</strong></v-card-subtitle>
    <v-card-text>
      <p><strong>Marca:</strong> {{ product.brand }}</p>
      <p><strong>Precio:</strong> ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="handleAddToCart">Agregar al Carrito</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['add-to-cart']);
const handleAddToCart = () => {
  emit('add-to-cart', props.product);
};
</script>

<style scoped>
.product-card {
  max-width: 100%;
  margin: 10px;
}
.product-image {
  max-width: 100%;
  height: auto;
}
</style>