<template>
  <section class="product-details">
    <div class="product-images">
      <div class="image-container">
        <img :src="product.image" alt="Product image" class="main-image" />
      </div>
    </div>
    <div class="product-info">
      <h1 class="product-title">{{ product.title }}</h1>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }} USD</p>
      <p v-if="product.stock > 0" class="text-success">Stock: {{ product.stock }}</p>
      <p v-else class="text-danger">Out of Stock</p>
      <button @click="addToCart" :disabled="product.stock === 0" class="btn btn-primary btn-lg mt-3 add-to-cart-btn">
        Add to Cart
      </button>
      <div class="payment-info mt-4">
        <h3>Medios de Pago</h3>
        <p><strong>10% OFF</strong> en <strong>Transferencias</strong></p>
        <p><strong>3</strong> cuotas sin interés con:</p>
        <ul class="list-unstyled">
          <li id="VISA">
            <svg class="payment-icon"> ... </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {}
    };
  },
  async mounted() {
    const response = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`);
    this.product = response.data;
    // Simulando stock del producto
    this.product.stock = Math.floor(Math.random() * 20); // Genera un stock aleatorio entre 0 y 20
  },
  methods: {
    addToCart() {
      if (this.product.stock > 0) {
        this.$emit('add-to-cart', this.product);
        this.product.stock--; // Decrementar el stock en 1
      }
    }
  }
};
</script>

<style scoped>

</style>