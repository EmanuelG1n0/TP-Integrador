<template>
  <div class="profile-container">
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
/* Estilos generales para el perfil */
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  max-width: 1200px; /* Limitar el ancho máximo del contenedor */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
  font-weight: 500;
}

/* Asegurar que ProfileCard tenga un espaciado adecuado */
.profile-container .v-card {
  width: 100%;
  max-width: 800px; /* Limitar el ancho máximo del card */
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9; /* Fondo ligeramente gris */
  border-radius: 8px; /* Bordes redondeados */
}

/* Responsividad */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5em;
  }

  .profile-container .v-card {
    width: 90%; /* Hacer el card más estrecho en pantallas pequeñas */
    padding: 15px;
  }
}
</style>
