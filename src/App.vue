<script setup lang="ts">
import Header from './components/organisms/Header.vue';
</script>

<template>
  <container class="flex flex-col min-h-screen">
    <Header />
    <main class="py-6 min-h-screen max-w-7xl">
      <router-view />
    </main>

  </container>

</template>

<style scoped></style>
