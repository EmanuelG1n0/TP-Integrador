<template>
  <div>
    <h2>Perfil de Usuario</h2>
    <b-form @submit.prevent="updateProfile">
      <b-form-group label="Nombre">
        <b-form-input v-model="user.name" required></b-form-input>
      </b-form-group>
      <b-form-group label="Apellido">
        <b-form-input v-model="user.lastname" required></b-form-input>
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input v-model="user.mail" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="DNI">
        <b-form-input v-model="user.dni" required></b-form-input>
      </b-form-group>
      <b-form-group label="Fecha de Nacimiento">
        <b-form-input v-model="user.dateOfBirth" type="date" required></b-form-input>
      </b-form-group>
      <b-form-group label="Dirección">
        <b-form-input v-model="user.address" required></b-form-input>
      </b-form-group>
      <b-form-group label="Ciudad">
        <b-form-input v-model="user.city" required></b-form-input>
      </b-form-group>
      <b-form-group label="Estado">
        <b-form-input v-model="user.state" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Actualizar Perfil</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import axios from 'axios';

const authStore = useAuthStore();
const router = useRouter();
const user = ref({});

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login');
  } else {
    const userData = { ...authStore.user };
    // aca tomacamos la fecha de nacimiento y la convertimos a un formato que el input de tipo date pueda entender
    if (userData.dateOfBirth) {
      userData.dateOfBirth = new Date(userData.dateOfBirth).toISOString().split('T')[0];
    }
    user.value = userData;
  }
});

const updateProfile = async () => {
  try {
    const payload = {
      name: user.value.name,
      lastname: user.value.lastname,
      mail: user.value.mail,
      dni: user.value.dni,
      pass: user.value.pass,
      dateOfBirth: user.value.dateOfBirth,
      address: user.value.address,
      city: user.value.city,
      state: user.value.state,
      RoleId: user.value.RoleId
    };

    const response = await axios.put(`http://localhost:8001/app/users/${user.value.id}`, payload);
    authStore.setUser(response.data);
    alert('Perfil actualizado con éxito.');
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    alert('Error al actualizar el perfil.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>