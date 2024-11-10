<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <v-form @submit.prevent="submitLogin" class="login-form">
      <v-text-field
        label="Email"
        v-model="mail"
        type="email"
        required
        outlined
        dense
        hide-details
        color="primary"
      ></v-text-field>
      <v-text-field
        label="Contraseña"
        v-model="pass"
        type="password"
        required
        outlined
        dense
        hide-details
        color="primary"
      ></v-text-field>
      <v-btn color="primary" type="submit" class="login-button" elevation="2">Ingresar</v-btn>
    </v-form>
    <p class="register-text">
      ¿No tienes una cuenta? <a href="/register" class="register-link">Regístrate aquí</a>
    </p>
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
    localStorage.setItem('authToken', token);
    await authStore.login(token);

    if (authStore.isAdminGetter) {
      router.push('/admin');
    } else {
      router.push('/home');
    }

    alert('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.');
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 40px;
  margin-top: 100px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 24px;
  font-weight: 600;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
}

.register-text {
  margin-top: 20px;
  font-size: 0.9em;
  color: #555;
}

.register-link {
  color: #1976d2;
  font-weight: bold;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .login-container {
    margin-top: 50px;
    padding: 20px;
  }
}
</style>
