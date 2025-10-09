<template>
  <button 
  @click="props.onClick"
 class="bg-green text-black px-4 py-2 rounded text-sm hover:bg-darkGreen transition">
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  onClick: () => void
}>()
</script>

<style scoped>

</style>