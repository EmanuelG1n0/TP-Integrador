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

const authStore = useAuthStore();
const router = useRouter();
const user = ref({});

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login');
  } else {
    const userData = { ...authStore.user };
    if (userData.dateOfBirth) {
      userData.dateOfBirth = new Date(userData.dateOfBirth).toISOString().split('T')[0];
    }
    user.value = userData;
  }
});

const handleUpdate = (updatedUser) => {
  user.value = updatedUser;
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>