<template>
  <div>
    <h2>Perfil de Usuario</h2>
    <ProfileCard :user="user" @update="handleUpdate" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import ProfileCard from '@/components/ProfileCard.vue';
import axios from 'axios';

const authStore = useAuthStore();
const router = useRouter();
const user = ref({});

const fetchUserDetails = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8001/app/users/${userId}`);
    const userData = response.data;
    if (userData.dateOfBirth) {
      userData.dateOfBirth = new Date(userData.dateOfBirth).toISOString().split('T')[0];
    }
    user.value = userData;
  } catch (error) {
    console.error('Error al obtener los detalles del usuario:', error);
    alert('Error al obtener los detalles del usuario.');
  }
};

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login');
  } else {
    const userId = authStore.userId;
    if (userId) {
      fetchUserDetails(userId);
    } else {
      console.error('User ID is undefined');
      alert('Error al obtener el ID del usuario.');
    }
  }
});

const handleUpdate = (updatedUser) => {
  user.value = updatedUser;
  authStore.setUser(updatedUser); // Actualizar el estado de autenticación con los datos actualizados del usuario
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>