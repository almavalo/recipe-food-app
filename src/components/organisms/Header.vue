<template>
  <header class="grid grid-cols-2 items-center bg-green text-white shadow px-4 py-2">
    <section class="flex items-center">
      <img @click="goHome" class="w-32 cursor-pointer" src="./../../assets/name.png" alt="logo">
    </section>
    <section class="flex items-center justify-end font-medium">
      <SelectCategory />
    </section>
  </header>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import SelectCategory from '../molecules/SelectCategory.vue';
const router = useRouter();

const goHome = () => {
  router.push({name: 'home'})
}


</script>

<style scoped></style>