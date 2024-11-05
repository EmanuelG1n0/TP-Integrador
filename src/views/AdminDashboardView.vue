<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list>
        <v-list-item-group>
          <v-list-item @click="goToAddProduct">
            <v-list-item-icon>
              <v-icon>mdi-plus-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Agregar Producto</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="goToViewRoles">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ver Roles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="goToViewUsers">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ver Usuarios</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Panel de Administración</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <h2>Gestión de Productos</h2>
        <v-btn color="primary" @click="goToAddProduct">Agregar Producto</v-btn>
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import axios from 'axios';

const router = useRouter();
const authStore = useAuthStore();
const drawer = ref(true);
const products = ref([]);
const users = ref([]);
const editProductDialog = ref(false);
const selectedProduct = ref({
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
const userHeaders = [
  { text: 'ID', value: 'id' },
  { text: 'Nombre', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Rol', value: 'role' },
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

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8001/app/users/');
    users.value = response.data.message;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    alert('Error al obtener los usuarios.');
  }
};

const goToAddProduct = () => {
  router.push({ name: 'ProductForm', params: { id: 'new' } });
};

const goToViewRoles = () => {
  router.push({ name: 'RoleList' });
};

const goToViewUsers = () => {
  router.push({ name: 'UserList' });
};

const openEditProductDialog = (product) => {
  selectedProduct.value = { ...product };
  editProductDialog.value = true;
};

const submitEditProductForm = async () => {
  try {
    await axios.put(`http://localhost:8001/app/products/${selectedProduct.value.id}`, selectedProduct.value);
    fetchProducts();
    editProductDialog.value = false;
    alert('Producto actualizado con éxito.');
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    alert('Error al actualizar el producto.');
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

const deleteUserHandler = async (userId) => {
  if (confirm('¿Estás seguro de eliminar este usuario?')) {
    try {
      await axios.delete(`http://localhost:8001/app/users/${userId}`);
      await fetchUsers();
      alert('Usuario eliminado con éxito.');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      alert('Error al eliminar el usuario.');
    }
  }
};

onMounted(async () => {
  console.log('UserRoleId:', authStore.userRoleId);
  if (authStore.userRoleId !== 1) {
    alert('No tienes permisos para acceder al panel de administración.');
    router.push('/');
    return;
  }
  await fetchProducts();
  await fetchUsers();
});
</script>

<style scoped>
/* Tus estilos aquí */
</style>