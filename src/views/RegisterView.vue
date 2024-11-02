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
            label="Apellido"
            v-model="lastname"
            required
          ></v-text-field>
          <v-text-field
            label="Correo electrónico"
            v-model="mail"
            required
            type="email"
          ></v-text-field>
          <v-text-field
            label="DNI"
            v-model="dni"
            required
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            v-model="pass"
            required
            type="password"
          ></v-text-field>
          <v-text-field
            label="Fecha de Nacimiento"
            v-model="dateOfBirth"
            required
            type="date"
          ></v-text-field>
          <v-text-field
            label="Dirección"
            v-model="address"
            required
          ></v-text-field>
          <v-text-field
            label="Ciudad"
            v-model="city"
            required
          ></v-text-field>
          <v-text-field
            label="Estado"
            v-model="state"
            required
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
      lastname: '',
      mail: '',
      dni: '',
      pass: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: ''
    };
  },
  methods: {
    handleRegister() {
      // Lógica para enviar el formulario de registro
      axios.post('http://localhost:8001/app/users', {
        name: this.name,
        lastname: this.lastname,
        mail: this.mail,
        dni: this.dni,
        pass: this.pass,
        dateOfBirth: this.dateOfBirth,
        address: this.address,
        city: this.city,
        state: this.state
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
.register-container {
  padding: 20px;
}
</style>