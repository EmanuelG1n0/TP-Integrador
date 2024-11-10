<template>
    <div>
      <h2>Gestión de Productos</h2>
      <v-btn color="primary" @click="openAddProductDialog">Agregar Producto</v-btn>
      <v-data-table
        :headers="productHeaders"
        :items="products"
        class="elevation-1"
      >
        <template #item.imageUrl="{ item }">
          <v-img :src="item.imageUrl" alt="Imagen del producto" max-height="100" max-width="100"></v-img>
        </template>
        <template #item.actions="{ item }">
          <v-btn small @click="openEditProductDialog(item)">Editar</v-btn>
          <v-btn small color="red" @click="deleteProductHandler(item.id)">Eliminar</v-btn>
        </template>
      </v-data-table>
  
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="editedProduct.name" label="Nombre" required></v-text-field>
              <v-textarea v-model="editedProduct.description" label="Descripción" required></v-textarea>
              <v-text-field v-model="editedProduct.price" label="Precio" type="number" required></v-text-field>
              <v-text-field v-model="editedProduct.stock" label="Stock" type="number" required></v-text-field>
              <v-text-field v-model="editedProduct.category" label="Categoría" required></v-text-field>
              <v-text-field v-model="editedProduct.brand" label="Marca" required></v-text-field>
              <v-text-field v-model="editedProduct.imageUrl" label="URL de la Imagen" required></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="closeDialog">Cancelar</v-btn>
            <v-btn text @click="saveProduct">{{ isEditing ? 'Guardar' : 'Agregar' }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const products = ref([]);
  const dialog = ref(false);
  const isEditing = ref(false);
  const editedProduct = ref({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    imageUrl: '',
  });
  const productHeaders = [
    { text: 'ID', value: 'id' },
    { text: 'Nombre', value: 'name' },
    { text: 'Descripción', value: 'description' },
    { text: 'Precio', value: 'price' },
    { text: 'Marca', value: 'brand' },
    { text: 'Stock', value: 'stock' },
    { text: 'Categoría', value: 'category' },
    { text: 'Imagen', value: 'imageUrl' },
    { text: 'Acciones', value: 'actions', sortable: false },
  ];
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8001/app/products/');
      products.value = response.data.message;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      alert('Error al obtener los productos.');
    }
  };
  
  const openAddProductDialog = () => {
    isEditing.value = false;
    editedProduct.value = {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      category: '',
      imageUrl: '',
    };
    dialog.value = true;
  };
  
  const openEditProductDialog = (product) => {
    isEditing.value = true;
    editedProduct.value = { ...product };
    dialog.value = true;
  };
  
  const closeDialog = () => {
    dialog.value = false;
  };
  
  const saveProduct = async () => {
    try {
      if (isEditing.value) {
        await axios.put(`http://localhost:8001/app/products/${editedProduct.value.id}`, editedProduct.value);
        const index = products.value.findIndex(product => product.id === editedProduct.value.id);
        if (index !== -1) {
          products.value[index] = { ...editedProduct.value };
        }
      } else {
        const response = await axios.post('http://localhost:8001/app/products', editedProduct.value);
        products.value.push(response.data.message);
      }
      closeDialog();
      alert(isEditing.value ? 'Producto actualizado con éxito.' : 'Producto agregado con éxito.');
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error al guardar el producto.');
    }
  };
  
  const deleteProductHandler = async (productId) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await axios.delete(`http://localhost:8001/app/products/${productId}`);
        fetchProducts();
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  };
  
  onMounted(fetchProducts);
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
