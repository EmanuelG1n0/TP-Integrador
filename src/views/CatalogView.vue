<template>
  <div class="catalog-container">
    <div class="text-center my-5">
      <h2 class="display-4">Catálogo de Productos</h2>
      <p class="lead text-muted">Encuentra productos de calidad a los mejores precios</p>
    </div>
    <!-- Catálogo de productos -->
    <v-row dense justify="center">
      <v-col
        v-for="product in products"
        :key="product.id"
        :cols="2.8"  
        class="mb-4 d-flex justify-center" >
        <ProductCard :product="product" @add-to-cart="addToCart" class="small-product-card"/>
      </v-col>
    </v-row>
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
let cartId = authStore.cartId;
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
    products.value = response.data.message; 
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    alert('Error al obtener los productos.');
  }
});
</script>

<style scoped>
.catalog-container {
  padding: 50px;
}

h2 {
  font-weight: bold;
  color: #343a40;
}

p {
  color: #6c757d;
}

.v-row {
  margin-top: 30px;
}

.v-col {
  display: flex;
  justify-content: center;
}

.small-product-card {
  max-width: 300px;  /* Reduce el tamaño máximo de la tarjeta */
  margin: 0 auto;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

@media (max-width: 600px) {
  .catalog-container {
    padding: 20px;
  }

  .small-product-card {
    max-width: 220px;  /* Reducir aún más en pantallas pequeñas */
  }
}
</style>
