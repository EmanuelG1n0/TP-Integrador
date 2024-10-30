<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h1 class="display-4">Carrito de Compras</h1>
      <p class="lead text-muted">Aquí puedes ver los productos que has añadido.</p>
    </div>
    <div class="cart-container">
      <!-- Aquí puedes agregar más contenido relacionado con el carrito -->
      <div class="row">
        <div class="col-md-12">
          <div class="alert alert-info" role="alert">
            Tu carrito está vacío. ¡Añade productos para comenzar!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
};
</script>

<style scoped>
.cart-container {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #d3d3d3; /* Borde opcional */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra suave */
}
</style>
