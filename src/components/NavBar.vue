<template>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item"><router-link to="/">Home</router-link></li>
        <li class="navbar-item"><router-link to="/catalog">Catálogo</router-link></li>
        <li class="navbar-item"><router-link to="/cart">Carrito</router-link></li>
        <li class="navbar-item"><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 15px;
  }
  
  .navbar-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  
  .navbar-item a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .navbar-item a:hover {
    color: #ff6600;
  }
  </style>