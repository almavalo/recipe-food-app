<template>
  <section class="w-full px-4 my-4 flex justify-center">
    <input 
      class="w-full max-w-xl h-12 rounded-md border-2 border-green-700 focus:border-yellow-600 px-4 py-2 text-base shadow-sm transition duration-200"
      type="text" 
      placeholder="Filtrar por nombre..." 
      v-model="nameFood"
    >
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCategoryStore } from '../../stores/useCategoryStore';

const nameFood = ref<string>('')
const store = useCategoryStore()

watch(nameFood, (val) => {
  store.filterByName(val)
})
</script>

<style scoped>

</style>