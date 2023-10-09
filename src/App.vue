<script setup>
import FirstLine from "./components/FirstLine.vue";
</script>
<template>
  <header>
    <div class="wrapper bg-red-400">
      <h1 class="text-3xl text-center">Vue Cats</h1>
    </div>
  </header>
  <div class="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500">
    <FirstLine />
  </div>
</template>
