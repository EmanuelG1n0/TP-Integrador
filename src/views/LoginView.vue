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
  padding: 40px 30px;
  margin-top: 100px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.register-link {
  font-size: 0.9em;
}

@media (max-width: 600px) {
  .login-container {
    margin-top: 50px;
    padding: 20px;
  }
}
</style>
