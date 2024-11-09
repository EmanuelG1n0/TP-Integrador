<template>
  <div class="welcome-container">
    <h1 class="text-center mb-4">Bienvenido a nuestro E-Commerce</h1>
    <p class="text-center mb-4">Explora una amplia variedad de productos en nuestro catálogo.</p>

    <!-- Carrusel de productos -->
    <v-carousel cycle height="400px" show-arrows>
      <!-- Cada "v-carousel-item" representará un producto -->
      <v-carousel-item v-for="(product, index) in products" :key="index">
        <v-img :src="product.image" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="text-center">
              <h3 class="white--text">{{ product.name }}</h3>
              <p class="white--text">{{ product.description }}</p>
              <router-link :to="'/product/' + product.id" class="btn btn-primary">Ver Producto</router-link>
            </v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <!-- Botón para ir al catálogo -->
    <div class="text-center mt-4">
      <router-link to="/catalog" class="btn btn-primary btn-lg">Ver Catálogo</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const products = ref([
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1.',
    image: 'https://via.placeholder.com/800x400?text=Producto+1',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2.',
    image: 'https://via.placeholder.com/800x400?text=Producto+2',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3.',
    image: 'https://via.placeholder.com/800x400?text=Producto+3',
  },
]);

</script>

<style scoped>
.welcome-container {
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.btn {
  font-size: 1.2rem;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
  color: #fff;
}

.v-carousel-item .v-img {
  border-radius: 8px;
}

@media (max-width: 600px) {
  .welcome-container {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .btn {
    font-size: 1.1rem;
    padding: 10px 25px;
  }
}
</style>
