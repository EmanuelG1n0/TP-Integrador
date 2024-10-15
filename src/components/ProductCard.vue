<template>
  <div class="product-card">
    <img :src="product.image" alt="Product image" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.price }} USD</p>
    <router-link :to="`/product/${product.id}`" class="btn btn-primary btn-lg mt-3 details-link">Ver detalles</router-link>
    <button @click="addToCart" class="btn btn-primary btn-lg mt-3">Add to Cart</button>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>