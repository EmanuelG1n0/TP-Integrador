<template>
    <div>
      <Header />
      <main>
        <h2>Bienvenido a Nuestro eCommerce</h2>
        <p>Explora nuestros productos y disfruta de las mejores ofertas.</p>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer
    }
  };
  </script>
  