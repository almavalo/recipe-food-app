<template>
  <header class="grid grid-cols-2 items-center bg-green text-white shadow px-4 py-2">
    <section class="flex items-center">
      <img class="w-32" src="./../../assets/name.png" alt="logo">
    </section>
    <section class="flex items-center justify-end font-medium">
      <SelectCategory />
    </section>
  </header>
</template>

<script setup lang="ts">

import SelectCategory from '../molecules/SelectCategory.vue';


</script>

<style scoped></style>