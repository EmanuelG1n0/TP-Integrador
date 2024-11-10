<template>
  <v-card class="product-card">
    <v-img :src="product.imageUrl" :alt="product.name" class="product-image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      <p><strong>Marca:</strong> {{ product.brand }}</p>
      <p><strong>Precio:</strong> ${{ product.price }}</p>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="handleAddToCart" class="responsive-btn">Agregar al Carrito</v-btn>
      <v-btn @click="viewDetails" class="responsive-btn">Ver Detalles</v-btn>
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
.product-card {
  max-width: 400px;
  width: 100%;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.v-card-title,
.v-card-text {
  text-align: center;
}

.v-card-actions {
  display: flex;
  flex-direction: column; /* Siempre los botones en columna */
  gap: 10px;
  align-items: center;
}

.v-btn {
  color: antiquewhite;
}

/* Responsive ajustes */
@media (max-width: 600px) {
  .product-card {
    max-width: 100%;
  }

  .product-image {
    height: 150px; /* Reduce la altura de la imagen en pantallas pequeñas */
  }

  .responsive-btn {
    min-width: 120px; /* Evita que los botones se encojan demasiado */
    font-size: 0.9rem; /* Ajuste de tamaño de fuente para pantallas pequeñas */
  }
}
</style>
