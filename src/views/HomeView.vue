<template>
  <div>
    <main>
      <!-- Banner Corporativo -->
      <section class="banner">
        <div class="banner-content">
          <h2>Bienvenido a Nuestro eCommerce</h2>
          <p>Todo lo que necesitas, al alcance de un clic. Calidad y confianza en cada producto.</p>
          <button @click="explorarProductos">Explorar Catálogo</button>
        </div>
      </section>

      
    </main>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Footer,
    NavBar
  },
  setup() {
    const router = useRouter();

    const explorarProductos = () => {
      router.push({ name: 'Catalog' });
    };

    return { explorarProductos };
  }
};
</script>
<style scoped>

</style>