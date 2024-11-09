<template>
  <div class="product-details-container">
    <div class="product-details">
      <div class="product-images">
        <div class="image-container">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
      </div>
      <div class="product-info">
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">
          <strong>Precio:</strong> ${{ product.price }}
        </div>
        <div class="product-brand">
          <strong>Marca:</strong> {{ product.brand }}
        </div>
        <div class="product-stock">
          <strong>Stock:</strong> {{ product.stock }}
        </div>

        <!-- Botón Agregar al Carrito -->
        <v-btn 
          color="primary" 
          :disabled="product.stock <= 0" 
          @click="addToCart" 
          class="mt-4"
        >
          {{ product.stock > 0 ? 'Agregar al Carrito' : 'Agotado' }}
        </v-btn>

        <!-- Mensaje de disponibilidad -->
        <p v-if="product.stock <= 0" class="out-of-stock">
          Lo sentimos, este producto está agotado.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';

const route = useRoute();
const router = useRouter();
const product = ref({});
const authStore = useAuthStore();
const userId = authStore.userId;
let cartId = authStore.cartId;

const getProductDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/products/${route.params.id}`);
    product.value = response.data.message; // Asegúrate de acceder a la propiedad correcta
  } catch (error) {
    console.error('Error al obtener los detalles del producto:', error);
    alert('Error al obtener los detalles del producto.');
  }
};

const getCartId = async () => {
  if (!cartId) {
    const responseCart = await axios.get(`http://localhost:8001/app/carts/${userId}`);
    cartId = responseCart.data.message.id;
  }
};

const addToCart = async () => {
  if (!authStore.isAuthenticated) {
    alert('Por favor, inicia sesión para agregar productos al carrito.');
    router.push('/login');
    return;
  }

  if (product.value.stock <= 0) {
    alert('Este producto está agotado.');
    return;
  }

  try {
    await getCartId();
    await axios.post('http://localhost:8001/app/carts/add', {
      cartId: cartId,
      productId: product.value.id,
      quantity: 1,
    });
    alert('Producto agregado al carrito con éxito');
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    alert('Error al agregar el producto al carrito.');
  }
};

onMounted(getProductDetails);
</script>

<style scoped>
.product-details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Ocupa el 100% del alto de la pantalla */
  background-color: #f9f9f9;
}

.product-details {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-images {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.image-container {
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.product-info {
  flex: 1;
  min-width: 300px;
  max-width: 600px;
}

.product-title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

.product-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
}

.product-price, .product-brand, .product-stock {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.mt-4 {
  margin-top: 20px;
}

.out-of-stock {
  color: red;
  font-weight: bold;
}

.v-btn {
  font-size: 1rem;
  padding: 12px 20px;
}

@media (max-width: 768px) {
  .product-details {
    flex-direction: column;
    align-items: center;
  }

  .product-title {
    font-size: 1.8rem;
  }
}
</style>
