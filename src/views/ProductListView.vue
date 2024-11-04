<template>
    <div>
      <h2>Gestión de Productos</h2>
      <v-btn color="primary" @click="goToAddProduct">Agregar Producto</v-btn>
      <v-data-table
        :headers="headers"
        :items="products"
        class="elevation-1"
      >
        <template #item.imageUrl="{ item }">
          <v-img :src="item.imageUrl" alt="Imagen del producto" max-height="100" max-width="100"></v-img>
        </template>
        <template #item.actions="{ item }">
          <v-btn small @click="editProduct(item.id)">Editar</v-btn>
          <v-btn small color="red" @click="deleteProductHandler(item.id)">Eliminar</v-btn>
        </template>
      </v-data-table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getProducts, deleteProduct } from '@/services/productService';
  
  const products = ref([]);
  const router = useRouter();
  const headers = [
    { text: 'ID', value: 'id' },
    { text: 'Nombre', value: 'name' },
    { text: 'Descripción', value: 'description' },
    { text: 'Precio', value: 'price' },
    { text: 'Marca', value: 'brand' },
    { text: 'Stock', value: 'stock' },
    { text: 'Categoría', value: 'category' },
    { text: 'Imagen', value: 'imageUrl' }, // Añadir el campo de imagen
    { text: 'Acciones', value: 'actions', sortable: false },
  ];
  
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      products.value = response.data.message; // Ajusta según la estructura de tu respuesta
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const goToAddProduct = () => {
    router.push({ name: 'ProductForm', params: { id: 'new' } });
  };
  
  const editProduct = (productId) => {
    router.push({ name: 'ProductForm', params: { id: productId } });
  };
  
  const deleteProductHandler = async (productId) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await deleteProduct(productId);
        fetchProducts(); // Actualiza la lista de productos
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };
  
  onMounted(fetchProducts);
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>