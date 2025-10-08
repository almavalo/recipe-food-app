<script setup lang="ts">
import Header from './components/organisms/Header.vue';
</script>

<template>
  <container class="flex flex-col min-h-screen">
    <Header />
    <main class="px-4 py-6 min-h-screen max-w-7xl mx-auto">
      <router-view />
    </main>

  </container>

</template>

<style scoped></style>
