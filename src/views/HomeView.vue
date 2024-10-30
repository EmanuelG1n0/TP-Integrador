<template>
  <div class="welcome-container d-flex flex-column justify-content-center align-items-center text-center" style="height: 50vh; background-color: #f9f9f9;">
    <h1 class="display-4">Bienvenido a Nuestra Tienda en Línea</h1>
    <p class="lead text-muted">Explora nuestros productos de calidad a buen precio.</p>
    <!-- Contenido adicional -->
    <router-link to="/catalog" class="btn btn-primary mt-3">Ver Catálogo</router-link>
  </div>
</template>

<script setup>
/* Código si es necesario */
</script>

<style scoped>
.welcome-container {
  padding: 20px;            
}

h1 {
  margin: 0;                 
}
</style>
