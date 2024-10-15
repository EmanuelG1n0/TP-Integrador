<template>
  <div class="login-container">
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-center">Iniciar Sesión</v-card-title>
      <v-card-text>
        <!-- Formulario de login -->
        <form @submit.prevent="login">
          <v-text-field
            label="Nombre de usuario"
            v-model="username"
            required
            placeholder="Username"
          ></v-text-field>

          <v-text-field
            label="Contraseña"
            v-model="password"
            required
            type="password"
            placeholder="Password"
          ></v-text-field>

          <v-btn color="primary" type="submit" class="mt-3" block>
            Login
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Footer,
    NavBar
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      // Autenticación falsa para demostrar la funcionalidad
      if (username.value === 'user' && password.value === 'password') {
        localStorage.setItem('user', JSON.stringify({ username: username.value }));
        router.push({ name: 'Home' });
      } else {
        alert('Credenciales incorrectas');
      }
    };

    return { username, password, login };
  }
};
</script>

<style scoped>

</style>
