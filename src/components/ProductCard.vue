<template>
  <v-card>
    <v-img :src="product.imageUrl" :alt="product.name" class="product-image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      <p><strong>Marca:</strong> {{ product.brand }}</p>
      <p><strong>Precio:</strong> ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="handleAddToCart">Agregar al Carrito</v-btn>
      <v-btn color="secondary" @click="viewDetails">Ver Detalles</v-btn>
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
  router.push({ name: 'ProductDetails', params: { id: props.product.id } });
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>