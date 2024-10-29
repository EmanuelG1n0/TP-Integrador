<template>
  <div class="register-container">
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-center">Crear Cuenta</v-card-title>
      <v-card-text>
        <!-- Formulario de registro -->
        <form @submit.prevent="handleRegister">
          <v-text-field
            label="Nombre"
            v-model="name"
            required
          ></v-text-field>

          <v-text-field
            label="Correo electrónico"
            v-model="email"
            required
            type="email"
          ></v-text-field>

          <v-text-field
            label="Contraseña"
            v-model="password"
            required
            type="password"
          ></v-text-field>

          <v-btn color="primary" type="submit" class="mt-3" block>
            Crear
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      // Lógica para enviar el formulario de registro
      axios.post('/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log('Registrando:', response.data);
        // Redirigir o mostrar mensaje de éxito
      })
      .catch(error => {
        console.error('Error registrando:', error);
        // Mostrar mensaje de error
      });
    }
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>