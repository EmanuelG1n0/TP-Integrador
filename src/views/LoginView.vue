<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <b-form @submit.prevent="submitLogin">
      <b-form-group label="Email">
        <b-form-input v-model="email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña">
        <b-form-input v-model="password" type="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
    </b-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import axios from '@/plugins/axios';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const submitLogin = async () => {
  try {
    const response = await axios.post('/login', {
      email: email.value,
      password: password.value
    });
    authStore.setUser(response.data.user);
    authStore.setToken(response.data.token);
    alert('Inicio de sesión exitoso.');
    router.push('/');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>