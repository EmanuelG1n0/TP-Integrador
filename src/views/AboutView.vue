<!-- About.vue -->
<template>
  <div class="about-page container mt-5">
    <!-- Section Title -->
    <div class="text-center mb-5">
      <h1 class="display-4">Sobre Nosotros</h1>
      <p class="lead text-muted">Productos  de calidad a buen Precio.</p>
    </div>
 <!-- Sección Sobre Nosotros -->
 <div class="row">
      <!-- Sección de Descripción -->
      <div class="col-mb-4">
        <h2 class="mb-4">Quiénes Somos</h2>
        <p>
          Bienvenido a <strong>Nuestra Tienda en Línea</strong>, tu fuente número uno para todo lo relacionado
          con [producto, ropa, electrónica, etc.]. Nos dedicamos a ofrecerte los mejores productos,
          con un enfoque en calidad, servicio al cliente y originalidad.
        </p>
        <p>
          Fundada en 2024, Nuestra Tienda ha recorrido un largo camino desde sus inicios. Esperamos que disfrutes
          de nuestros productos tanto como nosotros disfrutamos ofrecértelos.
        </p>
        <a href="/catalog" class="btn btn-primary">Comprar Ahora</a>
      </div>
    </div>

    <!-- Sección de Valores -->
    <div class="row text-center my-5">
      <div class="col-md-4">
        <div class="icon-box mb-4">
          <i class="bi bi-truck display-4 text-primary"></i>
        </div>
        <h3>Entrega Rápida</h3>
        <p>Aseguramos que tus productos se entreguen rápida y seguramente a tu puerta.</p>
      </div>

      <div class="col-md-4">
        <div class="icon-box mb-4">
          <i class="bi bi-credit-card display-4 text-primary"></i>
        </div>
        <h3>Pagos Seguros</h3>
        <p>Pagos 100% seguros a través de plataformas confiables para garantizar tu privacidad y seguridad.</p>
      </div>

      <div class="col-md-4">
        <div class="icon-box mb-4">
          <i class="bi bi-star display-4 text-primary"></i>
        </div>
        <h3>Alta Calidad</h3>
        <p>Garantizamos productos de alta calidad, seleccionados de las mejores fuentes a nivel mundial.</p>
      </div>
    </div>

    <!-- Sección del Equipo -->
    <div class="team-section text-center my-5">
      <h2>Conoce a Nuestro Equipo</h2>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <img src="../assets/Integrantes/Sebastian.jpeg" alt="Miembro del Equipo" class="rounded-circle mb-3" />
          <h4>Emanuel Ginovski</h4>
          <p>Fundadora y CEO</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/Integrantes/Jonathan.jpeg" alt="Miembro del Equipo" class="rounded-circle mb-3" />
          <h4>Jonathan Vitangeli</h4>
          <p>Jefe de Ventas</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/Integrantes/Emanuel.jpg" alt="Miembro del Equipo" class="rounded-circle mb-3" />
          <h4>Sebastian Zavala</h4>
          <p>Jefe de Ventas</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/Integrantes/Rodolfo.jpg" alt="Miembro del Equipo" class="rounded-circle mb-3" />
          <h4>Rodolfo Messina </h4>
          <p>Jefe de Ventas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-page h1 {
  font-size: 3rem;
  font-weight: bold;
}

.about-page .icon-box {
  margin-bottom: 1.5rem;
}
.rounded-circle{
  width: 200px; 
  height: 200px; 
  object-fit: cover; 
}
</style>