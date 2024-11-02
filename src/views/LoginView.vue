<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <b-form @submit.prevent="submitLogin">
      <b-form-group label="Email">
        <b-form-input v-model="mail" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña">
        <b-form-input v-model="pass" type="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
    </b-form>
    <p class="mt-3">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import axios from 'axios';

const mail = ref('');
const pass = ref('');
const router = useRouter();
const authStore = useAuthStore();

const submitLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8001/app/users/login', {
      mail: mail.value,
      pass: pass.value
    });
    const token = response.data.token;
    localStorage.setItem('authToken', token); // Guardar el token en el almacenamiento local
    await authStore.login(token); // Llamar a la acción login con el token
    alert('Inicio de sesión exitoso');
    router.push('/home');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
