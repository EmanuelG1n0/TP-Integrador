<template>
  <v-carousel>
    <v-carousel-item
      v-for="(banner, index) in banners"
      :key="index"
      :src="banner.imageUrl"
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <h2 class="white--text">{{ banner.title }}</h2>
          <p class="white--text">{{ banner.description }}</p>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  banners: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.v-carousel-item {
  background-size: cover;
  background-position: center;
}
</style>