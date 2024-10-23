<template>
    <div>
      <h3>Gestión de Productos</h3>
      <b-button @click="goToAddProduct">Agregar Producto</b-button>
      <b-table :items="products" :fields="fields">
        <template #cell(actions)="data">
          <b-button size="sm" @click="editProduct(data.item.id)">Editar</b-button>
          <b-button size="sm" variant="danger" @click="deleteProduct(data.item.id)">Eliminar</b-button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const products = ref([]);
  const router = useRouter();
  const fields = ['id', 'name', 'price', 'actions'];
  
  onMounted(async () => {
    try {
      const response = await axios.get('/api/products');
      products.value = response.data;
    } catch (error) {
      console.error(error);
      alert('Error al obtener los productos.');
    }
  });
  
  const goToAddProduct = () => {
    router.push({ name: 'ProductForm', params: { id: 'new' } });
  };
  
  const editProduct = (productId) => {
    router.push({ name: 'ProductForm', params: { id: productId } });
  };
  
  const deleteProduct = async (productId) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await axios.delete(`/api/products/${productId}`);
        products.value = products.value.filter(p => p.id !== productId);
        alert('Producto eliminado con éxito.');
      } catch (error) {
        console.error(error);
        alert('Error al eliminar el producto.');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  