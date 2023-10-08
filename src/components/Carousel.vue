<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ImageCircle from "./ImageCircle.vue";
</script>
<template>
  <Carousel>
    <Slide v-for="slide in 5" :key="slide">
      <ImageCircle class="carousel__item" @click="handleClick" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
