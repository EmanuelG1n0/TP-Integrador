<template>
  <div class="profile-container">
    <h2>Perfil de Usuario</h2>
    <ProfileCard :user="user" @update="handleUpdate" class="profile-card"/>
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
      userData.dateOfBirth = new Date(userData.dateOfBirth).toISOString().split('T')[0]; // Formato de fecha
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
  authStore.setUser(updatedUser); 
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.profile-card {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.profile-card div {
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
}

.profile-card button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-card button:hover {
  background-color: #45a049;
}
</style>
