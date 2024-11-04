<template>
  <div>
    <h2>{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</h2>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        label="Nombre"
        v-model="product.name"
        required
      ></v-text-field>
      <v-textarea
        label="Descripción"
        v-model="product.description"
        required
      ></v-textarea>
      <v-text-field
        label="Precio"
        type="number"
        v-model="product.price"
        required
      ></v-text-field>
      <v-text-field
        label="Stock"
        type="number"
        v-model="product.stock"
        required
      ></v-text-field>
      <v-text-field
        label="Categoría"
        v-model="product.category"
        required
      ></v-text-field>
      <v-text-field
        label="URL de la Imagen"
        v-model="product.imageUrl"
        required
      ></v-text-field>
      <v-btn color="primary" type="submit">{{ isEditing ? 'Actualizar' : 'Agregar' }}</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProduct, createProduct, updateProduct } from '@/services/productService';

const route = useRoute();
const router = useRouter();
const product = ref({
  name: '',
  description: '',
  price: 0,
  stock: 0,
  category: '',
  imageUrl: '', // Añadir campo de URL de la imagen
});
const isEditing = computed(() => route.params.id !== 'new');
const fetchProduct = async () => {
  if (isEditing.value) {
    try {
      const response = await getProduct(route.params.id);
      product.value = response; // Ajusta según la estructura de tu respuesta
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }
};
const submitForm = async () => {
  try {
    if (isEditing.value) {
      await updateProduct(route.params.id, product.value);
      alert('Producto actualizado con éxito.');
    } else {
      await createProduct(product.value);
      alert('Producto agregado con éxito.');
    }
    router.push({ name: 'ProductList' });
  } catch (error) {
    console.error('Error saving product:', error);
    alert('Error al guardar el producto. Por favor, intente nuevamente.');
  }
};
onMounted(fetchProduct);
</script>

<style scoped>
/* Tus estilos aquí */
</style>