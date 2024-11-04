<template>
  <div>
    <h3>Gestión de Usuarios</h3>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    >
      <template #item.actions="{ item }">
        <v-btn small @click="editUser(item.id)">Editar</v-btn>
        <v-btn small color="red" @click="deleteUserHandler(item.id)">Eliminar</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Nombre', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Rol', value: 'role' },
  { text: 'Acciones', value: 'actions', sortable: false },
];

const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    alert('Error al obtener los usuarios.');
  }
};

const editUser = (userId) => {
  // Implementar la lógica para editar usuario
};

const deleteUserHandler = async (userId) => {
  if (confirm('¿Estás seguro de eliminar este usuario?')) {
    try {
      await axios.delete(`/api/users/${userId}`);
      users.value = users.value.filter(u => u.id !== userId);
      alert('Usuario eliminado con éxito.');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error al eliminar el usuario.');
    }
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
/* Tus estilos aquí */
</style>