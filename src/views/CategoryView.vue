<template>
  <div>
    <h1>Category</h1>
    <pre>{{ foodStore.meal }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useFoodStore } from '../stores';
import { useRoute } from 'vue-router';

const foodStore = useFoodStore();
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