<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center">Iniciar Sesión</v-card-title>
          <v-card-text>
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
              <v-btn color="primary" type="submit" block>Ingresar</v-btn>
            </v-form>
            <p class="mt-3 text-center">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
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
/* Tus estilos aquí */
</style>