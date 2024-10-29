<template>
    <div>
      <h2>Perfil de Usuario</h2>
      <b-form @submit.prevent="updateProfile">
        <b-form-group label="Nombre">
          <b-form-input v-model="user.name"></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="user.email" disabled></b-form-input>
        </b-form-group>
        <!-- Otros campos si es necesario -->
        <b-button type="submit" variant="primary">Actualizar Perfil</b-button>
      </b-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '@/store/auth';
  
  const authStore = useAuthStore();
  const user = ref({});
  
  onMounted(() => {
    user.value = { ...authStore.user };
  });
  
  const updateProfile = async () => {
    try {
      const response = await axios.put('/api/users/profile', user.value);
      authStore.setUser(response.data);
      alert('Perfil actualizado con éxito.');
    } catch (error) {
      console.error(error);
      alert('Error al actualizar el perfil.');
    }
  };
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  