<template>
  <div id="app">
    <nav>
      <router-link to="/">Catalogo</router-link>
      <router-link to="/product/add">Agregar Producto</router-link>
    </nav>
    <router-view></router-view> <!-- Muestra la vista activa según la ruta -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  color: #0056b3;
}
</style>