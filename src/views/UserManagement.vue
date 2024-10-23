<template>
    <div>
      <h3>Gestión de Usuarios</h3>
      <b-table :items="users" :fields="fields">
        <template #cell(actions)="data">
          <b-button size="sm" @click="editUser(data.item.id)">Editar</b-button>
          <b-button size="sm" variant="danger" @click="deleteUser(data.item.id)">Eliminar</b-button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const users = ref([]);
  const fields = ['id', 'name', 'email', 'role', 'actions'];
  
  onMounted(async () => {
    try {
      const response = await axios.get('/api/users');
      users.value = response.data;
    } catch (error) {
      console.error(error);
      alert('Error al obtener los usuarios.');
    }
  });
  
  const editUser = (userId) => {
    // Implementar la lógica para editar usuario
  };
  
  const deleteUser = async (userId) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        await axios.delete(`/api/users/${userId}`);
        users.value = users.value.filter(u => u.id !== userId);
        alert('Usuario eliminado con éxito.');
      } catch (error) {
        console.error(error);
        alert('Error al eliminar el usuario.');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  