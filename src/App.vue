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
  min-height: 100vh; /* Para que el contenido ocupe al menos toda la pantalla */
  display: flex;
  flex-direction: column;
}

main {
  padding: 20px;
  flex: 1; /* Para que el main ocupe el espacio disponible entre header y footer */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Alineación central si deseas centrar el contenido */
}

/* Asegúrate de que el header y footer tengan una buena separación del contenido principal */
header,
footer {
  background-color: #f8f9fa;
  padding: 10px;
}

header {
  border-bottom: 1px solid #ddd;
}

footer {
  border-top: 2px solid #ddd;
  margin-top: auto; /* Esto asegura que el footer siempre esté al final */
}

/* Estilo adicional para asegurar una buena experiencia en pantallas grandes y pequeñas */
@media (max-width: 768px) {
  main {
    padding: 10px;
  }
}
</style>
