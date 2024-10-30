<template>
  <div class="login-container d-flex flex-column align-items-center justify-content-center p-4 border border-light rounded shadow" style="background-color: #f8f9fa;">
    <h2 class="mb-4">Iniciar Sesión</h2>
    <b-form @submit.prevent="submitLogin" class="w-100">
      <b-form-group label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="email"
          type="email"
          required
          placeholder="Introduce tu correo electrónico"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña" label-for="password-input">
        <b-form-input
          id="password-input"
          v-model="password"
          type="password"
          required
          placeholder="Introduce tu contraseña"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="mt-3 w-100">Ingresar</b-button>
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
.login-container {
  max-width: 400px; /* Ajusta el ancho máximo para mejor apariencia */
  margin: 50px auto; /* Espacio superior */
}

h2 {
  color: #333; /* Color de encabezado */
}

b-form-input {
  transition: border-color 0.3s;
}

b-form-input:focus {
  border-color: #007bff; /* Color del borde al enfocar */
  outline: none; /* Quitar el contorno */
}

b-button {
  font-size: 1em; /* Tamaño de fuente */
}
</style>
