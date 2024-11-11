<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
        <!-- Mensaje centrado -->
        <div class="login-message text-center">
          <h2>Ingresá tu e-mail para iniciar sesión</h2>
        </div>

        <!-- Card de Login -->
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
              ¿No tienes una cuenta? 
              <v-btn text to="/register" color="primary">Regístrate aquí</v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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

// Función para enviar los datos de inicio de sesión
const submitLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8001/app/users/login', {
      mail: mail.value,
      pass: pass.value
    });
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    await authStore.login(token);

    // Redirigir al administrador o a la página principal
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
/* Estilos para la vista de login */
.login-card {
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;  /* Asegura que ocupe todo el ancho disponible */
}

h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.register-link {
  font-size: 0.9em;
  text-align: center;
}

.login-message h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  /* Estilos responsivos para pantallas pequeñas */
  .login-card {
    padding: 20px;
  }

  .login-message h2 {
    font-size: 1.5rem;
  }
}
</style>
