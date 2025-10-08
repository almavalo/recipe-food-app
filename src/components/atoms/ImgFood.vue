<template>
  <img :src="src" :alt="alt" class="w-full h-48 object-cover rounded-t">
</template>

<script setup lang="ts">
  defineProps<{
    src: string,
    alt: string
  }>()
</script>

<style scoped>

</style>