<template>
  <v-card>
    <v-img :src="product.imageUrl" :alt="product.name" class="product-image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle><strong>{{ product.description }}</strong></v-card-subtitle>
    <v-card-text>
      <p><strong>Precio:</strong> ${{ product.price }}</p>
      <p><strong>Cantidad:</strong> {{ quantity }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="removeFromCart">Eliminar</v-btn>
    </v-card-actions>
  </v-card>
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
  },
  cartId: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['remove-from-cart']);

const removeFromCart = () => {
  emit('remove-from-cart', props.product.id);
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>