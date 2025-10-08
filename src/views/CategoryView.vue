<template>
  <div>
    <h1>Category</h1>
    <pre>{{ foodStore.meal }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../stores/useCategoryStore';

const foodStore = useCategoryStore();
const route = useRoute()

onMounted(() => {
  const initialCategory = route.params.name
  if (typeof initialCategory != 'string') return
  foodStore.getCategory(initialCategory)
})

watch(() => route.params.name,
  (newCategory) => {
    if(typeof newCategory != 'string') return
    foodStore.getCategory(newCategory)
  })


</script>

<style scoped></style>