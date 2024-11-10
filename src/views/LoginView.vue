<template>
<<<<<<< HEAD
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
=======
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="login-card">
          <v-card-title class="text-center">Iniciar Sesión</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitLogin">
              <v-text-field
                label="Email"
                v-model="mail"
                type="email"
                required
                outlined
                dense
                class="mb-4"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                v-model="pass"
                type="password"
                required
                outlined
                dense
                class="mb-4"
              ></v-text-field>
              <v-btn color="primary" type="submit" block large>Ingresar</v-btn>
            </v-form>
            <v-divider class="my-4"></v-divider>
            <p class="register-link">
              ¿No tienes una cuenta? <v-btn text to="/register" color="primary">Regístrate aquí</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center">
        <div class="login-message">
          <h2>Ingresá tu e-mail para iniciar sesión</h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
>>>>>>> origin/szavala
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
