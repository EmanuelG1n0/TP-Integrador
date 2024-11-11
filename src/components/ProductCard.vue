<template>
  <v-card class="product-card">
    <v-img :src="product.imageUrl" :alt="product.name" class="product-image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      <p><strong>Marca:</strong> {{ product.brand }}</p>
      <p><strong>Precio:</strong> ${{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
    </v-card-text>
    <v-card-actions class="action-buttons">
      <v-btn :disabled="product.stock === 0" color="white" @click="handleAddToCart">Agregar al Carrito</v-btn>
      <v-btn color="white" @click="viewDetails" class="detalle">Ver Detalles</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['add-to-cart']);
const router = useRouter();
const handleAddToCart = () => {
  emit('add-to-cart', props.product);
};
const viewDetails = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px; 
}

.v-btn {
  width: 100%;
}
.detalle{
  width: 80%;
}
</style>
