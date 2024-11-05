<template>
  <v-carousel>
    <v-carousel-item
      v-for="(banner, index) in banners"
      :key="index"
      :src="banner.imageUrl"
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <h2 class="white--text">{{ banner.title }}</h2>
          <p class="white--text">{{ banner.description }}</p>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const banners = ref([]);

const fetchBanners = async () => {
  try {
    const response = await axios.get('http://localhost:8001/app/banners/');
    banners.value = response.data.message; // Ajusta según la estructura de tu respuesta
  } catch (error) {
    console.error('Error al obtener los banners:', error);
  }
};

onMounted(fetchBanners);
</script>

<style scoped>
.v-carousel-item {
  background-size: cover;
  background-position: center;
}
@media (max-width: 600px) {
  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>