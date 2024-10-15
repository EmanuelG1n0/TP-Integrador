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
    Footer
  }
};
</script>

<style>
/* Estilos generales de la aplicación */
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  padding: 20px;
}

/* Asegúrate de que el header y footer tengan una buena separación del contenido principal */
header, footer {
  background-color: #f8f9fa;
  padding: 10px;
}

header {
  border-bottom: 1px solid #ddd;
}

footer {
  border-top: 1px solid #ddd;
  margin-top: 20px;
}
</style>
