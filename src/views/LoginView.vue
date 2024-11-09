<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <v-form @submit.prevent="submitLogin">
      <v-text-field
        label="Email"
        v-model="mail"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        label="Contraseña"
        v-model="pass"
        type="password"
        required
      ></v-text-field>
      <v-btn color="primary" type="submit">Ingresar</v-btn>
    </v-form>
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

    // Redirigir según el rol del usuario
    if (authStore.isAdminGetter) {
      router.push('/admin'); // Redirigir a la página de administración si es administrador
    } else {
      router.push('/home'); // Redirigir a la página de inicio si no es administrador
    }

    alert('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>