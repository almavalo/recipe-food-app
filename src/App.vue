<script setup lang="ts">
import Footer from './components/organisms/Footer.vue';
import Header from './components/organisms/Header.vue';
</script>

<template>
  <section class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow py-6  w-full">
      <router-view />
    </main>
    <Footer />
  </section>

</template>

<style scoped></style>
