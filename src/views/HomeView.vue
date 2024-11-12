<template>
  <div>
    <h1>Bienvenido a nuestro E-Commerce</h1>
    <BannerCarousel :banners="banners" />
    <!-- Contenido adicional -->
    <div>
    <h2>Catálogo de Productos</h2>
    <v-row>
      <v-col
        cols="4"
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard
          :product="product"
          @add-to-cart="addToCart"
        />
      </v-col>
    </v-row>
  </div>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';



const authStore = useAuthStore();
const userId = authStore.userId;
let cartId = authStore.cartId; // Cambiado a let para permitir la reasignación
const products = ref([]);
const router = useRouter();

const getCartId = async () => {
  if (!cartId) {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
  }
};

const addToCart = async (product) => {
  if (!authStore.isAuthenticated) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  try {
    await getCartId();
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.id,
      quantity: 1,
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8001/app/products/');
    products.value = response.data.message; // Accede a message en lugar de data directamente
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    alert('Error al obtener los productos.');
  }
});

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
.payment-icons {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaciado entre los íconos */
  margin-top: 20px;
}
</style>