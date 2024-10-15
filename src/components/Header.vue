<template>
    <header>
      <nav>
        <h1>Mi eCommerce</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/catalog">Catálogo</router-link></li>
          <li><router-link to="/cart">Carrito</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-else><button @click="logout">Logout</button></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isLoggedIn = ref(!!localStorage.getItem('user'));
  
      const logout = () => {
        localStorage.removeItem('user');
        window.location.reload();
      };
  
      return { isLoggedIn, logout };
    }
  };
  </script>
  
  <style scoped>
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 15px;
  }
  </style>
  