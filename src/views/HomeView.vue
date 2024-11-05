<template>
  <div>
    <h1>Bienvenido a nuestro E-Commerce</h1>
    <BannerCarousel />
    <!-- Contenido adicional -->
    <v-container class="mt-5">
      <v-card class="mx-auto" max-width="600">
        <v-card-title class="text-center">Suscríbete a nuestro Newsletter</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-form @submit.prevent="subscribeToNewsletter">
                <v-text-field
                  label="Correo electrónico"
                  v-model="email"
                  type="email"
                  required
                ></v-text-field>
                <v-btn color="primary" type="submit">Suscribirse</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BannerCarousel from '@/components/BannerCarousel.vue';

const email = ref('');

const subscribeToNewsletter = async () => {
  try {
    await axios.post('http://localhost:8001/app/newsletter/subscribe', { email: email.value });
    alert('Suscripción exitosa');
    email.value = '';
  } catch (error) {
    console.error('Error al suscribirse al newsletter:', error);
    alert('Error al suscribirse. Por favor, intente nuevamente.');
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>