<template>
  <div>
    <h2>{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</h2>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Nombre">
        <b-form-input v-model="product.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Descripción">
        <b-form-textarea v-model="product.description" required></b-form-textarea>
      </b-form-group>
      <b-form-group label="Precio">
        <b-form-input type="number" v-model="product.price" required></b-form-input>
      </b-form-group>
      <!-- Otros campos si es necesario -->
      <b-button type="submit" variant="primary">{{ isEditing ? 'Actualizar' : 'Agregar' }}</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const product = ref({
  name: '',
  description: '',
  price: 0,
  // Otros campos si es necesario
});
const isEditing = computed(() => route.params.id !== 'new');

onMounted(async () => {
  if (isEditing.value) {
    try {
      const response = await axios.get(`/api/products/${route.params.id}`);
      product.value = response.data;
    } catch (error) {
      console.error(error);
      alert('Error al obtener el producto.');
    }
  }
});

const submitForm = async () => {
  try {
    if (isEditing.value) {
      await axios.put(`/api/products/${route.params.id}`, product.value);
      alert('Producto actualizado con éxito.');
    } else {
      await axios.post('/api/products', product.value);
      alert('Producto agregado con éxito.');
    }
    router.push({ name: 'AdminDashboard' });
  } catch (error) {
    console.error(error);
    alert('Error al guardar el producto.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
