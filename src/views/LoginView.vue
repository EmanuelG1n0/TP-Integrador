<template>
  <div>
    <main>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
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