<script setup lang="ts">
import Header from './components/organisms/Header.vue';



</script>

<template>
  <header class="flex flex-col">
    <Header />
  </header>
  <main class="flex-1 px-4 py-6 min-h-screen ">
    <router-view />
  </main>

</template>

<style scoped></style>
