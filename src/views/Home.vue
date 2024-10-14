<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/cart">Carrito</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/catalog">Catálogo</router-link>
    </nav>
    <h1>Home</h1>
  </div>
</template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>