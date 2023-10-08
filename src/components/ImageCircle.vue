<script setup>
import { onMounted, ref } from "vue";
import { getCatPhoto } from "../../fable/src/Request.fs.js";

const url = ref("");
const query = "https://api.thecatapi.com/v1/images/search?limit=1";

onMounted(async () => (url.value = await getCatPhoto(query)));
</script>
<template>
  <img
    class="flex rounded-full w-52 md:h-96 md:w-96 object-cover mb-16 border-2 border-white hover:shadow-2xl hover:shadow-white cursor-pointer shadow-purple-400"
    alt="Loading..."
    v-bind:src="url"
  />
</template>
