<template>
  <b-card :title="product.name" img-src="product.image" img-alt="product.name" img-top>
    <b-card-text>
      {{ product.description }}
    </b-card-text>
    <b-button @click="viewDetails">View Details</b-button>
  </b-card>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  product: Object,
});

const router = useRouter();

const viewDetails = () => {
  router.push({ name: 'ProductDetails', params: { id: props.product.id } });
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
