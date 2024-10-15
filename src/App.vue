<template>
  <div id="app">
    <nav>
      <router-link to="/catalog">Catalogo</router-link>
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


</style>