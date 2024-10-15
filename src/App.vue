<template>
  <div id="app">
    <nav>
      <router-link to="/">Lista de Productos</router-link>
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

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
}
</style>