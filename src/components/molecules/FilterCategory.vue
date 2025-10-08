<template>
  <section class="w-400px mx-3 my-auto flex justify-center mb-5">
    <input 
      class="w-400px h-53px rounded-md py-1 border-2 border-green-700 focus:border-yellow-600 p-2"
      type="text" 
      placeholder="Filter by name:" 
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