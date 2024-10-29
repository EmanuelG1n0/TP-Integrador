<template>
  <div id="app">
    <!-- Header - siempre visible -->
    <NavBar />

    <!-- Contenedor principal de la aplicación -->
    <main>
      <!-- Aquí se cargan las vistas según la navegación -->
      <router-view></router-view>
    </main>

    <!-- Footer - siempre visible -->
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
</style>
