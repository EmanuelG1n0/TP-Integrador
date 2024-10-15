<template>
  <div class="product-card">
    <img :src="product.image" alt="Product image" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.price }} USD</p>
    <router-link :to="`/product/${product.id}`">Ver detalles</router-link>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  max-width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-card h2 {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-card p {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-card button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.product-card button:hover {
  background-color: #218838;
}
</style>