<template>
  <v-footer app color="primary" dark class="footer">
    <v-row justify="center" align="end">
      <v-col class="text-center white--text footer-text">
        &copy; {{ new Date().getFullYear() }} E-Commerce App. Todos los derechos reservados.
      </v-col>
      <v-col class="text-center">
        <v-btn icon class="footer-icon" href="https://www.facebook.com" target="_blank">
          <v-icon size="20">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon class="footer-icon" href="https://www.twitter.com" target="_blank">
          <v-icon size="20">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon class="footer-icon" href="https://www.instagram.com" target="_blank">
          <v-icon size="20">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon class="footer-icon" href="https://wa.me/1158016190" target="_blank">
          <v-icon size="20">mdi-whatsapp</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup>
</script>

<style scoped>

</style>