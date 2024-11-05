<template>
  <v-footer app color="primary" dark>
    <v-row justify="center">
      <v-col class="text-center white--text">
        &copy; {{ new Date().getFullYear() }} E-Commerce App. Todos los derechos reservados.
      </v-col>
      <v-col class="text-center">
        <v-btn icon href="https://www.facebook.com" target="_blank">
          <v-icon size="24">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://www.twitter.com" target="_blank">
          <v-icon size="24">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com" target="_blank">
          <v-icon size="24">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon href="https://wa.me/1158016190" target="_blank">
          <v-icon size="24">mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
/* No es necesario código JavaScript adicional */
</script>

<style scoped>
.v-btn {
  padding: 0;
}
.v-icon {
  font-size: 24px;
}
@media (max-width: 600px) {
  .v-icon {
    font-size: 18px;
  }
}
</style>