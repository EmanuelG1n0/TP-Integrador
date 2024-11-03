<template>
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
/* Estilos opcionales */
.container {
  max-width: 600px; 
  width: 100%; 
  min-height: 500px; 
  margin: 50px auto;
  padding: 20px;
}
</style>
