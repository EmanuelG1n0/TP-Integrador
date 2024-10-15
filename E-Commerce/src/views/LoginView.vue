<template>
    <div>
      <Header />
      <main>
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Username" />
          <input v-model="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: { Header, Footer },
    setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = () => {
        if (username.value === 'user' && password.value === 'password') {
          localStorage.setItem('user', JSON.stringify({ username: username.value }));
          router.push({ name: 'Home' });
        } else {
          alert('Invalid credentials');
        }
      };
  
      return { username, password, login };
    }
  };
  </script>
  