<template>
  <v-container class="about-page mt-5">
    <!-- Section Title -->
    <v-row class="text-center mb-5">
      <v-col>
        <h1 class="display-3 font-weight-bold">Sobre Nosotros</h1>
        <p class="lead text-muted">Productos de calidad a buen precio.</p>
      </v-col>
    </v-row>

    <!-- Sección Sobre Nosotros -->
    <v-row>
      <v-col md="8" class="mx-auto mb-4">
        <p>
          Bienvenido a <strong>Nuestra Tienda en Línea</strong>, tu fuente número uno para todo lo relacionado
          con [producto, ropa, electrónica, etc.]. Nos dedicamos a ofrecerte los mejores productos,
          con un enfoque en calidad, servicio al cliente y originalidad.
        </p>
        <p>
          Fundada en 2024, Nuestra Tienda ha recorrido un largo camino desde sus inicios. Esperamos que disfrutes
          de nuestros productos tanto como nosotros disfrutamos ofrecértelos.
        </p>
        <div class="text-center">
          <v-btn color="primary" to="/catalog" large>Comprar Ahora</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Sección de Valores -->
    <v-row class="text-center my-5">
      <v-col md="4" class="mb-4">
        <v-icon large color="primary">mdi-truck-fast</v-icon>
        <h3 class="mt-2">Entrega Rápida</h3>
        <p>Aseguramos que tus productos se entreguen rápida y seguramente a tu puerta.</p>
      </v-col>

      <v-col md="4" class="mb-4">
        <v-icon large color="primary">mdi-credit-card</v-icon>
        <h3 class="mt-2">Pagos Seguros</h3>
        <p>Pagos 100% seguros a través de plataformas confiables para garantizar tu privacidad y seguridad.</p>
      </v-col>

      <v-col md="4" class="mb-4">
        <v-icon large color="primary">mdi-star</v-icon>
        <h3 class="mt-2">Alta Calidad</h3>
        <p>Garantizamos productos de alta calidad, seleccionados de las mejores fuentes a nivel mundial.</p>
      </v-col>
    </v-row>

    <!-- Sección del Equipo -->
    <v-row class="text-center my-5">
      <v-col md="3" class="mb-4">
        <v-avatar size="150" class="mx-auto" :style="{ border: '3px solid #007bff' }">
          <img src="../assets/Integrantes/Sebastian.jpeg" alt="Emanuel Ginovski" />
        </v-avatar>
        <h4>Emanuel Ginovski</h4>
        <p>Fundador y CEO</p>
      </v-col>
      <v-col md="3" class="mb-4">
        <v-avatar size="150" class="mx-auto" :style="{ border: '3px solid #007bff' }">
          <img src="../assets/Integrantes/Jonathan.jpeg" alt="Jonathan Vitangeli" />
        </v-avatar>
        <h4>Jonathan Vitangeli</h4>
        <p>Jefe de Ventas</p>
      </v-col>
      <v-col md="3" class="mb-4">
        <v-avatar size="150" class="mx-auto" :style="{ border: '3px solid #007bff' }">
          <img src="../assets/Integrantes/Emanuel.jpg" alt="Sebastian Zavala" />
        </v-avatar>
        <h4>Sebastian Zavala</h4>
        <p>Jefe de Ventas</p>
      </v-col>
      <v-col md="3" class="mb-4">
        <v-avatar size="150" class="mx-auto" :style="{ border: '3px solid #007bff' }">
          <img src="../assets/Integrantes/Rodolfo.jpg" alt="Rodolfo Messina" />
        </v-avatar>
        <h4>Rodolfo Messina</h4>
        <p>Jefe de Ventas</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No es necesario agregar lógica en este componente, ya que es principalmente estático.
</script>

<style scoped>
.about-page {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.v-avatar img {
  object-fit: contain; 
  width: 100%;
  height: 100%;
}

.v-col h4 {
  font-weight: bold;
  color: #343a40;
}

.v-btn {
  font-weight: bold;
}

.v-icon {
  transition: transform 0.3s;
}

.v-icon:hover {
  transform: translateY(-5px);
}
</style>
