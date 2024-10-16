<template>
  <section class="product-details border shadow-sm p-3 mb-5 bg-white rounded">
    <div class="product-images">
      <div class="thumbnail-container">
        <img v-for="(image, index) in product.images" :key="index" :src="image" alt="Product thumbnail" class="thumbnail" @click="selectImage(image)" />
      </div>
      <div class="image-container">
        <img :src="selectedImage" alt="Product image" class="main-image" />
      </div>
    </div>
    <div class="product-info">
      <h1 class="product-title">{{ product.title }}</h1>
      <div class="product-description mt-4">
        <h3>Descripción</h3>
        <hr />
        <p>{{ product.description }}</p>
      </div>
      <p class="product-price">{{ product.price }} USD</p>
      <p v-if="product.stock > 0" class="text-success">Stock: {{ product.stock }}</p>
      <p v-else class="text-danger">Out of Stock</p>
      <button @click="addToCart" :disabled="product.stock === 0" class="btn btn-primary btn-lg mt-3">
        Add to Cart
      </button>
      <div class="payment-info mt-4">
        <h3>Medios de Pago</h3>
        <p><strong>10% OFF</strong> en <strong>Transferencias</strong></p>
        <p><strong>3</strong> cuotas sin interés con Tarjetas</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
      selectedImage: ''
    };
  },
  async mounted() {
    const response = await axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`);
    this.product = response.data;
    this.product.stock = Math.floor(Math.random() * 20); // Genera un stock aleatorio entre 0 y 20
    this.product.images = [this.product.image, 'url_de_imagen_2', 'url_de_imagen_3']; // Añadir más URLs de imágenes
    this.selectedImage = this.product.image; // Establecer la imagen seleccionada por defecto
  },
  methods: {
    addToCart() {
      if (this.product.stock > 0) {
        this.$emit('add-to-cart', this.product);
        this.product.stock--; // Decrementar el stock en 1
      }
    },
    selectImage(image) {
      this.selectedImage = image;
    }
  }
};
</script>

<style scoped>
.product-images {
  display: flex;
  align-items: flex-start;
}
.thumbnail-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
}
.thumbnail {
  width: 150px;
  height: 150px;
  cursor: pointer;
}
.main-image {
  width: 100%;
  height: auto;
}
</style>