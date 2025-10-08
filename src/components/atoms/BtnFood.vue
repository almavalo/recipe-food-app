<template>
  <button 
  @click="onClick"
 class="bg-green text-black px-4 py-2 rounded text-sm hover:bg-darkGreen transition">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  onClick: () => void
}>()
</script>

<style scoped>

</style>