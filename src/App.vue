<template>
  <div id="app">
    <!-- Header - siempre visible -->
    <NavBar />

    <!-- Contenedor principal de la aplicación -->
    <main class="centered">
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
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

main {
  flex: 1; 
}


b-footer {
  background-color: #f8f9fa;
  padding: 1rem;
}

</style>
