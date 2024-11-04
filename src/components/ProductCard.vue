<template>
  <b-card>
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <h5>{{ product.name }}</h5>
    <p><strong>{{ product.description }}</strong></p>
    <p><strong>Marca:</strong> {{ product.brand }}</p>
    <p><strong>Precio:</strong> ${{ product.price }}</p>
    <b-button @click="handleAddToCart" variant="primary">Agregar al Carrito</b-button>
    <b-button @click="viewProductDetails" variant="secondary">Ver Producto</b-button>
  </b-card>
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

const viewProductDetails = () => {
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