<template>
<<<<<<< HEAD
  <div class="login-container d-flex flex-column align-items-center justify-content-center p-4 border border-light rounded shadow" style="background-color: #f8f9fa;">
    <h2 class="mb-4 text-center">Iniciar Sesión</h2>
    <b-form @submit.prevent="submitLogin" class="w-100">
      <div class="mb-3">
        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="email"
            type="email"
            required
            placeholder="Introduce tu correo electrónico"
            class="form-control"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="mb-3">
        <b-form-group label="Contraseña" label-for="password-input">
          <b-form-input
            id="password-input"
            v-model="password"
            type="password"
            required
            placeholder="Introduce tu contraseña"
            class="form-control"
          ></b-form-input>
        </b-form-group>
      </div>
      <b-button type="submit" variant="primary" class="mt-3 w-100">Ingresar</b-button>
    </b-form>
=======
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
>>>>>>> EmanuelG1n0
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

    const roleId = authStore.user.RoleId;
    if (roleId === 1) {
      alert('Inicio de sesión exitoso');
      router.push('/admin'); // Redirigir al panel de administración si el usuario tiene roleId 1
    } else if (roleId === 2) {
      alert('Inicio de sesión exitoso');
      router.push('/'); // Redirigir a la página de inicio si el usuario tiene roleId 2
    } else {
      alert('No tienes permisos para acceder al panel de administración.');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.');
  }
};
</script>

<style scoped>
.login-container {
  max-width: 600px; 
  width: 100%; 
  min-height: 500px; 
  margin: 50px auto;
  padding: 20px;
}

h2 {
  color: #333; 
}

b-form-input {
  transition: border-color 0.3s;
  width: 100%; 
  box-sizing: border-box; 
}

b-form-input:focus {
  border-color: #007bff; 
  outline: none; 
}

b-button {
  font-size: 1em; 
}


@media (max-width: 600px) {
  .login-container {
    max-width: 90%;
  }
}
</style>
