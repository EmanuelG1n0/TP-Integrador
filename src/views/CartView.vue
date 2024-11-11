<template>
  <div class="cart-container">
    <h1>Carrito de Compras</h1>
    <div v-if="cartItems.length">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="item in cartItems"
          :key="item.id"
          class="d-flex justify-center"
        >
          <div class="cart-item-container">
            <CartItem :product="item.Product" :quantity="item.quantity" :cartId="cartId" @remove-from-cart="removeFromCart" class="cart-item"/>
          </div>
        </v-col>
      </v-row>
      <div class="button-container">
        <v-btn color="primary" @click="generateOrder" class="mt-4 wide-btn">Realizar Orden</v-btn>
      </div>
    </div>
    <div v-else>
      <p class="empty-cart-message">Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import CartItem from '@/components/CartItem.vue';

const authStore = useAuthStore();
const userId = ref(authStore.userId);
const cartItems = ref([]);
const cartId = ref(null);

const getCartItems = async () => {
  try {
    const response = await axios.get(`http://localhost:8001/app/carts/${userId.value}`);
    cartItems.value = response.data.message.CartItems;
    cartId.value = response.data.message.id;
  } catch (error) {
    console.error('Error al obtener los ítems del carrito:', error);
  }
};

const removeFromCart = async (productId) => {
  try {
    await axios.post('http://localhost:8001/app/carts/remove', {
      cartId: cartId.value,
      productId: productId
    });
    await getCartItems();
    alert('Producto eliminado del carrito con éxito');
  } catch (error) {
    console.error('Error al eliminar el producto del carrito:', error);
    alert('Error al eliminar el producto del carrito.');
  }
};

const generateOrder = async () => {
  try {
    const response = await axios.post(`http://localhost:8001/app/carts/${userId.value}/generate-order`);
    alert('Orden generada con éxito');
    await getCartItems(); 
  } catch (error) {
    console.error('Error al generar la orden:', error);
    alert('Error al generar la orden.');
  }
};

onMounted(() => {
  if (userId.value) {
    getCartItems();
  } else {
    watch(
      () => authStore.userId,
      (newUserId) => {
        if (newUserId) {
          userId.value = newUserId;
          getCartItems();
        }
      }
    );
  }
});
</script>

<style scoped>
.cart-container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.v-row {
  margin-top: 30px;
}

.cart-item-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px; 
}

.cart-item {
  font-size: 16px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px; 
  transition: transform 0.3s ease;
  margin-bottom: 20px; 
}

.cart-item:hover {
  transform: scale(1.05);
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.wide-btn {
  text-align: center;
  height: 50px;
  font-size: 16px;
  margin-top: 30px;
  width: 100%;
  max-width: 250px;
}

.v-btn {
  width: 100%;
}

.cart-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Centrando el mensaje cuando el carrito está vacío */

.empty-cart-message {
  font-size: 1.5rem;
  color: #777;
  margin: 0;
}

@media (max-width: 600px) {
  .cart-item {
    font-size: 14px;
    padding: 16px;
  }

  .wide-btn {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .wide-btn {
    font-size: 12px;
    padding: 12px;
  }
}
</style>
