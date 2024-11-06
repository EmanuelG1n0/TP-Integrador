<template>
<<<<<<< HEAD
  <div class="container d-flex justify-content-center align-items-center " >
    <div class="register-container">
      <div class="card shadow" >
        <div class="card-header text-center">
          <h4>Crear Cuenta</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input
                id="name"
                type="text"
                class="form-control"
                v-model="name"
                required
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary w-100 mt-3">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
=======
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
>>>>>>> EmanuelG1n0
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterView',
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
<<<<<<< HEAD
    handleRegister() {
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
=======
    async handleRegister() {
      try {
        const response = await axios.post('http://localhost:8001/app/users/', {
          name: this.name,
          lastname: this.lastname,
          mail: this.mail,
          dni: this.dni,
          pass: this.pass,
          dateOfBirth: this.dateOfBirth,
          address: this.address,
          city: this.city,
          state: this.state
        });
        console.log('Registrado:', response.data);
        alert('Registro exitoso');
        this.$router.push('/login'); // Redirige al login después del registro
      } catch (error) {
>>>>>>> EmanuelG1n0
        console.error('Error registrando:', error);
        alert('Error al registrar. Por favor, intente nuevamente.');
      }
    }
  }
};
</script>

<style scoped>
<<<<<<< HEAD
/* Estilos opcionales */
.container {
  max-width: 600px; 
  width: 100%; 
  min-height: 500px; 
  margin: 50px auto;
  padding: 20px;
}
</style>
=======
.register-container {
  padding: 20px;
}
</style>
>>>>>>> EmanuelG1n0
