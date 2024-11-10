<template>
  <div>
    <h1>Bienvenido a nuestro E-Commerce</h1>
    <BannerCarousel :banners="banners" />
    <!-- Contenido adicional -->
    <v-container class="mt-5">
      <v-row>
        <!-- Métodos de Pago -->
        <v-col cols="12" md="6" class="text-center">
          <h3>Métodos de Pago</h3>
          <div class="payment-icons">
            <v-img src="/MediosPago/visa-icon.png" alt="Visa" max-width="50"></v-img>
            <v-img src="/MediosPago/amex-icon.png" alt="Amex" max-width="50"></v-img>
            <v-img src="/MediosPago/master-icon.png" alt="MasterCard" max-width="50"></v-img>
            <v-img src="/MediosPago/mercadopago-icon.png" alt="Mercado Pago" max-width="50"></v-img>
          </div>
        </v-col>
        <!-- Suscripción al Newsletter -->
        <v-col cols="12" md="6">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import BannerCarousel from '@/components/BannerCarousel.vue';

const email = ref('');
const banners = ref([
  {
    imageUrl: '/path/to/banner1.jpg',
    title: 'Banner 1',
    description: 'Descripción del Banner 1'
  },
  {
    imageUrl: '/path/to/banner2.jpg',
    title: 'Banner 2',
    description: 'Descripción del Banner 2'
  },
  {
    imageUrl: '/path/to/banner3.jpg',
    title: 'Banner 3',
    description: 'Descripción del Banner 3'
  }
]);

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
.payment-icons {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaciado entre los íconos */
  margin-top: 20px;
}
</style>