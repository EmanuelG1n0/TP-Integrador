<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h1>{{ product.title }}</h1>
        <div class="col-md-6">
          <img :src="product.image" alt="Product image" class="img-fluid rounded" />
        </div>
        <p v-if="product.stock > 0" class="text-success">Stock: {{ product.stock }}</p>
        <p v-else class="text-danger">Out of Stock</p>
        <p class="h4">{{ product.price }} USD</p>
        <p>{{ product.description }}</p>
        <button @click="addToCart" :disabled="product.stock === 0" class="btn btn-success btn-lg mt-3">
          Add to Cart
        </button>
        <div class="payment-info mt-4">
          <h3>Medios de Pago</h3>
          <p>3 cuotas sin interés con:</p>
          <ul class="list-unstyled">
            <li>VISA</li>
            <li>AMEX</li>
            <li>MASTERCARD</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #218838;
}

.payment-info {
  margin-top: 20px;
  font-size: 0.9em;
}

.payment-info h3 {
  margin-bottom: 10px;
}

.payment-info ul {
  list-style-type: none;
  padding: 0;
}

.payment-info li {
  margin-bottom: 5px;
}
</style>